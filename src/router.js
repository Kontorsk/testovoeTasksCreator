import { createRouter, createWebHistory } from 'vue-router';
import Tasks from './views/ViewTasks.vue';
import Task from './views/ViewTask.vue';
import New from './views/ViewNew.vue';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: Tasks, name: 'tasks' },
    { path: '/task/:id', component: Task, name: 'task', props: true },
    { path: '/new', component: New, name: 'new' },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
