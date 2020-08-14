<template>
	<div class="footer-wrapper">
		<footer class="footer-container">
			<ul>
				<li></li>
				<li></li>
				<li>
					<div class="footer-ico header-title">
						<img class="account-image" height="32px" width="32px" src="~/assets/logo.png" alt="">
						<span>TeeMate<sup>TM</sup></span>
					</div>
				</li>
				<li></li>
				<li></li>
			</ul>
		</footer>
	</div>
</template>

<style scoped>
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

.footer-wrapper {
	width: 100%;
	min-width: 320px;
	height: 100px;
}

.footer-container {
	padding: 24px 16px;
	border-top: 1px solid #333;
}

.footer-ico {
	display: flex;
	align-items: center;
	color: var(--white);
	user-select: none;
}

.footer-container ul {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
}
</style>