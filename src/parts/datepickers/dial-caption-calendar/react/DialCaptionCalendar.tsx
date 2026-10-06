'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "dial-caption-calendar",
  "kind": "datepickers",
  "variant": "essential",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "10:15",
  "mode": "time"
};
export type DialCaptionCalendarProps = FoundationProps;
/** Dial Caption Calendar: Aタイプ。元の外観と、独自の日時選択を備えた独立したDOM領域。 */
export default forwardRef<HTMLDivElement, DialCaptionCalendarProps>(function DialCaptionCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
