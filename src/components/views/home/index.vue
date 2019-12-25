<template>
  <div class="home">
     <comp-slider></comp-slider>
     <comp-card></comp-card>
  </div>
</template>

<script>

const compSlider = () => import(/* webpackChunkName: "./slider" */'./slider')
const compCard = () => import(/* webpackChunkName: "../../card" */'../../card')
export default {
  name: 'home',
  components:{
    compSlider,
    compCard
  },
  data () {
    return {
      msg: 'Welcome to home page'
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/index.js`).then(mod => {
      // let data = mod.solarTerm;
      this.$nextTick(()=>{
        // this.solarTerm = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
