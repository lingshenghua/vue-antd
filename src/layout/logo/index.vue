<template>
  <div class="logo">
    <img src="http://file-shieep-test.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E5%8F%B8logo%20-%20K.png?OSSAccessKeyId=LTAIKDn6PRfDKGqO&Expires=1907228868&Signature=WYFPM8eXq5oVAULxomVkkh7wp7Q%3D" alt="">
    <h3 v-show="!collapsed" class="title">快捷舰</h3>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    color: white;
    margin-bottom: 0;
  }
}
</style>
