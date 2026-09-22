'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderDate, mountDate} from '../../../../shared/foundation/date';
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
/** Obsidian Calendar: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, ObsidianCalendarProps>(function ObsidianCalendar(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderDate} mountContent={mountDate}/>;
});
