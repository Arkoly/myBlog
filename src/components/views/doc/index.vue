<template>
  <div class="doc">
    <comp-card></comp-card>
  <div class="resume-main">
      <comp-resume></comp-resume>
  </div>
  </div>
</template>

<script>
const compCard = () => import(/* webpackChunkName: "../../card" */'../../card')
const compResume= () => import(/* webpackChunkName: "./resume" */'./resume')

export default {
  components:{
    compCard,
    compResume
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
