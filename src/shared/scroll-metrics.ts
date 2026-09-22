/** Logical scroll geometry. Shared by every skin; independent of DOM and animation. */
export interface ScrollMetrics {
  maximum: number; position: number; progress: number;
  thumbSize: number; travel: number; offset: number; overflowing: boolean;
}
const finite = (n: number) => Number.isFinite(n) ? n : 0;
export function scrollMetrics(viewport: number, content: number, rail: number, position: number, minimumThumb = 28): ScrollMetrics {
  viewport = Math.max(0, finite(viewport)); content = Math.max(viewport, finite(content)); rail = Math.max(0, finite(rail));
  const maximum = Math.max(0, content - viewport);
  const current = Math.max(0, Math.min(maximum, finite(position)));
  const progress = maximum > 0 ? current / maximum : 0;
  const thumbSize = Math.min(rail, Math.max(Math.max(0, finite(minimumThumb)), content > 0 ? rail * viewport / content : rail));
  const travel = Math.max(0, rail - thumbSize);
  return { maximum, position: current, progress, thumbSize, travel, offset: progress * travel, overflowing: maximum > 1 && viewport > 0 && rail > 0 };
}
