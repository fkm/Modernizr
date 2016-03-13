/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('ellipsis', testAllProps('textOverflow', 'ellipsis'));
});
