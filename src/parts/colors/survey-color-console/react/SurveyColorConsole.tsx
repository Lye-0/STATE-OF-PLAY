'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SurveyColorConsoleProps };
/** 測色コンソール。左の色面と右の数値軸を別の操作区画へ配置し、狭幅では上下へ戻す。 */
export default function SurveyColorConsole(props: ColorProps) {
  return <ColorView {...props} skin="survey-color-console" />;
}
