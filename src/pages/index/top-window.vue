<template>
  <view class="top-window-header">
    <view class="left-header logo">
      <navigator class="logo" open-type="reLaunch" url="/pages/index/personal">
        <image src="static/good.png" mode="heightFix" style="width: 30px;"></image>
        <text>个人展示简历</text>
      </navigator>
    </view>
    <custom-tab-bar
      class="tab-bar-flex"
      direction="horizontal"
      :show-icon="false"
      :selected="current"
      @onTabItemTap="toSecondMenu"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      selected: {
        component: 0,
        API: 1,
        extUI: 2,
        template: 3
      },
      current: 0,
      indexPage: [
        {
          tabBar: "/pages/index/personal",
          index: "/pages/index/personal"
        },
        {
          tabBar: "/pages/index/work",
          index: "/pages/index/work"
        },
                {
          tabBar: "/pages/index/education",
          index: "/pages/index/education"
        }
      ]
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(newRoute) {
        const width = uni.getSystemInfoSync().screenWidth;
        if (width >= 768) {
          let path = newRoute.path;
          let comp;
          if (path === "/") {
            comp = "component";
            path = "/pages/index/index";
          } else {
            comp = path.split("/")[2];
          }
          this.current = this.selected[comp];
          for (const item of this.indexPage) {
            if (path === item.tabBar) {
              uni.switchTab({
                url: item.index
              });
            }
          }
        }
      }
    }
  },
  mounted() {
    // console.log("挂载");
  },
  destroyed() {
    // console.log("销毁");
  },
  methods: {
    toSecondMenu(e) {
      const activeTabBar = "/" + e.pagePath;
      for (const item of this.indexPage) {
        if (activeTabBar === item.tabBar) {
          uni.switchTab({
            url: item.index
          });
        }
      }
    }
  }
};
</script>

<style>
.top-window-header {
  height: 60px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e1;
  background-color: #ffffff;
  color: #333;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
}

.logo image {
  height: 50px;
  width: 50px;
}

.logo text {
  margin-left: 8px;
}

.right-header {
  display: flex;
  flex-direction: row;
  color: #333;
}

.right-header-item {
  line-height: 25px;
  margin-left: 40px;
  cursor: pointer;
  font-size: 16px;
}

.active {
  color: #4cd964;
  border-bottom: 2px solid;
}

.tab-bar-flex {
  width: 360px;
}

.phone-link {
  padding-left: 20px;
  cursor: pointer;
}

.new-icon {
  margin-left: -3px;
  /* margin-right: 5px; */
  margin-top: -20px;
}
</style>
