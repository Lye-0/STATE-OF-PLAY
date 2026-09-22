import { createScrollArea, type ScrollAreaOptions } from '../../../../shared/scroll-area';
export function init(element: HTMLElement, options: ScrollAreaOptions = {}) {
  return createScrollArea(element, options);
}
