'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/api.js')(app);
  require('./router/web.js')(app);
};
