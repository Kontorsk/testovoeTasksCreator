<template>
  <form
    @submit.prevent="submit"
    class="card"
  >
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input
        v-model="title"
        type="text"
        id="title"
      />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input
        v-model="date"
        type="date"
        id="date"
      />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea
        v-model="description"
        id="description"
      ></textarea>
    </div>

    <button
      :disabled="!isValid"
      class="btn primary"
    >
      Создать
    </button>
  </form>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const title = ref('');
    const date = ref(null);
    const description = ref('');

    const isValid = computed(() => {
      return title.value !== '' && date.value && description.value !== '';
    });

    const submit = () => {
      const newTask = {
        id: Date.now().toString(),
        title: title.value,
        date: new Date(date.value).setHours(23, 59, 59, 999),
        description: description.value,
        status: 'active',
      };

      store.dispatch('createTask', newTask);
      router.push('/');
    };

    return {
      title,
      date,
      description,
      isValid,
      submit,
    };
  },
};
</script>
