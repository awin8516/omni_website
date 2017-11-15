<template>
	<div id="footer" class="footer">
		<div class="wrap">
			<div class="footer-content">
				<h2>Contact Us</h2>
				<span>地址：{{ add }}</span>
				<!-- <span>邮箱：<a href="mailto:{{ email }}" target="_blank">{{ email }}</a></span> -->
				<span>邮箱：
					<a :href="'mailto:'+email" target="_blank">{{ email }}</a>
				</span>
			</div>
			<div class="footer-logo">
				<img src="../../assets/image/logo-icon.png" />
			</div>
		</div>
	</div>
</template>

<script>
import '@/assets/css/footer.css'

export default {
  name: 'footer',
  data () {
    return {
	  add: '上海市徐汇区龙华路2577创意大院16号',
	  email:'kaka@omnimkt.com'
    }
  }
}
</script>