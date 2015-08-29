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
var engine = require('ejs-locals');
var fs = require('fs');
var mpkg = require('../package.json');

/**
 * Library version.
 **/
exports.version = mpkg.version;

/**
 * This file extension will be used by default for all template files
 **/
exports.extension = '.ejs';

/**
 * View templating engine
 **/
exports.module = 'ejs-locals';

/**
 * Get templates directory
 *
 * @return {String}
 **/
exports.getTemplatesDir = function () {
    return __dirname + '/../templates';
};

/**
 * Get source template filename
 * @param {String} name
 * @param {String} side
 * @return {String}
 **/
exports.getTemplate = function (name, side, main) {
    main = main === true ? '/' : '/crud/';
    side = (side === 'frontend') ? 'frontend' : 'backend';
    name = name ? name : 'index';
    return __dirname + '/../templates/' + side + main + name + exports.extension;
};

/**
 * Get template text
 * @param {String} name
 * @param {String} side
 * @return {String}
 **/
exports.getTemplateText = function (name, side) {
    side = (side === 'frontend') ? 'frontend' : 'backend';
    name = name ? name : 'index';
    return fs.readFileSync(exports.getTemplate(name, side)).toString();
};

/**
 * Render template
 * @param {String} name
 * @param {String} side
 * @param {Object} data
 * @return {String}
 **/
exports.render = function (name, side, data) {
    if (typeof data === 'undefined') {
        if (typeof side === 'undefined') {
            return 'data not defined';
        } else if (typeof side === 'object') {
            data = side;
            side = 'backend';
        }
    }
    side = (side === 'frontend') ? 'frontend' : 'backend';
    name = name ? name : 'index';
    var template = fs.readFileSync(exports.getTemplate(name, side)).toString();
    return engine.render(template, {
        locals: data,
        open: "<?",
        close: "?>"
    });
};

/**
 * Set EjsTemplate Engine
 *
 * @param {Object} app
 * @api public
 **/
exports.setEngine = function (app) {
    app.configure(function () {
        app.engine('ejs', engine);
        app.set('view engine', 'ejs');
    });
};