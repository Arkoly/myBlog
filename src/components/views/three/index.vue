<template>
  <div class="three-item">
   <div class="wrapper">
    <ul class="three-main " id="topWrap">
      <li></li>
    </ul>
   </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'three',
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
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
