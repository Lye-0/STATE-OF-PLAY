'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StitchedJourneyWizardProps };
/** 縫い合わせる設定票。手順を小ラベルに分け、入力面の縫い目を読み取りの境界に留める。 */
export default function StitchedJourneyWizard(props: WizardProps) {
  return <WizardView {...props} skin="stitched-journey-wizard" />;
}
