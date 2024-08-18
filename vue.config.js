module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Uniapp-Resume/" // 生产环境下的路径
      : "/", // 开发环境下的路径
};
