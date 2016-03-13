/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));
});
