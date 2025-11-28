import React from 'react';

import Navbar from '@components/Navbar';
import CourseThumbnail from '@components/CourseThumbnail';

import UpdatesPanel from '@components/UpdatesPanel';

import styles from './Dashboard.module.css';
import { sampleNews, sampleDeadlines } from '@data/updatesPanelData';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <div className={styles.importantSection}>
        <UpdatesPanel panelHeadline="Deadlines" contentType="deadlines" content={sampleDeadlines}/>
        <UpdatesPanel panelHeadline="News" contentType="news" content={sampleNews}/>
      </div>
      
      <div className={styles.courseList}>
        <CourseThumbnail courseTitle={"Організація баз даних"} progress={50}/>
        <CourseThumbnail courseTitle={"Веб-технології та веб-дизайн"} progress={100}/>
        <CourseThumbnail courseTitle={"Основи смарт-технологій і систем"} progress={10}/>
      </div>
    </div>
  );
}

export default Dashboard;