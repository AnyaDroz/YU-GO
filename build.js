const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['**/tokens/CORE.json', '**/tokens/DARK.json', '**/tokens/DARK.json'],
  platforms: {
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'CORE.js',
          format: 'javascript/es6',
        },
        {
          destination: 'LIGHT.js',
          format: 'javascript/es6',
        },
        {
          destination: 'DARK.js',
          format: 'javascript/es6',
        },
      ],
    },
    css: {
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity',
        'ts/size/lineheight',
        'ts/type/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab',
      ],
      buildPath: 'build/css/',
      files: [
        {
          destination: 'CORE.css',
          format: 'css/variables',
        },
        {
          destination: 'LIGHT.css',
          format: 'css/variables',
        },
        {
          destination: 'DARK.css',
          format: 'css/variables',
        },
      ],
    },
  },
  
});



sd.cleanAllPlatforms();
sd.buildAllPlatforms();