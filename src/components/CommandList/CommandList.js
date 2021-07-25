const CommandList = ({ commands, title }) => {

    return (
        <div className="blog-list">
            <h2>{title} </h2>
            {commands.map((cmd) => (
                <div className="blog-preview" /*MUST HAVE*/ key={cmd.id}> {/*key is used as an identifier(PK) */}
                    <p>{cmd.command}</p>
                    <p>{cmd.short_text}</p>
                    <p>{cmd.explanation}</p>
                    <p>{cmd.example}</p>
                </div>
            ))}
        </div>
    );
};

export default CommandList;