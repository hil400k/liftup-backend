'use strict';

/**
 * Customplan.js controller
 *
 * @description: A set of functions called "actions" for managing `Customplan`.
 */

module.exports = {

  /**
   * Retrieve customplan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.customplan.search(ctx.query);
    } else {
      return strapi.services.customplan.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a customplan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.customplan.fetch(ctx.params);
  },

  /**
   * Count customplan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.customplan.count(ctx.query);
  },

  /**
   * Create a/an customplan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.customplan.add(ctx.request.body);
  },

  /**
   * Update a/an customplan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.customplan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an customplan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.customplan.remove(ctx.params);
  }
};
