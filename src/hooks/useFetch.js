import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();  //terminate fetch when request aborted

        fetch(url, { signal: abortController.signal })
            .then(response => {
                console.log(response);

                if (!response.ok) {
                    throw Error("There was an issue with getting the data. Try again later.");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                if (error.name === "AbortError") {
                    //user abort fetching
                    console.log('User Abort Fetch');
                } else {
                    setError(error.message);
                    setIsLoading(false);
                    console.log(error.message);
                }
            });

        //abort fetch upon request
        return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;