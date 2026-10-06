import {createSegmentController,type SegmentOptions} from '../../../../shared/segment-controller';
export function init(root:HTMLElement, options:SegmentOptions={}) { return createSegmentController(root,options); }
