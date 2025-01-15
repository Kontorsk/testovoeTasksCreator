import { createRouter, createWebHistory } from "vue-router";
import Tasks from "./views/Tasks.vue";
import Task from "./views/Task.vue";
import New from "./views/New.vue";

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: Tasks, name: "Tasks" },
    { path: "/task/:id", component: Task, name: "Task", props: true },
    { path: "/new", component: New, name: "New" },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
