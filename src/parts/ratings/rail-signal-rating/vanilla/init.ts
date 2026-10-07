import {createRating,type RatingOptions} from '../../../../shared/signature/rating';
import {bridge} from '../../../../shared/signature/core';
export type {RatingOptions};
export function init(root: HTMLElement, options: RatingOptions = {}) {
  return bridge(createRating(root, options));
}
