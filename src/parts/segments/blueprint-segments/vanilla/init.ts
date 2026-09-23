import {createTransitSegments} from '../../../../shared/transit-selection';
import type {SegmentOptions} from '../../../../shared/segment-controller';
export function init(root:HTMLElement, options:SegmentOptions={}) { return createTransitSegments(root,options); }
