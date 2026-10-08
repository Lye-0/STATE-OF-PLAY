'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClippedPageWizardProps };
/** 進行のキャプションを持つ手順。番号列の下に現在の入力面を置き、薄い区切りで作業位置を示す。 */
export default function ClippedPageWizard(props: WizardProps) {
  return <WizardView {...props} skin="clipped-page-wizard" />;
}
