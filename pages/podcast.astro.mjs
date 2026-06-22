import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DqVDo0Yv.mjs';
import { $ as $$Ficha } from '../chunks/Ficha_Cp7a4l7c.mjs';
export { renderers } from '../renderers.mjs';

const $$Podcast = createComponent(($$result, $$props, $$slots) => {
  const episodios = [
    {
      numero: "01",
      titulo: "Una cabeza en una pica",
      fecha: "2026-06-10",
      resumen: "Por qu\xE9 un episodio brutal de 1863 sigue siendo una puerta de entrada \xFAtil para hablar de violencia pol\xEDtica."
    },
    {
      numero: "02",
      titulo: "El diario que tambi\xE9n disparaba",
      fecha: "Pr\xF3ximamente",
      resumen: "C\xF3mo la prensa de un partido pol\xEDtico se convirti\xF3 en un actor m\xE1s del conflicto, no solo en su relator."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Podcast \u2014 Sin lugar para los b\xE1rbaros", "descripcion": "Una serie breve que traduce los problemas centrales de la investigaci\xF3n a un lenguaje accesible." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="col" style="padding-top: 3rem;"> ${renderComponent($$result2, "Ficha", $$Ficha, { "texto": "Podcast" })} <h1>Episodios</h1> <p>
Una primera serie breve, pensada para observar qué preguntas genera antes de
      ampliarla. Cada episodio parte de un caso o una escena concreta de la
      investigación.
</p> </section> <section class="col"> <div class="grid" style="margin-top: 1rem;"> ${episodios.map((ep) => renderTemplate`<article class="card"> ${renderComponent($$result2, "Ficha", $$Ficha, { "texto": `Episodio ${ep.numero} \xB7 ${ep.fecha}` })} <h3>${ep.titulo}</h3> <p>${ep.resumen}</p> </article>`)} </div> <p style="margin-top: 2rem; color: var(--ink-soft); font-size: .92rem;">
El audio de cada episodio se alojará en un servicio externo gratuito (por ejemplo,
      Spotify for Podcasters) y se embeberá aquí — sin costo de hosting propio.
</p> </section> ` })}`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/podcast.astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/podcast.astro";
const $$url = "/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Podcast,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
