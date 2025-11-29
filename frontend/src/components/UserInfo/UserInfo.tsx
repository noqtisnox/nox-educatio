import React from 'react';
import placeholderImage from '@assets/img/abstract-watercolor-img.jpg';
import styles from './UserInfo.module.css';

import type { UserData } from '../../types/userTypes';

type Props = {
  userId: string;
  userData: UserData;
}

const UserInfo: React.FC<Props> = ({ userId, userData }) => {
  console.log('UserInfo rendering for User ID:', userId);
  
  if (!userData) {
    return <div className={styles.userInfoWrapper}>User not found.</div>;
  }

  const profileImage = userData.profilePictureUrl || placeholderImage;

  const StatItem: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className={styles.statItem}>
      <p className={styles.statValue}>{value}</p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );

  return (
    <div className={styles.userInfoWrapper}>
      <div className={styles.profileCard}>
        <img src={profileImage} alt={`${userData.name}'s Profile Picture`} className={styles.userPFP}/>
        <div>
            <p className={styles.userName}>{userData.name}</p>
            <div className={styles.gradeDisplay}>
                <span className={styles.gradeValue}>{userData.currentGradeAverage}%</span>
                <span className={styles.gradeLabel}>Grade Average</span>
            </div>
            <p className={styles.userEmail}>Email: {userData.email}</p>
            <p className={styles.joinDate}>Joined: {userData.joinDate}</p>
        </div>
      </div>
      
      <hr className={styles.divider} /> 
      
      <div className={styles.statsGrid}>
        <StatItem label="Total Posts" value={userData.totalPosts} />
        <StatItem label="Comments" value={userData.commentsCount} />
        <StatItem label="Pending Tasks" value={userData.pendingAssignments} />
      </div>
      
    </div>
  );
}

export default UserInfo;