'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as PrismJourneyProps };
/** 多面体の節点と分光する接続線が、工程の位置を示す。 */
export default function PrismJourney(props: WizardProps) {
  return <WizardView {...props} skin="prism-journey" />;
}
