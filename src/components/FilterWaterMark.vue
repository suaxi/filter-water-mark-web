<template>
  <div v-title data-title="视频去水印">
    <van-cell-group>
      <van-field v-model="url" label="视频链接" placeholder="请输入链接地址"/>
    </van-cell-group>
    <van-button type="primary" v-show="false">粘贴</van-button>
    <van-button type="info" size="small" @click="download(url)">下载</van-button>
    <div v-show="result">
      <van-divider />
      <van-tag type="success">下载地址:</van-tag>
      <p>{{result}}</p>
    </div>
  </div>
</template>

<script>
import {Notify, Toast} from "vant";
import axios from "axios";

export default {
  name: "FilterWaterMark",
  data() {
    return {
      url: '',
      result: ''
    }
  },
  methods: {
    download(val) {
      if (!this.url.trim()) {
        Toast.fail('URL不能为空');
        return;
      }
      let downloadURL = val.replaceAll("%", "");
      axios.post(`api/filterWaterMark?url=${downloadURL}`).then(
          response => {
            Notify({ type: 'success', message: '请求成功' });
            setTimeout((this.result = response.data.videos[0].url), 1000)
          },
          error => {
            Notify({ type: 'danger', message: error.response.data.message });
          }
      )
    }
  }
}
</script>

<style scoped>
* {
  margin: 5px;
}
</style>