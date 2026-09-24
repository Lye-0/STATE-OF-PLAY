'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/continuum/date';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "obsidian-calendar",
  "kind": "datepickers",
  "variant": "obsidian",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": [
    "2026-09-23",
    "2026-09-27"
  ],
  "mode": "range"
};
export type ObsidianCalendarProps = FoundationProps;
/** Obsidian Calendar: Aタイプ。元の外観と、独自の日時選択を備えた独立したDOM領域。 */
export default forwardRef<HTMLDivElement, ObsidianCalendarProps>(function ObsidianCalendar(props, ref) {
  return <FoundationWidget {...props} className={`sop-continuum ${props.className??''}`} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
