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
		client: {start:"_app/immutable/entry/start.C1HNUWlp.js",app:"_app/immutable/entry/app.BxWb0zFP.js",imports:["_app/immutable/entry/start.C1HNUWlp.js","_app/immutable/chunks/DRBxLJJ-.js","_app/immutable/chunks/A35mlB6I.js","_app/immutable/chunks/Xq5tUBwu.js","_app/immutable/chunks/zMIBtlMt.js","_app/immutable/entry/app.BxWb0zFP.js","_app/immutable/chunks/Xq5tUBwu.js","_app/immutable/chunks/A35mlB6I.js","_app/immutable/chunks/zMIBtlMt.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Ba2P18J3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
