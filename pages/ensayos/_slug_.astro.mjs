import { c as createComponent, a as renderTemplate } from '../../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

function getStaticPaths() {
  return [];
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/ensayos/[slug].astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/ensayos/[slug].astro";
const $$url = "/ensayos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
