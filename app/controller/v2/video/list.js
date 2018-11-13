'use strict';
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class VideoListController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const query = {
      include: {
        model: ctx.model.VideoType,
      },
      where: {
        name: {
          [Op.like]: ctx.query.name ? `%${ctx.query.name}%` : '%%',
        },
      },
      order: [[ 'id', 'desc' ]],
      offset: toInt(ctx.query.offset) || 0,
      limit: toInt(ctx.query.limit) || 10,
    };
    ctx.body = {
      code: 200,
      data: await ctx.model.VideoList.findAndCountAll(query),
      message: '视频列表查询成功',
    };
  }

  async create() {
    // post posts
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const created_at = new Date();
    const updated_at = created_at;
    const type = await ctx.model.VideoList.create({
      name,
      created_at,
      updated_at,
    });
    ctx.body = {
      code: 200,
      data: type || {},
      message: '视频创建成功！',
    };
  }

  async update() {
    // put posts/:id
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const type = await ctx.model.VideoList.findById(id);
    if (!type) {
      ctx.status = {
        code: 404,
        data: type,
        message: '未找到需要编辑数据的用户！',
      };
      return;
    }

    const { name } = ctx.request.body;
    const updated_at = new Date();
    await type.update({
      name,
      updated_at,
    });
    ctx.body = {
      code: 201,
      data: type || {},
      message: '类型编辑成功！',
    };
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    let type = await ctx.model.VideoList.findById(id);
    if (!type) {
      ctx.body = {
        code: 404,
        data: {},
        message: '未找到该条数据！',
      };
      return;
    }

    type = await type.destroy();
    ctx.body = {
      code: 200,
      data: type,
      message: '删除成功！',
    };
  }
}

module.exports = VideoListController;
