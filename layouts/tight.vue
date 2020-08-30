<template>
	<div class="main-container">
		<TheTightHeader/>
		<div class="content-wrapper">
			<main class="content-container">
				<nuxt/>
			</main>
		</div>
		<TheTightFooter/>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	flex: auto;
	flex-direction: column;
}

.content-wrapper {
	width: 100%;
	min-height: calc(100vh - (84px +  128px + 54px)); /* 100vh - (size of footer + size of footer margin + header size) */
	min-width: 320px;
}

.content-container {
	display: flex;
	flex: auto;
	flex-direction: row;
	margin: 0 auto;
	max-width: 960px;
	padding: 0 16px;
}
</style>
