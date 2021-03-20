'use strict';
const {sanitizeEntity} = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findAnd(ctx){
    const getBlogList = async () => {
      return await strapi.services.blog.find({'categories.category': ctx.query['categories.category']})
    }
    const allBlogList = await getBlogList();

    return allBlogList.map(entity => sanitizeEntity(entity, { model: strapi.models.blog }));
  }
};
