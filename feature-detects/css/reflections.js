/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('cssreflections', testAllProps('boxReflect', 'above', true));
});
