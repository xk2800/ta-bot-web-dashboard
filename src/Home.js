//components
import useFetch from "./hooks/useFetch";
import CommandList from "./components/CommandList/CommandList";
//import Accordion from "./components/Accordion/Accordion";

const Home = () => {
  /*const [commands, setCommands] = useState([{
        command: "-help",
        short_text: "Full Command Release",
        explanation: "Expose full command available for bot",
        example: "-help",
        id: 1
    }]);*/

  const {
    data: commands,
    isLoading,
    error,
  } = useFetch("https://ta-bot-web-dashboard-api.herokuapp.com/commands/v1");

  return (
    // <h2>Welcome to the Takeaway Table's Bot Command List</h2>

    <div className="home">
      {commands && <CommandList commands={commands} title="title" />}
    </div>
  );
};

export default Home;
