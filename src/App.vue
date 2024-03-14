<template>
  <div>
    <header class="header">
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
    <button @click="change(10)">小</button>
    <button @click="change(20)">中</button>
    <button @click="change(30)">大</button>
  </div>
</template>

<script setup lang='ts'>
//给你想做全局字体大小 添加变量就行
//任何页面都可使用
//简单点
// 使用vueUse库 npm i @vueuse/core
import { useCssVar } from '@vueuse/core';

const change = (num: number) => {
  const size = useCssVar('--size');
  size.value = `${num}px`;
}

</script>
<style scoped lang="less">
:root {
  --size: 14px;
}

.header {
  display: flex;

  div {
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: var(--size);
  }

  /*px 固定单位 不会随着屏幕变化而变化
  rem r = root 1rem = html font-size 16px 1rem = 16px
  375屏幕 适合多少html-font size 引入淘宝flexible.js
  vw vh 相对于视口的宽度和高度进行控制 375屏幕 1vw = 3.75px
  百分比相对于父元素进行控制 viewport 相对于视口进行控制
  UI 设计稿给的是px px to view 
  */
  div:nth-child(1) {
    width: 100px;
    background-color: red;
  }

  div:nth-child(2) {
    flex: 1;
    background-color: #0f0;
  }

  div:nth-child(3) {
    width: 100px;
    background-color: #00f;
  }
}
</style>