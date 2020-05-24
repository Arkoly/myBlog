<template>
  <div class="link-box">
    <ul class="link-box-wrap">
      <li v-for="item in linkBox.list" :class="['link-item']" @click="handleClick(item.articleId)">
        <a :class="item.clazz" :title="item.title" :href="(!!item.href) && item.href" target="_blank">
        </a>
         <span>{{item.text}}</span>
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
      linkBox:{}
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../skins/index.js`).then(mod => {
      let data = mod.linkBox;
      this.$nextTick(()=>{
        this.linkBox = data;
      });
    });
  },
  methods: {
    handleClick(queryId){
      this.$router.push({path: '/blog', query: {articleId: queryId}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
