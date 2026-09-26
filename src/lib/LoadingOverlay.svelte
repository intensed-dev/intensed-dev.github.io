<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let show = true;
	let duration = 1000;
	let progress = 100;

	let title = '';
	let isIntro = true;

	const text = 'Intensed';

	function animateProgress(from: number, to: number) {
		return new Promise<void>((resolve) => {
			const start = performance.now();

			const update = (time: number) => {
				const elapsed = time - start;
				const value = Math.min(elapsed / duration, 1);

				progress = from + (to - from) * value;

				if (value < 1) {
					requestAnimationFrame(update);
				} else {
					resolve();
				}
			};

			requestAnimationFrame(update);
		});
	}

	async function typeTitle() {
		title = '';

		for (let i = 0; i <= text.length; i++) {
			title = text.slice(0, i);
			await new Promise((resolve) => setTimeout(resolve, 600 / text.length));
		}
	}

	async function intro() {
		// Overlay erstmal sichtbar lassen
		await new Promise((resolve) => setTimeout(resolve, duration));

		// Text schreiben
		await typeTitle();

		// Hochfahren + Progress gleichzeitig
		show = false;
		await animateProgress(100, 0);

		progress = 0;
		isIntro = false;
	}

	onMount(() => {
		intro();
	});

	export async function navigate(url: string) {
		// Navigation: kein Text schreiben
		isIntro = false;

		show = true;
		progress = 0;

		// Runterfahren
		await animateProgress(0, 100);

		// Seite wechseln
		await goto(url);

		// Kurz unten bleiben
		await new Promise((resolve) => setTimeout(resolve, 400));

		// Hochfahren
		progress = 100;
		show = false;

		await animateProgress(100, 0);

		progress = 0;
	}
</script>

<div class:show class="transition" style:--duration={duration}>
	<h1 class="title">{title}</h1>

	<progress
		max="100"
		value={progress}
		class="bar"
	></progress>
</div>

<style>
	.bar {
		position: absolute;
		bottom: 24px;
		left: 24px;
		right: 24px;

		width: auto;
		height: 3px;

		border: 0;
		border-radius: 999px;

		background: rgb(255 255 255 / 0.12);

		appearance: none;
	}

	.bar::-webkit-progress-bar {
		background: rgb(255 255 255 / 0.12);
	}

	.bar::-webkit-progress-value {
		background: oklch(0.553 0.195 38.402);
		border-radius: 999px;

		box-shadow:
			0 0 8px oklch(0.553 0.195 38.402 / 0.7),
			0 0 20px oklch(0.553 0.195 38.402 / 0.25);
	}

	.bar::-moz-progress-bar {
		background: oklch(0.553 0.195 38.402);
		border-radius: 999px;

		box-shadow:
			0 0 8px oklch(0.553 0.195 38.402 / 0.7),
			0 0 20px oklch(0.553 0.195 38.402 / 0.25);
	}

	.transition {
		position: fixed;
		inset: 0;
		z-index: 9999;

		background: black;
		color: white;

		transform: translateY(-100%);
		transition: transform calc(var(--duration) * 1ms) ease;

		display: grid;
		place-items: center;
	}

	.transition.show {
		transform: translateY(0);
	}

	.title {
		margin: 0;

		font-style: italic;
		font-size: 60px;

		color: oklch(0.553 0.195 38.402);
	}
</style>