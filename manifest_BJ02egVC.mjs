import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_BmtkLpij.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/","cacheDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/node_modules/.astro/","outDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/","srcDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/src/","publicDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/public/","buildClientDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/client/","buildServerDir":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/server/","adapterName":"","routes":[{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/archivo/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/archivo.D_9eCd7n.css"}],"routeData":{"route":"/archivo","isIndex":false,"type":"page","pattern":"^\\/archivo\\/?$","segments":[[{"content":"archivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archivo.astro","pathname":"/archivo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/bitacora/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/archivo.D_9eCd7n.css"}],"routeData":{"route":"/bitacora","isIndex":true,"type":"page","pattern":"^\\/bitacora\\/?$","segments":[[{"content":"bitacora","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bitacora/index.astro","pathname":"/bitacora","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/ensayos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ensayos","isIndex":true,"type":"page","pattern":"^\\/ensayos\\/?$","segments":[[{"content":"ensayos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ensayos/index.astro","pathname":"/ensayos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/podcast/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/archivo.D_9eCd7n.css"}],"routeData":{"route":"/podcast","isIndex":false,"type":"page","pattern":"^\\/podcast\\/?$","segments":[[{"content":"podcast","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/podcast.astro","pathname":"/podcast","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/proyecto/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/archivo.D_9eCd7n.css"}],"routeData":{"route":"/proyecto","isIndex":false,"type":"page","pattern":"^\\/proyecto\\/?$","segments":[[{"content":"proyecto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyecto.astro","pathname":"/proyecto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/archivo.D_9eCd7n.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://tu-sitio.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/bitacora/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/bitacora/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/bitacora/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/archivo.astro",{"propagation":"none","containsHead":true}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/podcast.astro",{"propagation":"none","containsHead":true}],["/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/proyecto.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/archivo@_@astro":"pages/archivo.astro.mjs","\u0000@astro-page:src/pages/bitacora/[slug]@_@astro":"pages/bitacora/_slug_.astro.mjs","\u0000@astro-page:src/pages/bitacora/index@_@astro":"pages/bitacora.astro.mjs","\u0000@astro-page:src/pages/ensayos/[slug]@_@astro":"pages/ensayos/_slug_.astro.mjs","\u0000@astro-page:src/pages/ensayos/index@_@astro":"pages/ensayos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/podcast@_@astro":"pages/podcast.astro.mjs","\u0000@astro-page:src/pages/proyecto@_@astro":"pages/proyecto.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_BJ02egVC.mjs","/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BGnNjhxA.mjs","/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Uhmbf6JA.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/archivo/index.html","/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/bitacora/index.html","/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/ensayos/index.html","/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/podcast/index.html","/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/proyecto/index.html","/file:///sessions/pensive-jolly-wright/mnt/migrar%20a/sitio-proyecto/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"sBRZbvsS17IghT5WYxoVDwqWkbLp2dfSP3+OipGHZJI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
