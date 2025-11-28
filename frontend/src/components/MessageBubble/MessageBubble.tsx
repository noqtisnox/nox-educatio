import React from "react";

import styles from "./MessageBubble.module.css";

import placeholderImg from "@assets/img/abstract-watercolor-img.jpg";

type props = {
  sender: string;
  message: string;
}

const MessageBubble: React.FC<props> = ({ sender, message }) => {
  return (
    <div className={styles.messageBubbleWrapper}>
      <img className={styles.pfp} src={placeholderImg} alt="User PFP"/>
      <div className={styles.messageBlock}>
        <span className={styles.userName}>{sender}</span>
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  );
}

export default MessageBubble;