'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/sequence/badges';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "mercury-tags",
  "kind": "badges",
  "variant": "mercury",
  "label": "小さな情報に、個性を。",
  "description": "",
  "defaultValue": [
    "ready"
  ],
  "selectable": true,
  "removable": false,
  "items": [
    {
      "value": "design",
      "label": "Design",
      "badge": "8"
    },
    {
      "value": "motion",
      "label": "Motion",
      "badge": "4"
    },
    {
      "value": "ready",
      "label": "Ready"
    },
    {
      "value": "review",
      "label": "Review"
    }
  ]
};
export type MercuryTagsProps = FoundationProps;
/** Mercury Tags: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, MercuryTagsProps>(function MercuryTags(props, ref) {
  return <FoundationWidget {...props} className={`sop-sequence ${props.className??''}`} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
