<template>
  <div id="footer" >
    <ul class="footer-info">
      <li v-for="item in footer.list">
        <a
           :class="[item.clazz]" >
        {{item.name}}
        </a>
      </li>
    </ul>
    <div>{{footer.copyRight}}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      footer:{}
    }
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../skins/index.js`).then(mod => {
      let data = mod.footer;
      this.$nextTick(()=>{
        this.footer = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
