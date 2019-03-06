<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
    <g-button :loading="true">登录中</g-button>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
};
</script>
