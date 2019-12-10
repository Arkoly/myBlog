<template>
  <div class="menu-sub">
      <ul class="menu-list-ul">
          <li v-for="item in sub.list" 
              :class="[item.clazz]">
            <a>{{item.name}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  props:['sub','index'],
  data () {
    return {

    }
  },
  methods:{
    setPos(){
      let menuliObj = $('.menu-main>li:eq('+this.index+')');
       $('#subMenu_'+this.sub.id).css({
         left: menuliObj.offset().left
       })
    }
  },
  mounted(){
    setTimeout(() =>{
      this.setPos();
    },1000);
    window.addEventListener('resize',() => {this.setPos()});
  },
  created(){
    // console.log(this.sub.list)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
