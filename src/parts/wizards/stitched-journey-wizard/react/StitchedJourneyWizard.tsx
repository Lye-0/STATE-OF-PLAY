'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StitchedJourneyWizardProps };
/** 縫い綴じた表紙に入力用紙を留めるウィザード。工程の布札と紙面を分け、綴じ糸が余白をまたぐ。氏名・入力位置を動かさず、選択と完了は実際の工程状態で示す。 */
export default function StitchedJourneyWizard(props: WizardProps) {
  return <WizardView {...props} skin="stitched-journey-wizard" />;
}
