<template>
	<div class="navbar-wrapper">
		<nav class="navbar-container">
			<ul class="navbar-ul">
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-hammer">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[0].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[0].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-check">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[1].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[1].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-comment">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[2].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[2].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-handshake">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[3].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[3].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-quote-right">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[4].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[4].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-star">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[5].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[5].ru }}</span>
					</a>
				</li>
				<li class="navbar-item">
					<a class="menu-item" href="/">
						<div class="item-icon fas fa-question">
							<!-- <span class="notif-count">{{ jsonData[0].navbar_menu[6].count }}</span> -->
						</div>
						<span class="text-item">{{ jsonData[0].navbar_menu[6].en }}</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	import json from './json/menu.json';

	export default {
		name: 'navbar-item',
		data() {
			return {
				jsonData: json
			}
		}
	}
</script>

<style scoped>
.navbar-wrapper {
	width: 180px;
	display: flex;
	flex-direction: column;
	position: fixed;
}

.navbar-container {
	display: flex;
	flex-shrink: 0;
	flex-grow: 0;
	flex-direction: column;
	
	padding-top: 20px;
	user-select: none;
	cursor: default;
	width: 100%;
	margin-bottom: 40px;
}

.navbar-item:focus, .navbar-item:hover { 
	outline: none;
}

.menu-item {
	display: flex;
	align-items: center;
	border-radius: 4px;
	padding: 0 16px;
	height: 40px;
	color: var(--gray-color);
	outline: none;
}

.menu-item:focus, .menu-item:hover {
	text-decoration: none;
	color: var(--white);
	transition-property: color;
	transition-duration: .2s;
	transition-timing-function: linear;
}

/*
.notif-count {
	position: absolute;
	left: 10px;
	bottom: -6px;
	min-width: 12px;
	padding: 1px 4px;
	text-align: center;
	font-size: 9px;
	line-height: 12px;
	color: var(--white);
	border: 2px solid #222;
	border-radius: 2em;
	background-color: #ff1122;
	font-weight: 800;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
*/

.item-icon {
	position: relative;
	margin-right: 16px;
	height: 24px;
	width: 24px;
	font-size: 1.5em;
}

.text-item {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
}
</style>