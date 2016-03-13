/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
define(['../../src/Modernizr', '../../src/testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));
});
