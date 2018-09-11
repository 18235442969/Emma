'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getHello() {
    return 'hello'
  }
}

module.exports = HomeService;
