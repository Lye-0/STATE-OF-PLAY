'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StationRouteWizardProps };
/** 駅を進むように手順を確認。 */
export default function StationRouteWizard(props: WizardProps) {
  return <WizardView {...props} skin="station-route-wizard" />;
}
