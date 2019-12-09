<template>
  <div class="menu-sub">
      <ul class="menu-list-ul">
          <li v-for="item in tips.list" 
              :class="[item.clazz]">
            <a>{{}}</a>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
