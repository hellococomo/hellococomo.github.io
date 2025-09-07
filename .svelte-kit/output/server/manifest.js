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
		client: {start:"_app/immutable/entry/start.BtaU1n0b.js",app:"_app/immutable/entry/app.BQaGJLO_.js",imports:["_app/immutable/entry/start.BtaU1n0b.js","_app/immutable/chunks/BSAx0XXz.js","_app/immutable/chunks/Dw1uyZHX.js","_app/immutable/chunks/CJv4SsjV.js","_app/immutable/chunks/D25dnL7v.js","_app/immutable/entry/app.BQaGJLO_.js","_app/immutable/chunks/CJv4SsjV.js","_app/immutable/chunks/Dw1uyZHX.js","_app/immutable/chunks/D25dnL7v.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
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
