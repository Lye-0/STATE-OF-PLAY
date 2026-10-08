'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-marker-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type StoneMarkerNoticeProps = FoundationProps;
/** 三つの切断面を持つ一つの石柱へ、通知の標石を留めるデザイン。丸いアイコンと角丸箱を廃止し、46pxの五角の石柱と、8px重なる横の標石、上4px/下6pxの小口を作る。通知記号は柱へ刻み、本文と操作は標石の面へ固定する。 */
export default forwardRef<HTMLDivElement, StoneMarkerNoticeProps>(function StoneMarkerNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
