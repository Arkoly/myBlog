<template>
  <div class="header-tips">
      <ul class="wrapper">
          <li v-for="item in tips.list" 
              :class="item.clazz">
            <a target="_blank"
              :href="item.href"
            >{{item.textZh}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tips:{}
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../skins/index.js`).then(mod => {
      let data = mod.headerTip;
      this.$nextTick(()=>{
        this.tips = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
