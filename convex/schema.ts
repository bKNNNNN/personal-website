import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  guestbook: defineTable({
    name: v.string(),
    message: v.string(),
    createdAt: v.number(), // timestamp
  }).index('by_creation', ['createdAt']),
});
