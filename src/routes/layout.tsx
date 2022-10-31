import { component$, Slot } from '@builder.io/qwik';
import { QwikLogo } from '~/components/icons/qwik';

export default component$(() => {


	return (
		<>
			<main>
				<Slot/>
			</main>
			<footer>
				Made with&nbsp;<QwikLogo/>
			</footer>
		</>
	);
});
