<template>
	<div class="header header-fixed">
		<div class="wrap">
			<router-link class="logo" to="/"><img src="../../assets/image/logo.png"/></router-link>
			<!-- <div class="search-bar"><input type="text" placeholder="站内搜索" />
				<a></a>
			</div> -->
			<a class="m-nav-toggle" @click="navOpen">
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div class="m-nav-mask" @click="navClose"></div>
			<div class="nav" id="nav">
				<ul class="ul-root">					
					<li class="li-root" v-for="item in navList" :key="item.name" v-bind:class="{ 'nav-folder': item.subnav.length}" @click="navfolderOpen">
						<!-- <a class="a-root" :href="item.url">{{ item.innerText }}</a> -->
						<router-link class="a-root" :to="item.url" @click.native="navClose">{{ item.innerText }}</router-link>
						<div class ="nav-sub" v-if="item.subnav.length > 0" @click="navfolderClose">
							<ul class="ul-sub">
								<li class="li-sub" v-for="item in item.subnav" :key="item.name" v-bind:class="{ 'nav-folder': item.subnav.length > 0 }" @click="navfolderOpen">
									<a class="a-sub" :href="item.url">{{ item.innerText }}</a>
									<div class ="nav-sub" v-if="item.subnav.length > 0" @click="navfolderClose">
										<ul class="ul-sub">
											<li class="li-sub" v-for="item in item.subnav" :key="item.name" v-bind:class="{ 'nav-folder': item.subnav.length > 0 }" @click="navfolderOpen">
												<a class="a-sub" :href="item.url">{{ item.innerText }}</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import '@/assets/css/header.css';
var html = document.querySelector('html');
var navList = [
	{
		name : 'home',
		innerText : 'HOME',
		url : '/',
		subnav : []
	},
	{
		name : 'about',
		innerText : 'ABOUT OMNI',
		url : '/about',
		subnav : [
			/*{
				name : 'a1',
				innerText : 'a1',
				url : '/a1',
				subnav : []
			},
			{
				name : 'a2',
				innerText : 'a2',
				url : '/a2',
				subnav : [
					{
						name : 'a2-1',
						innerText : 'a2-1',
						url : '/a2-1',
						subnav : []
					},
					{
						name : 'a2-2',
						innerText : 'a2-2',
						url : '/a2-2',
						subnav : []
					}
				]
			}*/
		]
	},
	{
		name : 'service',
		innerText : 'OUR SERVICE',
		url : '/service',
		subnav : []
	},
	{
		name : 'work',
		innerText : 'OUR WORK',
		url : '/work',
		subnav : []
	}
]
export default {
	name: 'header',
	data() {
		return {
			navList :navList
		}
	},
	// 在 `methods` 对象中定义方法
	methods: {
		navOpen: function(event) {
			html.className.indexOf('m-nav-open') == -1 && (html.className += ' m-nav-open')
		},
		navClose: function(event) {
			html.className = html.className.replace('m-nav-open', '').replace(/(^\s*)|(\s*$)/g, "");
		},
		navfolderOpen : function(e){
			e.stopPropagation();
			if (e.target.nodeName === 'LI') {
				var li = e.target;
				var parent = li.parentNode.parentNode;
				if (li.className.indexOf('nav-folder-open') == -1) {
					li.className += ' nav-folder-open';
					parent.className += ' nav-sub-open';
				} else {
					li.className = li.className.replace('nav-folder-open', '');
					parent.className += parent.className.replace('nav-folder-open', '');
				};
			};
		},
		navfolderClose : function(e){
			e.stopPropagation();
			if (e.target.nodeName === 'DIV') {
				var sub = e.target;
				var parent = sub.parentNode.parentNode.parentNode;
				sub.parentNode.className = sub.parentNode.className.replace('nav-folder-open', '');
				parent.className = parent.className.replace('nav-sub-open', '');
			};
		}
	}
};
</script>