<template>
  <div class="about">
    <h1>Olá {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      user: {
        firstName: 'Fabio',
        lastName: 'Vedovelli',
        email: 'vedovelli',
      },
    };
  },
  computed: {
    name() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
};
</script>
