'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StitchedJourneyWizardProps };
/** 一枚の布から開く88pxの本当の穴の中に、実章の44pxの番号を縫い留める。番号の平らな島と穴の両端を14pxの布橋で接し、橋の二本の縫い目が実際の接合を示す。三つの穴を持つ同じ布は入力の内側の一枚の布面と裾へ続き、別々の線と紫の小タブを廃する。多手順と狭幅では穴を縦へ並べ、nativeの章名には十分な読む幅を確保する。 */
export default function StitchedJourneyWizard(props: WizardProps) {
  return <WizardView {...props} skin="stitched-journey-wizard" />;
}
