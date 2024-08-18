<template>
  <view class="content">
    <div style="padding:20px">
      <span>江苏海洋大学</span>
      <el-divider content-position="left">工学学士</el-divider>
      <span>毕业时间</span>
      <el-divider content-position="left">2018年6月</el-divider>
      <span>曾任职计算机工程学院</span>
      <el-divider content-position="right">学习部副部长</el-divider>
    </div>
    <view :animation="animationData">
      <el-image class="logo" src="./static/good.png"></el-image>
    </view>
    <el-button @click="giveGood">点个赞吧！</el-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      animationData: {}
    };
  },
  onLoad() {
    var animation = uni.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    });

    this.animation = animation;
  },
  methods: {
    giveGood() {
      this.animation
        .rotate(-45)
        .scale(2, 2)
        .step();
      this.animationData = this.animation.export();
      setTimeout(
        function() {
          this.animation
            .rotate(0)
            .scale(1, 1)
            .step();
          this.animationData = this.animation.export();
        }.bind(this),
        1000
      );
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
