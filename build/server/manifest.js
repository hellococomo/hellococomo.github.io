const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.CKFQOled.js",app:"_app/immutable/entry/app.CdOyq8V-.js",imports:["_app/immutable/entry/start.CKFQOled.js","_app/immutable/chunks/D4hUnIj_.js","_app/immutable/chunks/BpA9aRCK.js","_app/immutable/chunks/Dd2dSWtQ.js","_app/immutable/entry/app.CdOyq8V-.js","_app/immutable/chunks/Dd2dSWtQ.js","_app/immutable/chunks/BpA9aRCK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BCvuqhUl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-D7oE-sqx.js')),
			__memo(() => import('./chunks/1-DlmuU7Vg.js')),
			__memo(() => import('./chunks/2-DmcsTxhk.js'))
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
