import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DqVDo0Yv.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_8Xox12tZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://tu-sitio.netlify.app");
async function getStaticPaths() {
  const entradas = await getCollection("bitacora");
  return entradas.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": `${entry.data.titulo} \u2014 Sin lugar para los b\xE1rbaros`, "descripcion": entry.data.resumen }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="col" style="padding-top: 3rem; padding-bottom: 4rem;"> <span class="ficha">${entry.data.categoria} <span>· ${entry.data.fecha}</span></span> ${entry.data.imagen && renderTemplate`<img${addAttribute(entry.data.imagen, "src")} alt="" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 2px; margin-bottom: 2rem;">`} <h1>${entry.data.titulo}</h1> <div style="margin-top: 2rem; line-height: 1.75;"> ${renderComponent($$result2, "Content", Content, {})} </div> <hr class="rule"> <p><a href="/bitacora/" style="color: var(--stamp); font-family: var(--font-mono); font-size: 0.85rem;">&larr; Volver a la bitácora</a></p> </article> ` })}`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/[slug].astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/[slug].astro";
const $$url = "/bitacora/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
