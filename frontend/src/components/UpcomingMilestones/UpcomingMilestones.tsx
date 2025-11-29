import React from 'react';
import styles from './UpcomingMilestones.module.css';

type Milestone = {
  id: string;
  title: string;
  course: string;
  dueDate: Date; 
  type: 'Assignment' | 'Quiz' | 'Exam';
};

type Props = {
  milestones: Milestone[];
}

const formatDueDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const UpcomingMilestones: React.FC<Props> = ({ milestones }) => {
  const sortedMilestones = [...milestones].sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const getIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'Quiz':
        return '✍️';
      case 'Exam':
        return '🚨';
      case 'Assignment':
      default:
        return '📝';
    }
  };

  return (
    <div className={styles.milestonesWrapper}>
      <h3 className={styles.sectionHeader}>⏳ Upcoming Milestones</h3>
      
      {sortedMilestones.length === 0 ? (
        <p className={styles.noTasks}>🎉 All clear! No upcoming tasks in the next week.</p>
      ) : (
        <ul className={styles.milestonesList}>
          {sortedMilestones.map((milestone) => (
            <li key={milestone.id} className={styles.milestoneItem}>
              <span className={styles.itemIcon}>{getIcon(milestone.type)}</span>
              <div className={styles.itemDetails}>
                <p className={styles.itemTitle}>{milestone.title}</p>
                <p className={styles.itemCourse}>{milestone.course} - {milestone.type}</p>
              </div>
              <div className={styles.itemDueDate}>
                {formatDueDate(milestone.dueDate)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UpcomingMilestones;