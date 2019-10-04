'use strict';

/**
 * Plansheiko.js controller
 *
 * @description: A set of functions called "actions" for managing `Plansheiko`.
 */

module.exports = {

  /**
   * Retrieve plansheiko records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.plansheiko.search(ctx.query);
    } else {
      return strapi.services.plansheiko.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a plansheiko record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.plansheiko.fetch(ctx.params);
  },

  /**
   * Count plansheiko records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.plansheiko.count(ctx.query);
  },

  /**
   * Create a/an plansheiko record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.plansheiko.add(ctx.request.body);
  },

  /**
   * Update a/an plansheiko record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.plansheiko.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an plansheiko record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.plansheiko.remove(ctx.params);
  }
};
