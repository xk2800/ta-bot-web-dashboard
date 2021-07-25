import { Wrapper, Content } from "./CommandList.styles";

const CommandList = ({ commands, head }) => {

    return (


        <div className="command-list">
            <h2>{head}</h2>
            {commands.map((cmd) => (
                <Wrapper>
                    <div className="command-listed" key={cmd.id}>
                        <h3><code>{cmd.command}</code> <span className="short_text"> - {cmd.short_text}</span></h3>
                        <Content>
                            <p>Usage:</p>
                            <p>{cmd.explanation}</p>
                            <code><p className='code'>{cmd.example}</p></code>
                        </Content>
                    </div>
                </Wrapper>
            ))}
        </div>
    );
};

export default CommandList;