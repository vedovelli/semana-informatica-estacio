<template>
  <div id="app">
    <div v-if="selectedCourse">
      Curso selecionado:
      <strong>{{ selectedCourse.title }}</strong>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cursos">Cursos</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { state } from '@/service/cursos';

export default {
  computed: {
    selectedCourse() {
      return state.curso;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
