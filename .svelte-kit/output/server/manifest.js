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
		client: {start:"_app/immutable/entry/start.C5ffarHx.js",app:"_app/immutable/entry/app.HHgZgjUT.js",imports:["_app/immutable/entry/start.C5ffarHx.js","_app/immutable/chunks/BAjUuf9a.js","_app/immutable/chunks/Bt-Wkm9A.js","_app/immutable/chunks/BZ5a9Li2.js","_app/immutable/entry/app.HHgZgjUT.js","_app/immutable/chunks/BZ5a9Li2.js","_app/immutable/chunks/Bt-Wkm9A.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
