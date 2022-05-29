<template>
  <div class="home">
    <h1 class="home-title">
      <img src="https://www.wangchouchou.com/usr/themes/icon.png" alt="">
      <span>蘇阿細</span>
    </h1>
    <h2 class="home-desc">功能正在完善中...</h2>

    <div class="nav-title">工具箱</div>
    <FilterWaterMark/>
  </div>
</template>

<script>
import FilterWaterMark from './FilterWaterMark'

export default {
  name: "MyHome",
  components: {
    FilterWaterMark
  }
}
</script>

<style scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  padding: 46px 20px 20px;
  background: #fff;
}

.home-title {
  margin: 0 0 16px;
  font-size: 32px;
}

.home-desc {
  margin: 0 0 40px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}

.home-title, .home-desc {
  padding-left: 16px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.home-title img {
  width: 100px;
}

.home-title span {
  margin-left: 16px;
}

.home-title img, .home-title span {
  display: inline-block;
  vertical-align: middle;
}

h1 {
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

body {
  min-width: 1100px;
  margin: 0;
  overflow-x: auto;
  color: #323233;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
  background-color: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}

.nav-title {
  margin: 24px 0 8px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}

</style>