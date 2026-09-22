'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderSlider, mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folio-range",
  "kind": "sliders",
  "variant": "folio",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": [
    24,
    78
  ],
  "min": 0,
  "max": 100,
  "step": 1,
  "unit": "%",
  "range": true
};
export type FolioRangeProps = FoundationProps;
/** Folio Range: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, FolioRangeProps>(function FolioRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderSlider} mountContent={mountSlider}/>;
});
