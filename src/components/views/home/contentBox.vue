<template>
  <div class="content-box">
    <h2>{{contentBox.listTitle}}</h2>
    <ul class="content-box-wrap">
      <li v-for="item in contentBox.list" :class="item.clazz">
        <h3  :class="[contentBox.listClazz,'content-title']" >{{item.title}}</h3>
        <div class="left-wrap">
          <a :class="contentBox.listClazz"  :href="(!!item.href) && item.href" target="_blank">
          </a>
          <span class="content-tags">{{item.tags}}</span>
        </div>
         <div class="right-wrap">
           <p class="content-detail">{{item.detail}}</p>
            <p class="content-other">{{item.times}} 
              <span :class="contentBox.listClazz">{{item.other}}</span>
            </p>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components:{
  },
  data () {
    return {
      contentBox:{}
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/index.js`).then(mod => {
      let data = mod.contentBox;
      this.$nextTick(()=>{
        this.contentBox = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
