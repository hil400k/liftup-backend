'use strict';

/**
 * Workout.js controller
 *
 * @description: A set of functions called "actions" for managing `Workout`.
 */

module.exports = {

  /**
   * Retrieve workout records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.workout.search(ctx.query);
    } else {
      return strapi.services.workout.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a workout record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.workout.fetch(ctx.params);
  },

  /**
   * Count workout records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.workout.count(ctx.query);
  },

  /**
   * Create a/an workout record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.workout.add(ctx.request.body);
  },

  /**
   * Update a/an workout record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.workout.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an workout record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.workout.remove(ctx.params);
  }
};
