<template>
	<footer>
		<ul>
			<li>
				<nuxt-link to="">Terms of Service</nuxt-link>
			</li>
			<li>
				<nuxt-link to="">Privacy Policy</nuxt-link>
			</li>
			<li>
				<nuxt-link to="">Read More</nuxt-link>
			</li>
		</ul>
		<div class="list">
			<p>Made By</p>
			<ul>
				<li><a href="https://sethpainter.com">Seth Painter</a></li>
			</ul>
			<ul>
				<li><a href="http://rkooi.com">Rachel Ooi</a></li>
			</ul>
			<ul>
				<li><a href="https://gabefrances.com">Gabe Frances</a></li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
};
</script>

<style scoped>
footer {
	display: flex;
	justify-content: space-around;
	background: #111;
	padding: 1em;
}
ul {
	list-style-type: none;
}
a {
	font-weight: 100;
	color: grey;
	text-decoration: none;
}
</style>
