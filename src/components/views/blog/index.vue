<template>
  <div class="blog-page">
   <div class="wrapper">
     <h2>{{blogData.blogTags}}</h2>
     <article >
       <h3 :class="'content-title'">{{article.blogTitle}}</h3>
       <div class="details">
         <p v-for="item in article.details">{{item.list}}</p>
       </div>
       <button @click="addCount">点赞！{{count}}</button>
     </article>
   </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'blog',
  data () {
    return {
      blogData: {},
      count:0, //用于接收当前点击的li的下标,
      articleId: 0,
      article: {}
    }
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/blog.js`).then(mod => {
      let data = mod.blogData;
      this.$nextTick(()=>{
        this.blogData = data;
        this.article = this.blogData.list.filter((e) => {
          return e.articleId === this.articleId
        })[0]
      });
    });
    this.$nextTick(() => {
      this.getArticleId()
    })
  },
  watch: {
    '$route': 'getArticleId'
  },
  methods:{
    addCount(i){
       this.count = this.count+1;
    },
    getArticleId(){
      //接收其他页面传过来的查询文章ID的参数 articleId
      this.articleId = this.$route.query.articleId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
