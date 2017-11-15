<template>
  <div class="home">
    <swiper :options="swiperOption" class="swiper-home" ref="mySwiper" @mouseenter.native="sMouseenter" @mousemove.native="sMousemove" @mouseleave.native="sMouseleave">
      <!-- slides -->
      <swiper-slide class="slide-page slide-1">
        <div class="slide-page-inner">
          <img class="img1" src="../assets/image/index-1-1.png">
          <img class="img2" src="../assets/image/index-1-1.png">
          <img class="img3" src="../assets/image/index-1-1.png">
          <img class="img4" src="../assets/image/index-1-1.png">
          <img class="img5" src="../assets/image/index-1-1.png">
          <img class="img6" src="../assets/image/index-1-1.png">
        </div>
      </swiper-slide>
      <swiper-slide class="slide-page slide-2">
        <div class="slide-page-inner">
          <img class="img1" src="../assets/image/index-2-1.png">
          <img class="img2" src="../assets/image/index-2-1.png">
          <img class="img3" src="../assets/image/index-2-1.png">
          <img class="img4" src="../assets/image/index-2-1.png">
          <img class="img5" src="../assets/image/index-2-1.png">
        </div>
      </swiper-slide>
      <swiper-slide class="slide-page slide-3">
        <div class="slide-page-inner">
          <img class="img1" src="../assets/image/index-3-1.png">
          <img class="img2" src="../assets/image/index-3-1.png">
          <img class="img3" src="../assets/image/index-3-1.png">
          <img class="img4" src="../assets/image/index-3-1.png">
          <img class="img5" src="../assets/image/index-3-1.png">
          <img class="img6" src="../assets/image/index-3-1.png">
        </div>
      </swiper-slide>
      <swiper-slide class="slide-page slide-4">
        <div class="slide-page-inner">
          <img class="img1" src="../assets/image/index-4-1.png">
          <img class="img2" src="../assets/image/index-4-1.png">
          <img class="img3" src="../assets/image/index-4-1.png">
          <img class="img4" src="../assets/image/index-4-1.png">
          <img class="img5" src="../assets/image/index-4-1.png">
          <img class="img6" src="../assets/image/index-4-1.png">
          <img class="img7" src="../assets/image/index-4-1.png">
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div> -->
      <div class="swiper-button-next swiper-button-next-page section-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>

      <div id="swiper-content" class="swiper-content" slot="swiper-other">
        <div class="swiper-content-slide slide-1" v-bind:class="{ 'active': activeIndex == 0 }">
          <div class="swiper-content-main f-en">
            <h2>We Create</h2>
            <h2>We Socialize</h2>
            <h2>We Plan for the Future</h2>
          </div>
        </div>
        <div class="swiper-content-slide slide-2" v-bind:class="{ 'active': activeIndex == 1 }">
          <div class="swiper-content-main">
            <h2 class="f-en">We Are OmniMarketing</h2>
            <h3>我们帮助品牌通过更有效、实际的沟通方式</h3>
            <h3>最大化地实现营销效果</h3>
          </div>
        </div>
        <div class="swiper-content-slide slide-3" v-bind:class="{ 'active': activeIndex == 2 }">
          <div class="swiper-content-main">
            <h2 class="f-en">What Our Clients Say：</h2>
            <h3>百盛：<br> “我们帮助品牌通过更有效、实际的沟通方式最大化地实现营销效果”</h3>
          </div>
        </div>
        <div class="swiper-content-slide slide-4" v-bind:class="{ 'active': activeIndex == 3 }">
          <swiper :options="swiperOption2" class="swiper-work" ref="mySwiper2">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in worksList" :key="item.ID" ><div><img :src="item.Cover"></div></swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>
      </div>
    </swiper>
    <div class="swiperto-top" v-bind:class="{ 'swiperto-top-show': activeIndex!=0 }" @click="swipertoTop"></div>
  </div>
</template>

<script>
import '@/assets/css/home.css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: 'home',
  data() {
    var that = this;
    return {
      pageConfig: {
        title: 'Omni Marketing 奥萌',
        footerShow: false
      },
      activeIndex: 0,
      worksList :[],
      swipertotopShow: 0,
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 0,
        speed: 1000,
        direction: 'vertical',
        grabCursor: true,
        touchRatio : 0.5,
        setWrapperSize: true,
        autoHeight: false,
        preventClicks: true,
        pagination: '.swiper-home > .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-home > .swiper-button-prev',
        nextButton: '.swiper-home > .swiper-button-next',
        scrollbar: '.swiper-home > .swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart: function(swiper) {
          that.activeIndex = swiper.activeIndex;
          that._data.pageConfig.footerShow = swiper.activeIndex == swiper.slides.length - 1 ? true : false;
          that.$emit('paramers', that._data.pageConfig);
          that.initMove();
          //that.$emit('checkfoot', swiper.activeIndex == swiper.slides.length-1?1:0);
        },
        // more Swiper configs and callbacks...
        // ...
      },

      swiperOption2: {
        notNextTick: true,
        autoplay: 0,
        speed: 500,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 3,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: false,
        pagination: '.swiper-work > .swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-work > .swiper-button-prev',
        nextButton: '.swiper-work > .swiper-button-next',
        scrollbar: '.swiper-work > .swiper-scrollbar',
        mousewheelControl: false,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart: function(swiper) {
          //console.log(swiper.slides[swiper.activeIndex]);
          //that.workIndex = swiper.activeIndex;
        },
        // more Swiper configs and callbacks...
        // ...
      }
    }
  },
  created() {
    var that = this;
    this.$emit('paramers', this._data.pageConfig);
    this.getBanner(function(data){
      that._data.worksList = data;
    })
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //console.log('this is current swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    getBanner(callback) {
      var api = 'http://omnimkt.com/Ajax/Handler.ashx?method=GetBanner'
      this.axios.get(api).then((response) => {
        console.log(response.data);
        response.data.length && callback && callback(response.data)
      })
    },
    getChildren(parent) {
      var res = [];
      var arr = parent.childNodes;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].className != undefined) {
          res.push(arr[i]);
        };
      };
      return res;
    },
    move(data, el, time, dir) {
      time = time || 0;
      dir = dir || 1;
      const ratio = 0.003;
      el.style.transition = 'transform ' + time + 'ms';
      el.style.transformOrigin = '50% 50% -200px';
      el.style.transform = 'rotateX(' + (data.y * ratio * dir) + 'deg) rotateY(' + (-data.x * ratio * dir) + 'deg)';
    },
    sMouseenter(e) {
      this._data.posStart = { x: e.pageX, y: e.pageY };
      this.initMove();
    },
    sMousemove(e) {
      var data = { x: e.pageX - this._data.posStart.x, y: e.pageY - this._data.posStart.y };
      this.move(data, this._data.activeSlide, 0);
      this.move(data, this._data.activeWords, 0, -1);
    },
    sMouseleave(e) {
      this.move({x:0,y:0}, this._data.activeSlide, 300);
      this.move({x:0,y:0}, this._data.activeWords, 300);
    },
    initMove() {
      this._data.activeSlide = this.swiper.slides[this._data.activeIndex].childNodes[0];
      this._data.activeWords = this.getChildren(document.getElementById('swiper-content'))[this._data.activeIndex].childNodes[0];
    },
    swipertoTop(event) {
      this.swiper.slideTo(0, 1000, true);
    }
  }
}
</script>