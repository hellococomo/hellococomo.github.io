import adapter from '@sveltejs/adapter-static';
 
/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/hellococomo" }
 
export default config;