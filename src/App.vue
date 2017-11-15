<template>
  <div id="app" class="container" v-bind:class="'container-'+activePage">
    <vheader></vheader>
    <div class="body">
      <transition name="fade" mode="out-in">
        <router-view class="child-view" @paramers="getRouterProps"></router-view>
      </transition>
    </div>
    <vfooter v-bind:class="{ 'footer-show': footerShow }"></vfooter>
  </div>
</template>

<script>
import './assets/css/common.css'
import './assets/css/layout.css'
import vheader from './components/public/header.vue'
import vfooter from './components/public/footer.vue'
var html = document.getElementsByTagName('html')[0];
export default {
  name: 'app',
  data() {
    return {
      activePage: this.$route.name,
      footerShow: 0
    }
  },
  components: {
    vheader,
    vfooter
  },
  created() {
    html.className = 'html-created';
    //html.className = 'a html-route-about b';
    //var a = /html-route-(.*)/g.test(html.className);
    //console.log(a);
  },
  watch: {
    '$route'(to, from) {
      //刷新参数放到这里里面去触发就可以刷新相同界面了
      this._data.activePage = this.$route.name;
      
      //html.className = 'html-route-' + this.$route.name;
      html.className = html.className.indexOf('html-route-') !=-1 ? html.className.replace(/html-route-(.*)/g, 'html-route-' + this.$route.name) : html.className+' html-route-' + this.$route.name;
      //var a = /html-route-(.*)$/g.test(html.className);
      //console.log(a);
    }
  },
  methods: {
    getRouterProps(paramers) {
      document.title = paramers.title;
      this._data.footerShow = paramers.footerShow;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
/**/
.child-view {  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}
/**/
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  
}
</style>
