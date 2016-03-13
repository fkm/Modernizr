/*!
{
  "name": "Font Ligatures",
  "property": "ligatures",
  "caniuse": "font-feature",
  "notes": [{
    "name": "Cross-browser Web Fonts",
    "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
  }]
}
!*/
/* DOC
Detects support for OpenType ligatures
*/
define(['../src/Modernizr', '../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('ligatures', testAllProps('fontFeatureSettings', '"liga" 1'));
});
