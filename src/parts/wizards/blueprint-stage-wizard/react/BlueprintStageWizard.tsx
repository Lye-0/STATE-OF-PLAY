'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BlueprintStageWizardProps };
/** 現在の実章を載せる後方立面と、実フォームの薄い紙を、二本の非対称な斜め支持で組む。二面の32pxの本当の空隙へ18度と22度の幅20pxの支持を差し込み、両端がそれぞれの実面へ重なる。作業紙は片側に開き、実戻る・次へは同じ紙の自由端に置く。現在の行の自然高を共有し、長い章名・fields・errorでも二本の支持が章面と書く面へ接する。狭幅は二つの支持を現在章と入力紙の間の上側へ収め、nativeの順序と字面は変形しない。 */
export default function BlueprintStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="blueprint-stage-wizard" />;
}
