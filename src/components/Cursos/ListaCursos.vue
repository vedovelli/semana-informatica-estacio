<template>
  <div>
    <section
      @click="update(curso)"
      class="card"
      :class="{ 'card-red': index > 0 }"
      v-for="(curso, index) in cursos"
      :key="curso.id"
    >
      <h3 class="title">
        <a href="#">{{ curso.title }}</a>
      </h3>
      <p>
        <em>{{ curso.description }}</em>
      </p>
      <ul>
        <li v-for="item in curso.grade" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { state } from '@/service/cursos';

export default {
  props: {
    cursos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    update(curso) {
      state.curso = curso;

      // curso.title = 'O titulo foi atualizado!';

      this.$emit('update', curso);
    },
  },
};
</script>

<style lang="css">
.card {
  cursor: pointer;
  background-color: #eccbcb;
  border: #ccc 1px solid;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  text-align: left;
}

.card-red {
  background-color: red;
}

.title {
  text-align: center;
}

.title a {
  color: #c00000;
}
</style>
