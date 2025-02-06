<template>
  <div>
    <h3 class="text-white">{{ title }}</h3>
    <div
      class="card"
      v-for="task in tasks"
      :key="task.id"
    >
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        {{ new Date(task.date).toLocaleDateString() }}
      </p>
      <button
        class="btn primary"
        @click="open(task.id)"
      >
        Посмотреть
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import AppStatus from '../components/AppStatus';

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const router = useRouter();

    const tasks = computed(() => store.getters.tasks);
    const activeTasksCount = computed(() => store.getters.activeTasksCount);
    const title = computed(() => {
      if (tasks.value.length === 0) {
        return 'Задач пока нет';
      } else {
        return `Всего активных задач: ${activeTasksCount.value}`;
      }
    });

    return {
      tasks,
      activeTasksCount,
      title,
      open: (id) => router.push(`/task/${id}`),
    };
  },
};
</script>
