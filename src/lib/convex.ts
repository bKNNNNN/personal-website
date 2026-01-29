import { ConvexHttpClient } from 'convex/browser';
import { anyApi } from 'convex/server';

// Create a Convex HTTP client for server-side use
export function getConvexClient() {
  const convexUrl = import.meta.env.CONVEX_URL || import.meta.env.PUBLIC_CONVEX_URL;

  if (!convexUrl) {
    return null;
  }

  return new ConvexHttpClient(convexUrl);
}

// Use anyApi for untyped access (works without codegen)
export const api = anyApi;
