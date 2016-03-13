/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));
});
