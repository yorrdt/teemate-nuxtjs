<template>
	<div class="footer-wrapper">
		<footer class="footer-container">
			<ul>
				<li>© 2020 TeeMate</li>
				<li>Terms</li>
				<li>
					<div class="footer-ico header-title">
						<img class="account-image" height="32px" width="32px" src="~/assets/logo.png" alt="">
						<span>TeeMate<sup>TM</sup></span>
					</div>
				</li>
				<li>Contact</li>
				<li>About</li>
			</ul>
		</footer>
	</div>
</template>

<style scoped>
.footer-wrapper {
	width: 100%;
	min-width: 320px;
	margin-top: 128px;
}

.footer-container {
	padding: 24px 32px;
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
</style>