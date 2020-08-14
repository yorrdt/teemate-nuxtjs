<template>
	<div class="header-wrapper">
		<span class="progress-bar">
			<span class="progress-item" style="width: 0%;"></span>
		</span>
		<header class="header-container">
			<div class="navbar-header">
				<a class="header-title" href="/">
					<img class="account-image" height="32px" width="32px" src="~/assets/logo.png" alt="">
					<span>TeeMate<sup>TM</sup></span>
				</a>
			</div>
			<div class="header-right">
				<div class="notif-item">
					<a class="fas fa-bell" href="/"><span class="notif-point"></span></a>
				</div>
				<div class="account-menu" v-on:click="visible = !visible" v-on-clickaway="away">
					<button class="account-button">
						<figure class="account-avatar">
							<img class="account-image" height="28px" width="28px" src="~/assets/logo.png" alt="">
						</figure>
						<span class="account-username">yorrdt</span>
						<span class="dropdown" :class="[visible ? 'fas fa-angle-up' : 'fas fa-angle-down']"></span> 
					</button>
					<ul class="dropdown-menu" v-show="visible">
						<li>
							<a class="dropdown-menu-item" href="/" target="_blank">{{ jsonData[0].dropdown_menu[0].ru }}</a>
						</li>
						<li>
							<a class="dropdown-menu-item" href="/" target="_blank">{{ jsonData[0].dropdown_menu[1].ru }}</a>
						</li>
						<li>
							<a class="dropdown-menu-item" href="/" target="_blank">{{ jsonData[0].dropdown_menu[2].ru }}</a>
						</li>
						<hr></hr>
						<li>
							<NuxtLink class="dropdown-menu-item" to="/">{{ jsonData[0].dropdown_menu[3].ru }}</NuxtLink>
						</li>
					</ul>
				</div>
				<div></div>
			</div>
			<div class="mobile-navi">
				<a class="hamburger-wrapper-ref" href="/">
					<div class="hamburger">
						<div class="ham1"></div>
						<div class="ham2"></div>
						<div class="ham3"></div>
					</div>
				</a>
			</div>
		</header>
	</div>
</template>

<script>
	import { mixin as clickaway } from 'vue-clickaway';
	import json from './json/menu.json';

	export default {
		name: 'account-menu',
		mixins: [ clickaway ],
		data() {
			return {
				visible: false,
				jsonData: json,
			}
		},
		methods: {
			away: function() {
				if(this.visible) {
					this.visible = false;
				}
			},
		},
	}
</script>

<style scoped>
.header-wrapper {
	height: 54px;
	width: 100%;
	background-color: var(--black); /* #121212 */
	min-width: 320px;
	position: fixed;
	z-index: 18;
}

.progress-bar {
	position: relative;
	display: flex;
	overflow: hidden;
	border-radius: 6px;
	outline: 1px solid transparent;
	z-index: 9999;
	height: 2px;
	width: 100%;
	background: transparent;
	opacity: 0;
	transition: opacity .4s linear .4s;
}

.progress-item {
	background-color: var(--gray-color); 
	box-shadow: 0 0 10px rgba(200, 200, 200, .7);
	transition: width .4s ease;
	outline: 2px solid transparent;
}

.header-container {
	margin: 0 auto;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 8px 16px;
}

.navbar-header {
	display: flex;
	align-items: center;
}

.header-title {
	display: flex;
	align-items: center;
	outline: none;
}

.header-title span {
	font-size: 26px;
	font-weight: 500;
}

.header-title > span > sup {
	position: relative;
	font-size: 4pt;
	letter-spacing: .8px;
}

.header-right {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.notif-item {
	margin-right: 16px;
	height: 18px;
	width: 18px;
	font-size: 1.2em;
	cursor: pointer;
	position: relative;
	margin-bottom: 4px;
}

.notif-point {
	/* display: none; */
	position: absolute;
	right: 0;
	top: 0;
	z-index: 15;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: red;
}

.account-menu {
	position: relative;
	white-space: nowrap;
}

.account-button {
	background-color: var(--black);
	border-radius: 23px;
	height: 32px;
	min-width: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	cursor: pointer;
	color: var(--white);
	padding: 2px;
	outline: none;
}

.account-button:hover, .account-button:focus {
	background-color: var(--container);
}

.dropdown-menu {
	position: absolute;
	right: 0;
	
	width: 130px;
	background-color: var(--container);
	border-radius: 4px;
	border: 1px solid rgba(0,0,0,.1);
	box-shadow: 0 4px 4px rgba(0,0,0,.7);
	top: 100%;
	margin-top: 8px;
	z-index: 1003;
}

.dropdown-menu:focus { 
	outline: none;
}

.dropdown-menu > li {
	border-radius: 4px 4px 0 0;
}

.dropdown-menu-item {
	width: 100%;
	padding: 3px 20px;
	line-height: 32px;
	white-space: nowrap;
	background: none;
	border: 0;
	user-select: none;
	color: var(--gray-color);
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	outline: none;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: normal;
	text-transform: none;
	overflow: hidden;
}

.dropdown-menu-item:focus, .dropdown-menu-item:hover { 
	color: var(--white);
	background-color: #333;
	text-decoration: none;
}

.account-avatar {
	overflow: hidden;
	position: relative;
	display: inline-block;
	cursor: pointer;
	color: var(--white);
	
	width: 28px;
	height: 28px;
}

.account-username {
	margin-left: 6px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 110px;
	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: normal;
	text-transform: none;
}

.dropdown {
	display: inline-block;
	margin-right: 6px;
	margin-left: 6px;
	width: 14px;
	height: 10px;
	content: "";
	color: var(--white);
}

/* --------------------------------------------------------------- */

.mobile-navi {
	display: none;
}

.hamburger-wrapper-ref:hover .ham1, .hamburger-wrapper-ref:hover .ham2, .hamburger-wrapper-ref:hover .ham3 {
	background-color: hsla(0, 0%, 100%, .7);
}

.hamburger {
	padding-top: 3px;
	width: 24px;
	height: 21px;
	cursor: pointer;
}

.ham1, .ham2, .ham3 {
	width: inherit;
	height: 3px;
	background-color: var(--white);
	border-radius: 6px;
}

.ham2 {
	margin: 6px 0px;
}
</style>



