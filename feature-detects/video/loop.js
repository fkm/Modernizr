/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(['../../src/Modernizr', '../../src/createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('videoloop', 'loop' in createElement('video'));
});
