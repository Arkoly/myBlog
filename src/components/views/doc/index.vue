<template>
  <div class="doc">
    <comp-card></comp-card>
  </div>
</template>

<script>
const compCard = () => import(/* webpackChunkName: "./slider" */'../../card')

export default {
  components:{
    compCard
  },
  data () {
    return {
      msg: 'Welcome to DOC page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
