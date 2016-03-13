/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
define(['../../src/Modernizr', '../../src/mq'], function(Modernizr, mq) {
  Modernizr.addTest('mediaqueries', mq('only all'));
});
