const chatList = (props) => {
    const chats = props.chats;

    const chatList = chats.map(chat => <p key={chat.id}>{chat.title}</p>)

    return (
        <div className="chatList">
            {chatList}
        </div>
    )
}

export default chatList;