import React from "react";

import Navbar from "@components/Navbar";
import UnitDropdown from "@components/UnitDropdown";

import UpdatesPanel from "@components/UpdatesPanel";
import ChatBlock from "@components/ChatBlock";

import { sampleAnnouncements } from "@data/updatesPanelData";

import styles from "./CoursePage.module.css";

type props = {
  userId: string;
  courseId: string;
};

const CoursePage: React.FC<props> = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.courseContentWrapper}>
        
        <main className={styles.mainContent}>
          <h1 className={styles.courseTitle}>Course Title</h1>
          <p className={styles.courseSubtitle}>Welcome to the course page!</p>
          
          <section className={styles.unitsSection}>
             <h2>Course Units</h2>
             <div className={styles.unitsList}>
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
                <UnitDropdown />
             </div>
          </section>
        </main>
        
        <aside className={`${styles.sidebar}`}>
          <section className={styles.courseOverview}>
             <UpdatesPanel panelHeadline="Announcements" contentType="announcements" content={sampleAnnouncements} />
          </section>
          
          <section className={styles.courseChatBlock}>
            <ChatBlock />
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CoursePage;
