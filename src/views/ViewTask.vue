<template>
  <div
    v-if="task"
    class="card"
  >
    <h2>{{ task.title }}</h2>
    <p><span class="bold">Статус</span>: <AppStatus :type="task.status" /></p>
    <p>
      <span class="bold">Дэдлайн</span>:
      {{ new Date(task.date).toLocaleDateString() }}
    </p>
    <p><span class="bold">Описание</span>: {{ task.description }}</p>
    <div>
      <button
        class="btn"
        @click="setStatus('pending')"
      >
        Взять в работу
      </button>
      <button
        class="btn primary"
        @click="setStatus('done')"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        @click="setStatus('cancelled')"
      >
        Отменить
      </button>
    </div>
  </div>
  <h3
    v-else
    class="text-white center"
  >
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppStatus from '../components/AppStatus';

export default {
  components: { AppStatus },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const task = computed(() => store.getters.taskById(props.id));

    const setStatus = (status) => {
      const updated = { ...task.value, status };
      store.dispatch('changeTask', updated);
    };

    return {
      task,
      setStatus,
    };
  },
};
</script>
