<template>
  <div v-title data-title="视频去水印">
    <van-field
        v-model="url"
        clearable
        rows="1"
        autosize
        label="视频链接"
        left-icon="edit"
        type="textarea"
        placeholder="请输入链接地址"
    />

    <van-button type="primary" v-show="false">粘贴</van-button>
    <van-button type="info" size="small" @click="download(url)">下载</van-button>

    <van-loading size="24px" vertical v-show="isLoading">加载中...</van-loading>

    <div v-show="result">
      <van-divider/>
      <van-tag type="success">无水印视频地址:</van-tag>
      <van-field
          v-model="result"
          clearable
          rows="1"
          autosize
          label=""
          type="textarea"
          placeholder=""
      />
      <van-button
          id="copy_result"
          plain
          type="info"
          size="mini"
          data-clipboard-action="copy"
          :data-clipboard-text="result"
          @click="copyResult"
      >
        复制
      </van-button>
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
      isLoading: '',
      result: ''
    }
  },
  methods: {
    //解析链接
    download(val) {
      if (!this.url.trim()) {
        Toast.fail('URL不能为空');
        return;
      }
      let downloadURL = val.replaceAll("%", "");
      this.isLoading = true;
      axios.post(`api/filterWaterMark?url=${downloadURL}`).then(
          response => {
            this.isLoading = false;
            Notify({type: 'success', message: '请求成功'});
            this.result = response.data.videos[0].url
          },
          error => {
            this.isLoading = false;
            Notify({type: 'danger', message: error.response.data.message});
          }
      );
      this.url = ''
    },
    //Clipboard
    copyResult() {
      let clipboard = new this.Clipboard("#copy_result");
      clipboard.on("success", () => {
        Toast.success('复制到剪贴板成功');
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        Toast.fail('复制到剪贴板失败');
        clipboard.destroy();
      });
    }
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>