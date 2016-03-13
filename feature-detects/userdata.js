/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
    "href": "https://msdn.microsoft.com/en-us/library/ms531424.aspx"
  }]
}
!*/
/* DOC
Detects support for IE userData for persisting data, an API similar to localStorage but supported since IE5.
*/
define(['../src/Modernizr', '../src/createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('userdata', !!createElement('div').addBehavior);
});
