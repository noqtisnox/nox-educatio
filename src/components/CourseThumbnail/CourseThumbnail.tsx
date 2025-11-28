import React from "react";

import { Link } from "react-router-dom";

import styles from "./CourseThumbnail.module.css";
import courseCoverImage from "@assets/img/abstract-watercolor-img.jpg";

type props = {
  courseTitle: string;
  progress: number; // progress percentage from 0 to 100
};

const CourseThumbnail: React.FC<props> = ({ courseTitle, progress }) => {
  return (
    <Link to="/course">
      <div
        className={styles.thumbnail}
        onClick={() => alert(`Navigating to course: ${courseTitle}`)}
      >
        <img
          className={styles.coverImg}
          src={courseCoverImage}
          alt="Course Cover"
        />
        <div className={styles.courseInfo}>
          <h3 className={styles.title}>{courseTitle}</h3>
          <progress value={progress} max={100}></progress>
        </div>
      </div>
    </Link>
  );
};

export default CourseThumbnail;
