<template>
  <div class="blog">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to blog page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
