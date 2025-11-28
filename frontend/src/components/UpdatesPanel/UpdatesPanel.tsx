import React from "react";

import type { DeadlineItem, NewsItem, AnnouncementItem } from "../../types/updatesPanelTypes";

import styles from "./UpdatesPanel.module.css";

type props = {
  panelHeadline: string;
  contentType: "news" | "deadlines" | "announcements";
  content: NewsItem[] | DeadlineItem[] | AnnouncementItem[];
}

const UpdatesPanel: React.FC<props> = ({ panelHeadline, contentType, content }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>{panelHeadline}</h1>
      <div className={styles.updatesDisplay}>
        {contentType === "news" && (content as NewsItem[]).map(item => (
          <div className={styles.updateItem}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <span className={styles.newsTitle}>{item.title}</span>
              <span className={styles.redirectMsg}>Читати далі</span>
            </a>
          </div>
        ))}
        
        {contentType === "deadlines" && (content as DeadlineItem[]).map(item => (
          <p className={styles.updateItem}>{item.courseName} | {item.assignmentName} ({item.dueDate})</p>
        ))}
        
        {contentType === "announcements" && (content as AnnouncementItem[]).map(item => (
          <p className={styles.updateItem}>@{item.to}: {item.body}</p>
        ))}
      </div>
    </div>
  );
}

export default UpdatesPanel;