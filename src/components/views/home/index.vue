<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'home',
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
