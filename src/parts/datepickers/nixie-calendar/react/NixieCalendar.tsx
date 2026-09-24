'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/continuum/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "nixie-calendar",
  "kind": "datepickers",
  "variant": "nixie",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export type NixieCalendarProps = FoundationProps;
/** Nixie Calendar: Aタイプ。元の外観と、独自の日時選択を備えた独立したDOM領域。 */
export default forwardRef<HTMLDivElement, NixieCalendarProps>(function NixieCalendar(props, ref) {
  return <FoundationWidget {...props} className={`sop-continuum ${props.className??''}`} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
