<template>
  <div class="threejs-content">
    <div class="wrapper">
      <ul class="list-main">
        <li class="list-item">
          <div>
            <h3>绑定属性</h3>
            <p v-bind:title="msg">移动鼠标到此处提示title</p>
          </div>
        </li>
        <li class="list-item">
          <div>
            <h3>绑定事件</h3>
            <p>{{reverseMsg}}</p>
            <button v-on:click="reverse">逆转消息</button>
          </div>
        </li>
        <li class="list-item">
          <div class="model-item">
            <h3>双向数据绑定</h3>
            <p>input输入的数据:{{modelMsg}}</p>
            <input type="text" :placeholder="placeholderText" @focus="focusText" v-model="modelMsg">
          </div>
        </li>
        <li class="list-item">
          <div>
            <h3>生命周期钩子函数</h3>
            <p>{{life.a}}</p>
          </div>
        </li>
        <li class="list-item">
          <div>
            <h3>v-once 的使用</h3>
            <p>
              <span v-once  :title="msg">第一：{{message}}</span><br/><span > 第二：{{message}}</span>
            </p>
          </div>
        </li>
        <li class="list-item">
          <div>
            <h3>模板表达式中使用js语句表达式</h3>
            <p>
              <span> {{message + new Date().toLocaleString()}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "three",
  data() {
    return {
      message: '接收data中的数据:',
      msg: "page loading in " + new Date().toLocaleString(),
      reverseMsg: "hello vuejs!",
      modelMsg: 'default text',
      placeholderText: '请输入：',
      life:{
        a:1
      }
    };
  },
  methods: {
    reverse() {
      this.reverseMsg = this.reverseMsg
        .split("")
        .reverse()
        .join("");
      this.message=this.reverseMsg
    },
    focusText(){
      this.modelMsg=''
    }
  },
  computed: {},
  mounted() {},
  created(){
    console.log('a is '+ this.life.a)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1~h6,div,button,input{
  padding: 0;
  margin: 0;
}
ul,ol,li{
  list-style: none;
}

li div{
  display: inline-block;
}
.list-main .list-item{
  display: inline-block;
  height: 300px;
  height: auto;
  overflow: hidden;
  vertical-align: top;
}
.list-main .list-item h3{
  width: 100%;
  height: auto;
  background: #948484;
  color: #fff;
}
button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 12px;
    font-size: 14px;
    border-radius: 5px;
    &:hover{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
}

.list-main .list-item{
  .model-item{
    p{
      line-height: 1;
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>
