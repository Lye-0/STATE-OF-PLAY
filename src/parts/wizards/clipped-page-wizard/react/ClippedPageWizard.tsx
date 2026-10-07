'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClippedPageWizardProps };
/** 留めた用紙を順に記入する。 */
export default function ClippedPageWizard(props: WizardProps) {
  return <WizardView {...props} skin="clipped-page-wizard" />;
}
