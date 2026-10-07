'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StitchedJourneyWizardProps };
/** 縫い目でつながる工程の旅程。 */
export default function StitchedJourneyWizard(props: WizardProps) {
  return <WizardView {...props} skin="stitched-journey-wizard" />;
}
