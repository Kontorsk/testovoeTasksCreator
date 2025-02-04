import { createRouter, createWebHistory } from 'vue-router';
import Tasks from './views/ViewTasks.vue';
import Task from './views/ViewTask.vue';
import New from './views/ViewNew.vue';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: Tasks, name: 'Tasks' },
    { path: '/task/:id', component: Task, name: 'Task', props: true },
    { path: '/new', component: New, name: 'New' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
