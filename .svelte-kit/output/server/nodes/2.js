import * as universal from '../entries/pages/delete/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/delete/+layout.js";
export const imports = ["_app/immutable/nodes/2.DSz2oFpi.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CJv4SsjV.js"];
export const stylesheets = [];
export const fonts = [];
