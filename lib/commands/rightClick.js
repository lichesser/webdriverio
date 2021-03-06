/**
 *
 * Apply right click on an element. If selector is not provided, click on the last
 * moved-to location.
 *
 * @param {String} selector element to click on
 * @callbackParameter error
 *
 * @uses protocol/element, protocol/buttonPress
 * @type action
 *
 */

var handleMouseButtonCommand = require('../helpers/handleMouseButtonCommand');

module.exports = function rightClick (cssSelector) {
    handleMouseButtonCommand.call(this, cssSelector, 'right', arguments[arguments.length - 1]);
};