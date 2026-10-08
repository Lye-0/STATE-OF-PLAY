'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookmark-alert",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type BookmarkAlertProps = FoundationProps;
/** 通知用紙の二つの切口へ、厚い細幅の栞を通すデザイン。元の左の栞を保持し、上と下へ出る22pxの布、二つの24×4pxの紙の実切口、下の割れた尾を揃える。本文に布を重ねず、通知記号を読む面の上へ固定する。 */
export default forwardRef<HTMLDivElement, BookmarkAlertProps>(function BookmarkAlert(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
