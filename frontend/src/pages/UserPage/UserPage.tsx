import React, { useState, useEffect } from 'react';

import Navbar from '@components/Navbar'
import UserInfo from '@components/UserInfo'; // Assuming you exported UserData type from UserInfo
import UpcomingMilestones from '@components/UpcomingMilestones'; // Assuming you exported Milestone type
import styles from './UserPage.module.css';

import type { Milestone } from '../../types/milestoneTypes';
import type { UserData } from '../../types/userTypes';

type Props = {
  userId: string;
}

type ProfileData = UserData & {
  milestones: Milestone[];
};

const UserPage: React.FC<Props> = ({ userId }) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('UserPage fetching profile data for User ID:', userId);
    setLoading(true);

    setTimeout(() => {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);

      const fetchedProfile: ProfileData = {
        name: 'John Doe',
        email: 'john.doe@cms.com',
        joinDate: '2023-01-15',
        totalPosts: 145,
        commentsCount: 890,
        lastLogin: new Date().toLocaleDateString(),
        currentGradeAverage: 84.7, 
        onTimeSubmissions: 35,
        lateSubmissions: 5,
        pendingAssignments: 3,
        milestones: [
          { 
            id: 'm1', 
            title: 'Final Project Proposal', 
            course: 'Advanced React', 
            dueDate: tomorrow, 
            type: 'Assignment' 
          },
          { 
            id: 'm2', 
            title: 'Chapter 5 Quiz', 
            course: 'Backend Architecture', 
            dueDate: nextWeek, 
            type: 'Quiz' 
          },
        ],
      };
      
      setProfileData(fetchedProfile);
      setLoading(false);
    }, 1000);
  }, [userId]);


  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <Navbar />
        <div className={styles.loadingMessage}>Loading user profile...</div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className={styles.pageWrapper}>
        <Navbar />
        <div className={styles.errorMessage}>Error: User data not found.</div>
      </div>
    );
  }
  
  const { milestones, ...userInfoData } = profileData;

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.pageContent}>
        <div className={styles.leftColumn}>
            <UserInfo userId={userId} userData={userInfoData} />
        </div>
        
        <div className={styles.rightColumn}>
             <UpcomingMilestones milestones={milestones} />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
