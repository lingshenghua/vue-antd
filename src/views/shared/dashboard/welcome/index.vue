<template>
  <div>
    <div class="box">
      <img src="~@/assets/analysis.svg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100vh - 280px);
  display: flex;
  flex-direction: column;

  img {
    flex: 1;
  }

  .ant-form {
    flex: 2;
  }
}
</style>
