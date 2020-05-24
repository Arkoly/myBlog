<template>
  <div class="doc">
    <comp-card></comp-card>
  <div class="resume-main">
  </div>
  </div>
</template>

<script>
const compCard = () => import(/* webpackChunkName: "../../card" */'../../card')

export default {
  components:{
    compCard,
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
