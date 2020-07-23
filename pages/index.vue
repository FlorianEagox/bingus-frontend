<template>
	<main id="page" class="container">
		<!-- <div class="parallax-bkg" /> -->
		<section id="page-greeter">
			<div id="big-logo">
				<h1>b<span class="accented">!</span>ngus</h1>
			</div>
			<div id="short-about">
				<h2 id="heading">Your Data, Your way, Anywhere</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur officiis. Optio qui architecto a assumenda earum ea illum aut.
				</p>
				<button id="btn-learn">Learn More</button>
			</div>
		</section>
		<section id="reasons" class="container">
			<h2 class="heading">Why use Bingus?</h2>
			<ul>
				<li>
					No Complicated authentication systems
				</li>
				<li>
					No more managing and storing user data
				</li>
				<li>
					No more updating every website when a phone number changes
				</li>
				<li>
					No massive tech companies hording your data
				</li>
				<li>
					100% Free
				</li>
			</ul>
		</section>
		<section id="descriptors">
			<div class="descriptor">
				<font-awesome-icon :icon="['fas', 'fingerprint']" class="fa-4x" />
				<h2>Secure</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis quasi dolorum.
				</p>
			</div>
			<div class="descriptor">
				<font-awesome-icon :icon="['fas', 'toolbox']" class="fa-4x" />
				<h2>Convient</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sunt odit optio?
				</p>
			</div>
			<div class="descriptor">
				<font-awesome-icon :icon="['fas', 'cogs']" class="fa-4x" />
				<h2>Ubiquitous</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam exercitationem asperiores quisquam?
				</p>
			</div>
		</section>
		<!-- <div class="parallax-bkg" /> -->
	</main>
</template>

<script>
export default {

};
</script>

<style>
button {
	background: inherit;
	border: 2px solid var(--text-color);
	color: var(--text-color);
}
button:hover {
	background: var(--text-color);
	color: var(--background-color);
}

#page {
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.parallax-bkg {
	width: 100%;
	min-height: 300px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url("https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?cs=srgb&dl=rock-formation-close-up-photography-2646237.jpg&fm=jpg");
}

#page-greeter {
	display: flex;
	width: 100%;
	justify-content: space-around;
	/* justify-content: center; */
	align-items: stretch;
	/* width: 70%; */
	border-bottom: 2px solid #333;
	padding: 1em;
	margin: 3em;
}
#big-logo {
	padding: 2.5em 2em;
	font-size: 2em;
	letter-spacing: 1em;
	background: #333;
	/* margin-top: -2.5em; */
	/* height: 100%; */
	display: flex;
	align-items: center;
}
#short-about {
	max-width: 400px;
	line-height: 1.6;
	display: flex;
	flex-direction: column;
	font-size: 1.3em;
}
#short-about #heading::first-letter {
	padding-left: 0.3em;
	border-bottom: 6px solid var(--accent-color);
	/* border-radius: 15%; */
}
#btn-learn {
	border-width: 2px;
	border-radius: 10%;
	font-size: 1em;
	padding: 0.5em;
	margin-top: auto;
	align-self: flex-start;
}

#reasons {
	font-size: 1.2em;
	width: 55%;
	max-width: 1000px;
	margin: auto;
	background: #111;
	padding: 1em;
}
#reasons .heading {
	margin: 0.5em 0;
	margin-bottom: 0.7em;
}
#reasons ul {
	list-style: none;
}
#reasons li::before {
	content: "\2022";
	color: var(--accent-color);
	font-weight: bold;
	display: inline-block;
	width: 1em;
	margin-left: -0.5em;
}
#reasons li {
	margin-left: 1em;
	padding: 0.7em;
	margin: 1em;
	/* display: inline-block; */
	background: #222;
}

#descriptors {
	width: 100%;
	display: flex;
	text-align: center;
}
.descriptor {
	flex-basis: 33%;
	padding: 4em;
	background: #222;
}
.descriptor p {
	margin: auto;
	max-width: 300px;
}
</style>
