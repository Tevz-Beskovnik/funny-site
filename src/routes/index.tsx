import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Card from '~/components/Card/Card';
import styles from './index.css?inline';

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="container">
			<Card>
				<div q:slot="front" class="title-container">
					<h1 >FUCK YOU</h1>
				</div>
				<div q:slot="back" class="image-container">
					<img  class="card-image" src="./middle-finger.png" alt="middle finger"/>
				</div>
			</Card>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Funny site',
};
