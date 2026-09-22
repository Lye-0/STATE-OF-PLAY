'use client';
import { useEffect, useId, useRef, type HTMLAttributes } from 'react';
import { createScrollArea, type ScrollAreaController, type ScrollOrientation } from './scroll-area';
export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: ScrollOrientation;
  viewportLabel?: string;
  scrollbarLabel?: string;
  onProgressChange?: (progress: number) => void;
}
/** React owns the content. The controller updates geometry/ARIA on the rail only. */
export function useScrollArea({orientation = 'vertical', onProgressChange}: ScrollAreaProps) {
  const root = useRef<HTMLDivElement | null>(null);
  const controller = useRef<ScrollAreaController | null>(null);
  const callback = useRef(onProgressChange); callback.current = onProgressChange;
  const viewportId = useId();
  const previousOrientation = useRef(orientation);
  useEffect(() => {
    if (!root.current) return;
    const instance = createScrollArea(root.current, {orientation, onProgressChange: value => callback.current?.(value)});
    controller.current = instance;
    if (previousOrientation.current !== orientation) instance.setOrientation(orientation);
    previousOrientation.current = orientation;
    return () => { instance.destroy(); controller.current = null; };
  }, [orientation]);
  return {root, viewportId};
}
