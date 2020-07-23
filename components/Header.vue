<template>
	<header>
		<div class="container">
			<div class="logo">
				b <span class="accented">!</span>
			</div>
			<nav>
				<ul>
					<li>
						<nuxt-link to="#" class="selected">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link to="#">About</nuxt-link>
					</li>
					<li>
						<nuxt-link to="#">For Developers</nuxt-link>
					</li>
				</ul>
			</nav>
			<div id="btns">
				<button id="btn-join">Join</button>
				<button id="btn-log-in">Log In</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
};
</script>

<style scoped>
header {
	padding: 1em;
	align-items: center;
	padding-bottom: 0.4em;
	border-bottom: 2px solid #333;
}
header .container {
	display: flex;
	flex-direction: row;
}
.logo {
	padding: 0.2 0;
	font-size: 2em;
}
nav {
	margin-left: 1em;
}
ul {
	list-style-type: none;
}
li {
	display: inline-block;
	margin: 0.5em;
}
li a {
	color: white;
	text-decoration: none;
	padding: 0.3em 0.1em;
}
a:hover,
a.selected {
	border-bottom: 3px solid yellow;
}
#btns {
	margin-left: auto;
}
button {
	padding: 0.5em 0.7em;
	border-radius: 15%;
	font-size: 1em;
	margin-left: 0.5em;
}
#btn-join {
	border-color: var(--accent-color);
	color: var(--accent-color);
}
#btn-join:hover {
	background: var(--accent-color);
	color: var(--background-color);
}
</style>
