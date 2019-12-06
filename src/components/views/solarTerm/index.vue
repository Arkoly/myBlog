<template>
  <div class="solar-term">
   <div class="wrapper">
    <ul class="calendaricity-main">
      <li v-for="(item, index) in solarTerm"
          :class="[item.clazz, {active:index === currentIndex}]">
        <a @click="getLiIndex(index)"
           :class="[item.clazz, {active:index === currentIndex}]">
           {{item.name}}
        </a>
        <div class="calendaricity-content" id="rightWrap"
          v-if="index === currentIndex">
          <ul class="wrapper"  >
            <li v-for="item0 in item.details"  
                :class="item0.clazz" >
              <h2 v-if="!!item0.title">{{item0.title}}</h2>
              <div :style="!!item0.img? 'background-image:url('+item0.img+')':''">
                <p v-for="item1 in item0.data">{{item1.list}}</p>
              </div>
            </li>
          </ul>
        </div>
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
      solarTerm: {},
      currentIndex:0   //用于接收当前点击的li的下标
    }
  },
  methods:{
    getLiIndex(i){
       this.currentIndex = i;
    },
    setHeight(){
      //设置solar term 页面的高度
      var rHeight = $('#rightWrap').outerHeight() + $("#rightWrap").position().top;
      $('.calendaricity-main').css("height",rHeight)
    }
  },
  computed:{
    // crrentIndex(){
    //   return 
    // }
  },
  mounted(){
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/solarTerm.js`).then(mod => {
      let data = mod.solarTerm;
      this.$nextTick(()=>{
        this.solarTerm = data;
        setTimeout(()=>{
           this.setHeight();
        },100)
      });
    });

    
    // this.setHeight()
    
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
