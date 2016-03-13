/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(['../../src/Modernizr', '../../src/createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('videopreload', 'preload' in createElement('video'));
});
