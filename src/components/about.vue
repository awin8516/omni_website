<template>
  <div class="about">
    <div class="banner-title ac"><img src="../assets/image/about-banner.jpg"></div>
    <div class="wrap">
      <div class="content imgword imgword-right clearfix">
        <div class="img">
          <div><div class="img-shadow img-shadow-rt"><img src="../assets/image/about-1-1.jpg"><img src="../assets/image/about-1-1.jpg"></div></div>
          <div><div class="img-shadow img-shadow-lb"><img src="../assets/image/about-1-2.jpg"><img src="../assets/image/about-1-2.jpg"></div></div>
        </div>
        <div class="word">
          <div class="title-indent f-en">
            <h2>We Create</h2>
            <h2>We Socialize</h2>
            <h2>We Plan for the future</h2>
          </div>
          <p>
            Omni Marketing 成立于2016年，隶属于BEATS广告集团，是BEATS集团旗下的整合营销的新鲜血液，团队核心成员均来自于知名4A广告公司及国际公关公司，并拥有丰富的市场营销、媒体公关、线上线下互动、创意呈现的经验和资源。Omni Marketing所在的BEATS集团核心团队曾创办中国规模最大的社交媒体营销公司Netalk，于2011年被法国阳狮集团全资收购。如今，BEATS已经成为一家大数据公司，以数据为驱动，着眼于行业深度挖掘，在广告、金融、汽车、地产等领域用带来大数据革命，让品牌在快速发展的时代背景下运筹帷幄、赢得先机。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/about.css';
export default {
  name: 'about',
  data() {
    return {
      pageConfig : {
        title : 'ABOUT OMNI 奥萌',
        footerShow : true
      }
    }
  },
  created() {
    this.$emit('paramers', this._data.pageConfig);
  }
}
</script>