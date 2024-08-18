<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png"></image>-->
    <view class="headImg">
      <el-image class="logo" src="./static/head.jpg"></el-image>
    </view>
    <view class="headText">
      <!-- <text class="title">{{name}}</text>
      <br />
      <text class="title">{{education}}</text>
      <br />
      <text class="title">{{workTime}}</text>
      <br />
      <text class="title">{{money}}</text>
      <br />
      <text class="title">{{phone}}</text>
      <br />
      <text class="title">{{email}}</text>
      <br />
      <text class="title">{{work}}</text>-->
      <el-descriptions class="margin-top" title :column="2" border>
        <!-- <template slot="extra">
          <el-button type="primary" size="small">操作</el-button>
        </template>-->
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            姓名
          </template>
          刘德琨
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-position"></i>
            求职意向
          </template>
          WEB前端工程师
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            联系电话
          </template>
          15705130297
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-knife-fork"></i>
            期望薪资
          </template>
          10-11k
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            现居地
          </template>
          成都市
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-message"></i>
            邮箱
          </template>
          1074333972@qq.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            学历
          </template>
          本科
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            工作年限
          </template>
          7年
        </el-descriptions-item>
      </el-descriptions>
    </view>

    <el-divider></el-divider>
    <view>
      <text class="tipsTitle">技能掌握</text>
    </view>
    <view id="myChart" style="width: 100%; height: 500px"></view>
    <el-divider></el-divider>
    <view>
      <text class="tipsTitle">工作经历</text>
    </view>
    <view style="width: 100%">
      <el-amap
        ref="map"
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        class="amap-demo"
      >
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
        >
          <div
            style="
              padding: 5px 7px;
              white-space: nowrap;
              background: #ffcc99;
              color: #fff;
            "
          >
            {{ marker.text }}
          </div>
        </el-amap-marker>
        <el-amap-polyline
          :editable="polyline.editable"
          :visible="polyline.visible"
          :draggable="polyline.draggable"
          :path="polyline.path"
          @click="click"
          :strokeColor="'#FFCC66'"
          :lineJoin="'round'"
          :lineCap="'round'"
          :showDir="true"
        />
      </el-amap>
    </view>
    <el-divider></el-divider>
    <view>
      <text class="tipsTitle">个人优势</text>
    </view>
    <view id="superiorityChart" style="width: 100%; height: 500px"></view>
    <view id="manageChart" style="width: 100%; height: 500px"></view>
    <view id="businessChart" style="width: 100%; height: 500px"></view>
    <el-divider></el-divider>
    <view>
      <text class="tipsTitle">个人发展规划</text>
    </view>
    <view>
      <el-timeline>
        <el-timeline-item timestamp="2017/11" placement="top">
          <el-card>
            <h4>JAVA开发工程师</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/1" placement="top">
          <el-card>
            <h4>WEB前端开发工程师</h4>
            <p>
              由于公司发展需要，经过公司考核后，优秀员工转变为前端开发工程师。
            </p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5" placement="top">
          <el-card>
            <h4>项目经理</h4>
            <p>
              临危受命接手岌岌可危的项目，并成功完成最终交付，获得客户的赞赏好评，达成了3年内成为项目经理的目标。
            </p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2024 - " placement="top">
          <el-card>
            <h4>资深技术人员</h4>
            <p>
              不论是开发还是管理，只有在技术上拥有过硬的技能才能更方便的展开项目，所以还需继续深钻技术方向。
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //地图相关
      zoom: 4,
      center: [110.59996, 31.197646],
      markers: [
        {
          position: [120.301663, 31.574729],
          id: 1,
          text: "无锡-2017",
        },
        {
          position: [114.085947, 22.547],
          id: 2,
          text: "深圳-2019",
        },
        {
          position: [104.065735, 30.659462],
          id: 3,
          text: "成都-2022",
        },
      ],
      polyline: {
        path: [
          [120.301663, 31.574729],
          [114.085947, 22.547],
          [104.065735, 30.659462],
        ],
        editable: false,
        visible: true,
        draggable: false,
      },
    };
  },
  onLoad() {
    // this.amapPlugin = new amap.AMapWX({
    //   key: "285749c56953268322b0cb777ac67bc0" //该key 是在高德中申请的微信小程序key
    // });
  },
  mounted() {
    this.drawLine();
    this.superiorityChartdraw();
    this.manageChartdraw();
    this.businessChartdraw();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "0",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 30, name: "Vue(Vue2,Vue3)" },
              { value: 5, name: "Vuex" },
              { value: 3, name: "Axios" },
              { value: 5, name: "vue-Router" },
              { value: 10, name: "Element-ui" },
              { value: 5, name: "Nginx" },
              { value: 3, name: "uni-app" },
              { value: 5, name: "低代码" },
              { value: 10, name: "Echarts" },
              { value: 5, name: "Git" },
              { value: 5, name: "Vite" },
              { value: 30, name: "项目管理" },
              { value: 15, name: "团队管理" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    superiorityChartdraw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("superiorityChart")
      );
      let option;
      const labelOption = {
        show: true,
        // position: "insideBottom",
        // distance: 15,
        // align: "left",
        verticalAlign: "middle",
        // rotate: 90,
        formatter: "{name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      };
      option = {
        title: {
          text: "丰富的项目经验",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "大屏展示",
            data: [2],
            type: "bar",
            label: labelOption,
          },
          {
            name: "低代码平台",
            data: [8],
            type: "bar",
            label: labelOption,
          },
          {
            name: "数据可视化",
            data: [8],
            type: "bar",
            label: labelOption,
          },
          {
            name: "Gis+地图系统",
            data: [4],
            type: "bar",
            label: labelOption,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    manageChartdraw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("manageChart"));
      let option;
      const labelOption = {
        show: true,
        // position: "insideBottom",
        // distance: 15,
        // align: "left",
        verticalAlign: "middle",
        // rotate: 90,
        formatter: "{name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      };
      option = {
        title: {
          text: "丰富的项目管理经验",
        },
        xAxis: {
          type: "category",
          show: false,
          //   data: ["", "", "", "", "", "", ""]
        },
        yAxis: [
          {
            name: "项目指标%",
            type: "value",
          },
          // {
          //   name: "准时完成率%",
          //   nameLocation: "start",
          //   alignTicks: true,
          //   type: "value",
          //   inverse: false,
          // },
        ],
        series: [
          {
            name: "准时完成率",
            data: [100],
            type: "bar",
            label: labelOption,
          },
          {
            name: "客户满意度",
            data: [90],
            type: "bar",
            label: labelOption,
          },
          {
            name: "项目交付率",
            data: [100],
            type: "bar",
            label: labelOption,
          },
          // {
          //   name: "任务完成率",
          //   data: [70, 75, 74, 80, 81, 85, 90],
          //   markPoint: {
          //     data: [{ name: "任务完成率", value: "90%", xAxis: 6, yAxis: 90 }],
          //   },
          //   yAxisIndex: 1,
          //   type: "line",
          // },
        ],
      };

      option && myChart.setOption(option);
    },
    businessChartdraw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("businessChart")
      );
      let option;
      option = {
        title: {
          text: "合格的业务能力",
        },
        // legend: {
        // //   data: ["Allocated Budget", "Actual Spending"]
        // },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "团队沟通", max: 100 },
            { name: "需求理解", max: 100 },
            { name: "页面复现", max: 100 },
            { name: "需求引导", max: 100 },
            { name: "需求发掘", max: 100 },
            { name: "项目拓展", max: 100 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [90, 95, 95, 80, 70, 70],
                name: "Allocated Budget",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.headText {
  padding: 10px;
  text-align: center;
}

.logo {
  height: 300rpx;
  width: 300rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
  margin: 10px;
}
.tipsTitle {
  font-size: 46rpx;
  color: black;
  margin: 10px;
}
.amap-demo {
  height: 300px;
  padding: 10px;
}
</style>
