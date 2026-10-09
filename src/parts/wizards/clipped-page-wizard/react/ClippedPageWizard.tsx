'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClippedPageWizardProps };
/** 工程の一覧と一枚の入力紙を分けたウィザード。紙の上端を挟む金具と起こした持ち手を立体的に組み、入力面をクリップで留める構造を示す。 */
export default function ClippedPageWizard(props: WizardProps) {
  return <WizardView {...props} skin="clipped-page-wizard" />;
}
