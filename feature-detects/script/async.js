/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
/* DOC
Detects support for the `async` attribute on the `<script>` element.
*/
define(['../../src/Modernizr', '../../src/createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('scriptasync', 'async' in createElement('script'));
});
