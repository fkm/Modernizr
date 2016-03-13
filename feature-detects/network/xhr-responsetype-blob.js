/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='blob'.
*/
define(['../../src/Modernizr', '../../src/testXhrType'], function(Modernizr, testXhrType) {
  Modernizr.addTest('xhrresponsetypeblob', testXhrType('blob'));
});
