import { Wrapper, Content } from "./CommandList.styles";

const CommandList = ({ commands, head }) => {

    return (


        <div className="command-list">
            <h2>{head}</h2>
            {commands.map((cmd) => (
                <Wrapper>
                    <div className="command-listed" key={cmd.id}>
                        <h3>{cmd.command} -{cmd.short_text}</h3>
                        <Content>
                            <p>{cmd.explanation}</p>
                            <code><p>{cmd.example}</p></code>
                        </Content>
                    </div>
                </Wrapper>
            ))}
        </div>
    );
};

export default CommandList;