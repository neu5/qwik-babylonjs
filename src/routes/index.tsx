import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      Welcome to Qwik and BabylonJS example
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik and BabylonJS',
  meta: [
    {
      name: 'description',
      content: 'Qwik and BabylonJS',
    },
  ],
};
