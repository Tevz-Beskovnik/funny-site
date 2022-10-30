import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from './index.css?inline';

export default component$(() => {
	useStylesScoped$(styles);

  	return (
		<div class="container">
			<h1>Funny site.</h1>
			<div class="button-container">
				<button></button>
			</div>
		</div>
  	);
});

export const head: DocumentHead = {
  	title: 'Funny site',
};
