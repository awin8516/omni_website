<template>
  <div class="service">
    <div class="banner-title ac"><img :src="banner"></div>
    <div class="wrap">
      <div class="content">
        <ul>
          <li v-for="item in serviceList" :key="item.title">
            <a :href="item.url">
              <img class="bgimg" :src="item.bgimg" :alt="item.title">
              <div class="title">
                <div class="inside">
                  <img :src="item.icon">
                  <h2>{{item.title}}</h2>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/service.css';
export default {
  name: 'service',
  data() {
    return {
      pageConfig : {
        title : 'OUR SERVICE 奥萌',
        footerShow : true
      },
      banner : require('../assets/image/service-banner.jpg'),
      serviceList : [
        {
          bgimg : require('../assets/image/service-1-1.jpg'),
          icon : require('../assets/image/service-icon-1.png'),
          title : '社交化营销内容',
          url : '#'
        },
        {
          bgimg : require('../assets/image/service-1-2.jpg'),
          icon : require('../assets/image/service-icon-2.png'),
          title : '整合数字营销',
          url : '#'
        },
        {
          bgimg : require('../assets/image/service-1-3.jpg'),
          icon : require('../assets/image/service-icon-3.png'),
          title : '搜索引擎优化',
          url : '#'
        },
        {
          bgimg : require('../assets/image/service-1-4.jpg'),
          icon : require('../assets/image/service-icon-4.png'),
          title : 'KOL 管理',
          url : '#'
        },
        {
          bgimg : require('../assets/image/service-1-5.jpg'),
          icon : require('../assets/image/service-icon-5.png'),
          title : '社交媒体环境监测',
          url : '#'
        },
        {
          bgimg : require('../assets/image/service-1-6.jpg'),
          icon : require('../assets/image/service-icon-6.png'),
          title : '官网设计及开发',
          url : '#'
        }
      ]
    }
  },
  created() {
    this.$emit('paramers', this._data.pageConfig);
  }
}
</script>