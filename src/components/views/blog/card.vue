<template>
  <div class="card">
    <h2>{{card.name}}</h2>
    <p>{{card.career}}</p>
    <p>{{card.address}}</p>
    <p>{{card.email}}</p>
    <ul class="linkmore">
      <li v-for="item in card.list">
        <a :class="item.clazz" :title="item.title" :href="(!!item.href) && item.href" target="_blank"></a>
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
      card:[]
    }
  },
   created(){
    import(/* webpackChunkName: "[request]" */ `../../../skins/blog.js`).then(mod => {
      let data = mod.card;
      this.$nextTick(()=>{
        this.card = data;
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
