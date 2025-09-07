export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.-P5U7AMi.js",app:"_app/immutable/entry/app.B4dNNZai.js",imports:["_app/immutable/entry/start.-P5U7AMi.js","_app/immutable/chunks/DB1GpfQv.js","_app/immutable/chunks/A35mlB6I.js","_app/immutable/chunks/Xq5tUBwu.js","_app/immutable/chunks/zMIBtlMt.js","_app/immutable/entry/app.B4dNNZai.js","_app/immutable/chunks/Xq5tUBwu.js","_app/immutable/chunks/A35mlB6I.js","_app/immutable/chunks/zMIBtlMt.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Ba2P18J3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
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
