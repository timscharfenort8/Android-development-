import { redirect } from 'react-router-dom';
import MyTasks from './my-tasks/my-tasks';
import Dashboards from './dashboards/dashboards';
import Backlog from './backlog/backlog';

export const routes = [
  { index: true, loader: () => redirect('my-tasks') },
  { path: 'my-tasks', element: <MyTasks />, text: 'My Tasks' },
  { path: 'dashboards', element: <Dashboards />, text: 'Dashboards' },
  { path: 'backlog', element: <Backlog />, text: 'Backlog' }
];
