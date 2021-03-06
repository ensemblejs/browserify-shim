'use strict';
/*jshint asi: true*/

var testLib = require('./utils/test-lib')
  , test = require('tap').test
  , baseUrl = 'http://zeptojs.com/'

test('zepto', function (t) {
  var shimConfig = { exports: '$' }
  testLib(t, { 
      name: 'zepto.min.js'
    , test: function (t, resolved) { t.equals(resolved.param({ one: 1, two: 2}), 'one=1&two=2', 'shims zepto') }
    , asserts: 1
    , shimConfig: shimConfig
    , baseUrl: baseUrl
  })
});
