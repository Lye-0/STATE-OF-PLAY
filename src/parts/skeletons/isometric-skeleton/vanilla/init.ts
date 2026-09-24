import {createSkeleton,type SkeletonOptions} from '../../../../shared/signature/skeleton';
import {bridge} from '../../../../shared/signature/core';
export type {SkeletonOptions};
export function init(root: HTMLElement, options: SkeletonOptions = {}) {
  return bridge(createSkeleton(root, options));
}
