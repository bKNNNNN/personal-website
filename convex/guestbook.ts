import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

// Get all guestbook messages, sorted by creation date (newest first)
export const list = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db
      .query('guestbook')
      .withIndex('by_creation')
      .order('desc')
      .collect();
    return messages;
  },
});

// Get recent guestbook messages (for homepage preview)
export const listRecent = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 3;
    const messages = await ctx.db
      .query('guestbook')
      .withIndex('by_creation')
      .order('desc')
      .take(limit);
    return messages;
  },
});

// Add a new guestbook message
export const add = mutation({
  args: {
    name: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Validate input
    if (args.name.length > 50) {
      throw new Error('Le nom ne peut pas dépasser 50 caractères.');
    }
    if (args.message.length > 500) {
      throw new Error('Le message ne peut pas dépasser 500 caractères.');
    }
    if (args.name.trim().length === 0 || args.message.trim().length === 0) {
      throw new Error('Veuillez remplir tous les champs.');
    }

    const messageId = await ctx.db.insert('guestbook', {
      name: args.name.trim(),
      message: args.message.trim(),
      createdAt: Date.now(),
    });

    return messageId;
  },
});
