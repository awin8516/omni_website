<template>
  <div class="work">
    <div class="banner-title ac"><img :src="banner"></div>
    <div class="wrap">
      <div class="content clearfix">
        <ul class="work-category">
          <li class="f-en" v-bind:class="{ 'active': index == categoryIndex}" v-for="(item, index) in categoryList" :key="item.ID" @click="setCategory(index, item.ID)">{{item.Name}}</li>
        </ul>
        <swiper :options="swiperOption" class="swiper-work" ref="swiperLogo">
          <swiper-slide class="logo" v-bind:class="{ 'selected': index == logoIndex}" v-for="(item, index) in logoList" :key="item.ID" @click.native="setLogo(index, item.ID)"><img :src="item.Cover"></swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <div class="swiper-content" slot="swiper-other">
          <swiper :options="swiperOption2" class="swiper-kv" ref="swiperKv">
            <swiper-slide v-for="(item, index) in workDetail.ImageList" :key="item.index"><img :src="item.img"></swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
          <div class="swiper-content-word">
            <div class="title f-en" v-html="workDetail.Name"></div>
            <p class="description" v-html="workDetail.Info"></p>
            <ul class="completion">
              <li><b>Completed On</b><span>{{workDetail.CompletedOn}}</span></li>
              <li><b>Skills</b><span>{{workDetail.Skills}}</span></li>
              <li><b>Client</b><span>{{workDetail.Client}}</span></li>
              <li><b>Brand</b><span>{{workDetail.Brand}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import '@/assets/css/work.css';
export default {
  name: 'work',
  data() {
    var that = this;
    return {
      pageConfig: {
        title: 'OUR WORK 奥萌',
        footerShow: true
      },
      categoryIndex: 0,
      logoIndex: navigator.userAgent.toLowerCase().indexOf('mobile') == -1 ? 0 : 1,
      banner: require('../assets/image/work-banner.jpg'),

      categoryList: [],
      logoList: [],
      workDetail: {},

      swiperOption: {
        direction: navigator.userAgent.toLowerCase().indexOf('mobile') == -1 ? 'vertical' : 'horizontal',
        notNextTick: true,
        initialSlide: navigator.userAgent.toLowerCase().indexOf('mobile') == -1 ? 0 : 0,
        slidesPerView: 3,
        centeredSlides: navigator.userAgent.toLowerCase().indexOf('mobile') != -1,
        setWrapperSize: true,
        preventLinksPropagation: false,
        slideToClickedSlide: true,
        prevButton: '.swiper-work > .swiper-button-prev',
        nextButton: '.swiper-work > .swiper-button-next',
        scrollbar: '.swiper-work > .swiper-scrollbar',
        observeParents: true,
        onTransitionStart: function(swiper) {
          that.logoIndex = swiper.activeIndex;
        }
      },
      swiperOption2: {
        notNextTick: true,
        autoHeight: false,
        setWrapperSize: true,
        prevButton: '.swiper-kv > .swiper-button-prev',
        nextButton: '.swiper-kv > .swiper-button-next',
        scrollbar: '.swiper-kv > .swiper-scrollbar',
        observeParents: true,
        onTransitionStart: function(swiper) {

        }
      }
    }
  },
  created() {
    var that = this;
    this.$emit('paramers', this._data.pageConfig);
    this.getCategory(function(data) {
      that._data.categoryList = data;
      data.length && that.setCategory(0, data[0].ID)
    })
  },
  computed: {
    swiperLogo() {
      return this.$refs.swiperLogo.swiper
    },
    swiperKv() {
      return this.$refs.swiperKv.swiper
    }
  },
  methods: {
    getCategory(callback) {
      var api = 'http://omnimkt.com/Ajax/Handler.ashx?method=GetTypeList'
      this.axios.get(api).then((response) => {
        console.log(response.data);
        response.data.length && callback && callback(response.data)
      })
    },
    getLogo(id, callback) {
      var api = 'http://omnimkt.com/Ajax/Handler.ashx?method=GetProjectList&type='+id
      this.axios.get(api).then((response) => {
        console.log(response.data);
        response.data.length && callback && callback(response.data)
      })
    },
    getDetail(id, callback) {
      var api = 'http://omnimkt.com/Ajax/Handler.ashx?method=GetProjectInfo&id='+id
      this.axios.get(api).then((response) => {
        console.log(response.data);
        callback && callback(response.data)
      })
    },
    setCategory(index, id) {
      var that = this;
      this._data.logoList = [];
      this._data.workDetail= {};
      this._data.categoryIndex = index;
      this.getLogo(id, function(data) {
        that._data.logoList = data;
        const index = that.swiperLogo.params.initialSlide;
        that.swiperLogo.slideTo(index, 0, true);
        data[index] && that.setLogo(index, data[index].ID);
      });
    },
    setLogo(index, id) {
      var that = this;
      this._data.workDetail= {};
      this._data.logoIndex = index;
      this.getDetail(id, function(data) {
        data.ImageList = JSON.parse(data.ImageList);
        that._data.workDetail = data;
        that.swiperKv.slideTo(that.swiperKv.params.initialSlide, 0, true);
      });
    }
  }
}
</script>