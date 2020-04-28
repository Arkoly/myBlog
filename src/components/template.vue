<template>
  <div :class="['main']">
    <header>
      <div id="navBox" @click="addMenu">
        <span class="navIcon"></span>
      </div>
      <span class="tags" @click="openOtherPage">{{otherPage}}</span>
      <com-headerTip></com-headerTip>
      <span id="logo" class="ROUTER_HOME"></span>
      <nav class="menu" @click="addMenu">
        <comp-menu></comp-menu>
      </nav>
    </header>
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer>
      <comp-footer></comp-footer>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";

const comHeaderTip = () =>
  import(
    /* webpackChunkName: "components/headerTip" */ "@/components/headerTip"
  );
const compMenu = () =>
  import(/* webpackChunkName: "components/menu" */ "@/components/menu");
const compFooter = () =>
  import(/* webpackChunkName: "components/footer" */ "@/components/footer");
export default {
  data() {
    return {
      isMenuList: true,
      vwidth: true,
      otherPage: "新开页面"
    };
  },
  components: {
    comHeaderTip,
    compMenu,
    compFooter
  },
  computed: {
    displayStyle() {
      return {
        display: `block`
      };
    }
  },
  methods: {
    addMenu() {
      // this.isMenuList = !this.isMenuList
      setTimeout(() => {
        if (!this.vwidth) {
          if (this.isMenuList) {
            $(".menu").css("display", "block");
            this.isMenuList = false;
          } else if (!this.isMenuList) {
            $(".menu").css("display", "none");
            this.isMenuList = true;
          }
        } else {
          return;
        }
      }, 0);
    },
    openOtherPage(){
      window.VM.$router.push('/index1')
    },
    setWidth() {
      this.vwidth = parseInt($("#app").width()) >= 1100;
      if (this.vwidth) {
        $(".menu").css("display", "block");
      }
      // console.log(this.vwidth )
      // if(this.vwidth){
      //     $('.menu').css("display","block")
      //   }else if(!this.vwidth){
      //     $('.menu').css("display","none")
      // }

      // this.isMenuList = true
    }
  },
  mounted() {
    setTimeout(() => {
      this.setWidth();
    }, 1000);
    window.addEventListener("resize", () => {
      this.setWidth();

      //   console.log('resized');
      // console.log(this.vwidth);
    });
    // console.log('mounted');
    // console.log(this.vwidth);
  },
  created() {
    setTimeout(() => {
      this.setWidth();
      //   console.log('created');
      // console.log(this.vwidth);
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/css/style";
.tags {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  margin-left: -50px;
  margin-top: -35px;
  color: #e81708;
  cursor: pointer;
}
</style>
