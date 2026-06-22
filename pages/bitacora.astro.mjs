import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DqVDo0Yv.mjs';
import { g as getCollection } from '../chunks/_astro_content_8Xox12tZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entradas = (await getCollection("bitacora")).sort((a, b) => new Date(b.data.fecha).getTime() - new Date(a.data.fecha).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Bit\xE1cora \u2014 Sin lugar para los b\xE1rbaros", "descripcion": "Fragmentos de la tesis y nuevas reflexiones a partir de la investigaci\xF3n." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="col" style="padding-top: 3rem;"> <span class="ficha">Bitácora <span>· lectura</span></span> <h1>Desde la tesis, y más allá de ella.</h1> <p style="color: var(--ink-soft); max-width: 52ch;">
Fragmentos seleccionados de la investigación original y reflexiones nuevas
      que surgen a partir de ella. No siguen el orden de los capítulos: cada
      texto elige su propia puerta de entrada.
</p> </section> <section class="col" style="padding-bottom: 4rem;"> <div style="display: flex; flex-direction: column; gap: 0;"> ${entradas.map((e) => renderTemplate`<article class="card" style="border-top: 1px solid var(--line); border-left: none; border-right: none; border-bottom: none; border-radius: 0; background: transparent; padding: 1.4rem 0; flex-direction: row; gap: 1.2rem; align-items: flex-start;"> ${e.data.imagen && renderTemplate`<img${addAttribute(e.data.imagen, "src")} alt="" style="width: 80px; height: 80px; object-fit: cover; flex-shrink: 0; border-radius: 2px;">`} <div> <span class="card-tag" style="margin-bottom: 0.5rem;">${e.data.categoria}</span> <h3 style="margin: 0.3rem 0 0.3rem;"> <a${addAttribute(`/bitacora/${e.id}/`, "href")} style="color: var(--ink);">${e.data.titulo}</a> </h3> <p style="color: var(--ink-soft); font-size: 0.9rem; margin: 0 0 0.4rem;">${e.data.resumen}</p> <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--ink-soft); letter-spacing: 0.05em;">${e.data.fecha}</span> </div> </article>`)} </div> </section> ` })}`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/index.astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/index.astro";
const $$url = "/bitacora";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
