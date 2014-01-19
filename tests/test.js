/**
 *  TrinteJS Ejs Templates
 *
 *  @project     TrinteJS
 *  @version     0.0.3
 *  @package     trinte-ejs
 *  @author      Aleksejs Gordejevs
 *  @created     2013-09-24 03:12:02
 * 
 *  Created by init script
 *  App based on TrinteJS MVC framework
 *  TrinteJS homepage http://www.trintejs.com
 **/

var trinteEjs = require('./../lib/trinte-ejs.js');

exports['Check module version'] = function(test) {
    test.equal(trinteEjs.version, require('../package.json').version);
    test.done();
};

exports['Get module extension'] = function(test) {
    test.equal(trinteEjs.extension, '.ejs');
    test.done();
};

exports['Get templating engine'] = function(test) {
    test.equal(trinteEjs.module, 'ejs-locals');
    test.done();
};

exports['Get template dir'] = function(test) {
    test.equal(typeof trinteEjs.getTemplatesDir, 'function');
    test.equal(typeof trinteEjs.getTemplatesDir(), 'string');
    test.done();
};

exports['Get path to template'] = function(test) {
    test.equal(typeof trinteEjs.getTemplate, 'function');
    test.equal(typeof trinteEjs.getTemplate(), 'string');
    test.done();
};

exports['Get template source'] = function(test) {
    test.equal(typeof trinteEjs.getTemplateText, 'function');
    test.equal(typeof trinteEjs.getTemplateText('index', 'backend'), 'string');
    test.done();
};