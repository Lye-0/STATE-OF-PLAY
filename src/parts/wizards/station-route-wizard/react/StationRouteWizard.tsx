'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StationRouteWizardProps };
/** 駅の路線と入力面を上下で分離。 */
export default function StationRouteWizard(props: WizardProps) {
  return <WizardView {...props} skin="station-route-wizard" />;
}
