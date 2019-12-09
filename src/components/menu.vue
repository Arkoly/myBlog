<template>
  <div id="menu" :class="[nav.clazz,]">
    <ul class="menu-main">
      <li v-for="item in nav.list"
          :data-sub="item.id"
          :class="['menu-main-list', item.clazz, {active: name===item.id}]"
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
import $ from 'jquery'
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
    console.log('datasub')
    $(document).on('mouseenter','#menu .menu-main .menu-main-list',function(e){
      let dataSub = $(this).data('sub');
      console.log(dataSub);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
