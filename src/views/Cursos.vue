<template>
  <div>
    <h1>Cursos que moldarão seu futuro profissional</h1>
    <h3 v-if="!hasCourses">
      Não há ainda cursos a serem exibidos
    </h3>
    <lista-cursos :cursos="cursos" @update="doUpdate" />
  </div>
</template>

<script>
import axios from 'axios';
import ListaCursos from '@/components/Cursos/ListaCursos';
import { state } from '@/service/cursos';

export default {
  name: 'Cursos',
  components: {
    ListaCursos,
  },
  async created() {
    state.cursos = (
      await axios.get('/api/courses')
    ).data.courses;
  },
  computed: {
    hasCourses() {
      return this.cursos.length > 0;
    },
    cursos() {
      return state.cursos;
    },
  },
  methods: {
    async doUpdate(curso) {
      const res = await axios.put('/api/courses', curso);
      this.cursos = res.data.courses;
    },
  },
};
</script>
