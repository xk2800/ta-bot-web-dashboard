import { Wrapper, Content } from "./CommandList.styles";

const CommandList = ({ commands, head }) => {
  let commandsList = commands.commands;
  if (commandsList.length < 0) {
    return (
      <>
        {" "}
        <p>No Commands</p>{" "}
      </>
    );
  } else {
    return (
      <div className="command-list">
        <h2>{head}</h2>
        {commandsList.map((cmd) => (
          <Wrapper>
            <div className="command-listed" key={cmd.id}>
              <h3>
                <code>{cmd.command}</code>{" "}
                <span className="short_text"> - {cmd.shorttext}</span>
              </h3>
              <Content>
                <p>Usage:</p>
                <p>{cmd.explanation}</p>
                <code>
                  <p className="code">{cmd.example}</p>
                </code>
              </Content>
            </div>
          </Wrapper>
        ))}
      </div>
    );
  }
};

export default CommandList;
