<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { registerNavigate, unregisterNavigate } from '$lib/transition';

	let show = true;
	let duration = 1000;
	let progress = 100;

	let title = '';

	const text = 'Intensed';

	function wait(ms: number) {
		return new Promise<void>((resolve) => setTimeout(resolve, ms));
	}

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

		for (let i = 1; i <= text.length; i++) {
			title = text.slice(0, i);
			await wait(600 / text.length);
		}
	}

	async function intro() {
		show = true;
		progress = 100;

		await typeTitle();
		await wait(200);

		show = false;
		await animateProgress(100, 0);

		progress = 0;
	}

	async function navigate(url: string) {
		show = true;
		progress = 0;

		await animateProgress(0, 100);

		await goto(url);

		await wait(400);

		progress = 100;
		show = false;

		await animateProgress(100, 0);

		progress = 0;
	}

	onMount(() => {
		registerNavigate(navigate);
		intro();

		return () => {
			unregisterNavigate();
		};
	});
</script>

<div class:show class="transition" style:--duration={duration}>
	<h1 class="title">
		<span class="text">{title}</span><span class="dot">.</span>
	</h1>

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
	}

	.text {
		color: white;
	}

	.dot {
		color: oklch(0.553 0.195 38.402);
	}
</style>