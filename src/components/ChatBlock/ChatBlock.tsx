import React, { useState, useRef, useEffect } from "react"; // 👈 Add useRef and useEffect

import MessageBubble from "../MessageBubble";

import styles from "./ChatBlock.module.css";

const initialMessages = [ // 👈 Added many messages to force overflow
    "Hi there!",
    "This is a short message.",
    "This is a longer message designed to take up a bit more space in the chat view.",
    "Another test message.",
    "One more message for testing purposes.",
    "Message 6: Getting closer to filling the screen.",
    "Message 7: Almost there!",
    "Message 8: Time to scroll!",
    "Message 9: This message should be near the bottom of the initial view.",
    "Message 10: Final test message to ensure scrolling works."
].map((msg, index) => ({ id: index, sender: "user1", message: msg }));


const ChatBlock = () => {
    const [outcomingMessage, setOutcomingMessage] = useState('');
    const messageViewRef = useRef<HTMLDivElement>(null); // 👈 Create a ref
    
    // 👈 Add messages state
    const [messages, setMessages] = useState(initialMessages); 

    // 👈 Hook to scroll to the bottom whenever messages change
    useEffect(() => {
        if (messageViewRef.current) {
            messageViewRef.current.scrollTop = messageViewRef.current.scrollHeight;
        }
    }, [messages]);
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutcomingMessage(event.target.value);
    }
    
    // 👈 Add submit handler
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (outcomingMessage.trim() === '') return;
        
        const newMessage = {
            id: messages.length,
            sender: "user1",
            message: outcomingMessage
        };
        
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setOutcomingMessage('');
    }
 
    return (
        <div className={styles.chatBoxWrapper}>
            {/* 👈 Attach the ref to the scrollable element */}
            <div className={styles.messageView} ref={messageViewRef}>
                {/* 👈 Render messages from state */}
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} sender={msg.sender} message={msg.message}/>
                ))}
            </div>
            {/* 👈 Attach the submit handler */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={outcomingMessage} onChange={handleChange} placeholder="Say something..."/>
                <button type="submit">Send</button> 
            </form>
        </div>
    );
}

export default ChatBlock;