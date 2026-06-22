import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_BmtkLpij.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://tu-sitio.netlify.app");
const $$Ficha = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ficha;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="ficha">${texto}</p>`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/components/Ficha.astro", void 0);

export { $$Ficha as $ };
