/**
 * Design Tokens
 * Three-tier token system for tm-ui
 */

export { primitives } from './primitives';
export { semantic } from './semantic';
export { components } from './components';

export type { Primitives } from './primitives';
export type { Semantic } from './semantic';
export type { Components } from './components';

// Main theme object combining all token tiers
import { primitives } from './primitives';
import { semantic } from './semantic';
import { components } from './components';

export const tokens = {
  primitives,
  semantic,
  components,
} as const;

export type Tokens = typeof tokens;
