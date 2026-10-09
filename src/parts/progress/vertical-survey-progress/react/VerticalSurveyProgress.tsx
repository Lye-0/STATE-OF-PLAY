'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderProgress, mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "vertical-survey-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export type VerticalSurveyProgressProps = FoundationProps;
/** 細い測量尺と、正面に固定した数値を持つ進捗表示。実値の高さに赤い指示線を置き、空の額縁を取り除く。 */
export default forwardRef<HTMLDivElement, VerticalSurveyProgressProps>(function VerticalSurveyProgress(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderProgress} mountContent={mountProgress}/>;
});
