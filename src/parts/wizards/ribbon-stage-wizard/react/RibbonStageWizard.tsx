'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RibbonStageWizardProps };
/** 実章と実操作を一つの大きい帯の表裏へ載せる。上の章の帯は64pxの本当の側面を回って下の操作面へ続き、下の84×64pxの斜めの自由端が戻る方向を示す。現在の入力紙は帯の内側へ挟まれ、帯と紙の間は24pxの本当の背景で抜く。短い飾り帯と重複した進捗線を廃し、材の接続と14pxの実章名で手順を読む。 */
export default function RibbonStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ribbon-stage-wizard" />;
}
