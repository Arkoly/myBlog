<template>
  <div class="blog">
   <div class="wrapper">
    <ul class="blog-main " id="topWrap">
      <li v-for="(item, index) in tools"
          :class="[item.clazz, {active:index === currentIndex}]">
        <a @click="getLiIndex(index)"
           :class="[item.clazz, {active:index === currentIndex}]">
           {{item.title}}
        </a>
        <template>
          <transition name="fade" mode="out-in">
            <div class="blog-content on" id="bottomWrap" 
            v-if="index === currentIndex" >
            <ul class="wrapper"  >
              <li v-for="item0 in item.list"  
                  v-if="!!item0.url"
                  :class="item0.clazz" >
                <a  :href="item0.url" v-cloak target="_blank">{{item0.title}} </a>
              </li>
            </ul>
          </div>
        </transition>
      </template>
      </li>
    </ul>
   </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'home',
  data () {
    return {
      tools: {},
      currentIndex:0   //用于接收当前点击的li的下标
    }
  },
  methods:{
    getLiIndex(i){
       this.currentIndex = i;
    },
  },
  computed:{
  },
  mounted(){
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/blog.js`).then(mod => {
      let data = mod.tools;
      this.$nextTick(()=>{
        this.tools = data;
      });
    });
    
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
