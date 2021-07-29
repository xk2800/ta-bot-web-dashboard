import { useState } from "react";
import axios from 'axios';

import { Wrapper } from "./AddNew.styles";

const AddNew = () => {

    const [command, setCommmand] = useState('');
    const [shorttext, setShortText] = useState('');
    const [explanation, setExplanation] = useState('');
    const [example, setExample] = useState('');
    const [exampleTwo, setExampleTwo] = useState('');
    const [pending, setPending] = useState(false);

    const handleSubmit = (e) => {

        //e.preventDefault();

        const cmds = { command, shorttext, explanation, example, exampleTwo };

        setPending(true);

        //setTimeout(() => {
        console.log(cmds);

        fetch('http://localhost:4006/commands', {

            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cmds)

        }).then(() => {
            setPending(false);
            console.log('new command added');
        });
        // .catch(error => {
        //     console.log(error);
        // });


        //}, 1000);
    };

    return (

        <div className="add">
            <h2>Add New Command To Dashboard</h2>
            <h6>*Note: This only adds command list to web dashboard, not Discord Bot</h6>
            <br />
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="commands">Command:</label>
                    <input
                        type="text"
                        required
                        id="commands"
                        value={command}
                        onChange={(e) => setCommmand(e.target.value)}
                    /><br />

                    <label htmlFor="shorttext">Short text/Description:</label>
                    <input
                        type="text"
                        required
                        id="shorttext"
                        value={shorttext}
                        onChange={(e) => setShortText(e.target.value)}
                    /><br />

                    <label htmlFor="explanation">Command explanation:</label>
                    <textarea
                        required
                        id="explanation"
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                    ></textarea><br />

                    <label htmlFor="example">Code Example:</label>
                    <input
                        type="text"
                        required
                        id="example"
                        value={example}
                        onChange={(e) => setExample(e.target.value)}
                    /><br />

                    <label htmlFor="example">Code Example 2:</label>
                    <input
                        type="text"
                        id="example"
                        value={exampleTwo}
                        onChange={(e) => setExampleTwo(e.target.value)}
                    /><br />

                    <button>Add Command</button>

                </form>
            </Wrapper>
        </div>



    );
};

export default AddNew;