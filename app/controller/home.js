'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let text = await this.service.home.getHello();
    this.ctx.body = text;
  }
}

module.exports = HomeController;