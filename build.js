const { registerTransforms } = require("@tokens-studio/sd-transforms");
const StyleDictionary = require("style-dictionary");
registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
	source: ["**/tokens/CORE.json"],
	platforms: {
		//if you need js variables
		js: {
			transformGroup: "tokens-studio",
			buildPath: "src/js/",
			files: [
				{
					destination: "CORE.js",
					format: "javascript/es6",
				},
			],
		},
		css: {
			transforms: [
				"ts/descriptionToComment",
				"ts/size/px",
				"ts/opacity",
				"ts/size/lineheight",
				"ts/type/fontWeight",
				"ts/resolveMath",
				"ts/size/css/letterspacing",
				"ts/typography/css/shorthand",
				"ts/border/css/shorthand",
				"ts/shadow/css/shorthand",
				"ts/color/css/hexrgba",
				"ts/color/modifiers",
				"name/cti/kebab",
			],
			buildPath: "src/css/",
			files: [
				{
					destination: "CORE.css",
					format: "css/variables",
				},
			],
		},
	},
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

const sdLight = StyleDictionary.extend({
	source: ["**/tokens/LIGHT.json"],
	platforms: {
		js: {
			transformGroup: "tokens-studio",
			buildPath: "src/js/",
			files: [
				{
					destination: "LIGHT.js",
					format: "javascript/es6",
				},
			],
		},
		css: {
			transforms: [
				"ts/descriptionToComment",
				"ts/size/px",
				"ts/opacity",
				"ts/size/lineheight",
				"ts/type/fontWeight",
				"ts/resolveMath",
				"ts/size/css/letterspacing",
				"ts/typography/css/shorthand",
				"ts/border/css/shorthand",
				"ts/shadow/css/shorthand",
				"ts/color/css/hexrgba",
				"ts/color/modifiers",
				"name/cti/kebab",
			],
			buildPath: "src/css/",
			files: [
				{
					destination: "LIGHT.css",
					format: "css/variables",
				},
			],
		},
	},
});

sdLight.cleanAllPlatforms();
sdLight.buildAllPlatforms();

const sdDark = StyleDictionary.extend({
	source: ["**/tokens/DARK.json"],
	platforms: {
		js: {
			transformGroup: "tokens-studio",
			buildPath: "src/js/",
			files: [
				{
					destination: "DARK.js",
					format: "javascript/es6",
				},
			],
		},
		css: {
			transforms: [
				"ts/descriptionToComment",
				"ts/size/px",
				"ts/opacity",
				"ts/size/lineheight",
				"ts/type/fontWeight",
				"ts/resolveMath",
				"ts/size/css/letterspacing",
				"ts/typography/css/shorthand",
				"ts/border/css/shorthand",
				"ts/shadow/css/shorthand",
				"ts/color/css/hexrgba",
				"ts/color/modifiers",
				"name/cti/kebab",
			],
			buildPath: "src/css/",
			files: [
				{
					destination: "DARK.css",
					format: "css/variables",
				},
			],
		},
	},
});

sdDark.cleanAllPlatforms();
sdDark.buildAllPlatforms();
