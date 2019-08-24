'use strict';

/**
 * Exercise.js controller
 *
 * @description: A set of functions called "actions" for managing `Exercise`.
 */

module.exports = {

  /**
   * Retrieve exercise records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.exercise.search(ctx.query);
    } else {
      return strapi.services.exercise.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a exercise record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exercise.fetch(ctx.params);
  },

  /**
   * Count exercise records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exercise.count(ctx.query);
  },

  /**
   * Create a/an exercise record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exercise.add(ctx.request.body);
  },

  /**
   * Update a/an exercise record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exercise.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exercise record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exercise.remove(ctx.params);
  }
};
