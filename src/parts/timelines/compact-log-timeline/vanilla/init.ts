import {createTimeline,type TimelineOptions} from '../../../../shared/signature/timeline';
import {bridge} from '../../../../shared/signature/core';
export type {TimelineOptions};
export function init(root: HTMLElement, options: TimelineOptions = {}) {
  return bridge(createTimeline(root, options));
}
