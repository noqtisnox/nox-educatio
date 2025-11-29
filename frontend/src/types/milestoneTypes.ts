export type Milestone = {
  id: string;
  title: string;
  course: string;
  dueDate: Date;
  type: 'Assignment' | 'Quiz' | 'Exam';
};