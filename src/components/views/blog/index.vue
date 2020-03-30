<template>
  <div class="blog-page">
   <div class="wrapper">
     <h2>{{blogData.blogTags}}</h2>
     <article>
       <h3 :class="'content-title'">{{blogData.blogTitle}}</h3>
       <div class="details">
         <p v-for="item in blogData.details">{{item.list}}</p>
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
      count:0   //用于接收当前点击的li的下标
    }
  },
  methods:{
    addCount(i){
       this.count = this.count+1;
    },
  },
  computed:{
  },
  mounted(){
  },
  created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/blog.js`).then(mod => {
      let data = mod.blogData;
      this.$nextTick(()=>{
        this.blogData = data;
        this.count = this.blogData.count
      });
    });
    
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
