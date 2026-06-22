import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DqVDo0Yv.mjs';
import { $ as $$Ficha } from '../chunks/Ficha_Cp7a4l7c.mjs';
export { renderers } from '../renderers.mjs';

const $$Archivo = createComponent(($$result, $$props, $$slots) => {
  const materiales = [
    { titulo: "Portada de El Zonda, 1862", tipo: "Imagen de archivo" },
    { titulo: "Mapa de San Juan y Los Llanos, 1865", tipo: "Imagen de archivo" },
    { titulo: 'Ilustraciones del documental "El latir de los Llanos"', tipo: "Material audiovisual" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Archivo \u2014 Sin lugar para los b\xE1rbaros", "descripcion": "Im\xE1genes, materiales visuales y archivos relacionados con la investigaci\xF3n." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="col" style="padding-top: 3rem;"> ${renderComponent($$result2, "Ficha", $$Ficha, { "texto": "Archivo" })} <h1>Materiales visuales</h1> <p>
Imágenes, mapas y otros materiales que acompañan la investigación. Se irá
      ampliando a medida que se digitalicen y autoricen nuevas piezas.
</p> </section> <section class="wrap"> <div class="grid grid-2" style="margin-top: 1rem;"> ${materiales.map((m) => renderTemplate`<article class="card"> ${renderComponent($$result2, "Ficha", $$Ficha, { "texto": m.tipo })} <h3>${m.titulo}</h3> <p style="color: var(--ink-soft);">Imagen pendiente de carga.</p> </article>`)} </div> </section> ` })}`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/archivo.astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/archivo.astro";
const $$url = "/archivo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
