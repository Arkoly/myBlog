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
export default {
  props:['sub','index'],
  data () {
    return {

    }
  },
   created(){
    console.log(this.sub.list)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
