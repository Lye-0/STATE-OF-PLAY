'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StationRouteWizardProps };
/** nativeの章番号を駅、実手順の並びを一つの経路として結ぶ。44pxの駅の中心を2pxの連続線でつなぎ、本文の左へ孤立していた線は廃する。完了は実チェック、現在はnative aria-currentと明暗、未来はdisabledで区別する。狭幅は実手順を縦路線へ変え、長い駅名も14pxで読み、入力と操作を平らな全幅の本文へ置く。 */
export default function StationRouteWizard(props: WizardProps) {
  return <WizardView {...props} skin="station-route-wizard" />;
}
