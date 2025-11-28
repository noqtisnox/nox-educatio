import React, { useState, useRef, useEffect } from "react";

import MessageBubble from "../MessageBubble";

import styles from "./ChatBlock.module.css";

const initialMessages = [
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
    const messageViewRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState(initialMessages); 

    useEffect(() => {
        if (messageViewRef.current) {
            messageViewRef.current.scrollTop = messageViewRef.current.scrollHeight;
        }
    }, [messages]);
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutcomingMessage(event.target.value);
    }
    
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
            <div className={styles.messageView} ref={messageViewRef}>
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} sender={msg.sender} message={msg.message}/>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={outcomingMessage} onChange={handleChange} placeholder="Say something..."/>
                <button type="submit">Send</button> 
            </form>
        </div>
    );
}

export default ChatBlock;