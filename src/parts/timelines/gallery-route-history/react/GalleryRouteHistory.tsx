'use client';
import React from 'react';
import {TimelineView,type TimelineProps} from '../../../../shared/signature/timeline-view';
import '../styles.css';
export type { TimelineProps as GalleryRouteHistoryProps };
/** 年代の札を額縁に添え、各出来事を独立した展示面として並べる。 */
export default function GalleryRouteHistory(props: TimelineProps) {
  return <TimelineView {...props} skin="gallery-route-history" />;
}
