'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDriveSlider, mountDriveSlider} from '../../../../shared/drive-slider';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "aurora-range",
  "kind": "sliders",
  "variant": "aurora",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": 62,
  "min": 0,
  "max": 100,
  "step": 1,
  "unit": "%",
  "range": false
};
export type AuroraRangeProps = FoundationProps;
/** Aurora Range: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, AuroraRangeProps>(function AuroraRange(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} className={`sop-drive-range ${props.className??''}`} renderContent={renderDriveSlider} mountContent={mountDriveSlider}/>;
});
