<template>
  <div id="menu" :class="[nav.clazz,]">
    <ul class="menu-main">
      <li v-for="item in nav.list"
          :class="['menu-mian-list', item.clazz, {active: name===item.id}]"
          :key="item.id">
          <a
            :target=" item.target"
            :class="[item.clazz, {active: name===item.id}]">
            <span>{{item.name}}</span>
            <p v-if="nav.max===0">{{item.text}}</p>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nav:{}
    }
  },
  computed:{
    name(){
      return this.$route.name;
    }
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../skins/index.js`).then(mod => {
      let data = mod.menu;
      this.$nextTick(()=>{
        this.nav = data;
      });
    });
    console.log(this.$route.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
