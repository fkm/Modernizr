/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  // Must test value, as this specifically tests the `cover` value
  Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));
});
