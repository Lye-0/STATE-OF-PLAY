'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as IndexFlapWizardProps };
/** 引き出しの索引を切り替える手順。上の小さな取手付き欄と下の作業面を分けて表示。 */
export default function IndexFlapWizard(props: WizardProps) {
  return <WizardView {...props} skin="index-flap-wizard" />;
}
