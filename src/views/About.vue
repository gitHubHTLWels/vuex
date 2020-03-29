<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p></p>
    <p>&copy; {{author}}</p>
    <p></p>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'About',
  computed: {
    ...mapState({
      author: 'about'
    })
  }
};
</script>
