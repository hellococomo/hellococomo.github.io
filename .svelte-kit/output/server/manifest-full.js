export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BILbYvQj.js",app:"_app/immutable/entry/app.BRFBu4hz.js",imports:["_app/immutable/entry/start.BILbYvQj.js","_app/immutable/chunks/C7682tP8.js","_app/immutable/chunks/ByY8_63k.js","_app/immutable/chunks/dsRjheyM.js","_app/immutable/entry/app.BRFBu4hz.js","_app/immutable/chunks/dsRjheyM.js","_app/immutable/chunks/ByY8_63k.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CrmrVpwE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
