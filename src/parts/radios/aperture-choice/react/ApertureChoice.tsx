'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderRadio, mountRadio} from '../../../../shared/foundation/resonance/controls';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "aperture-choice",
  "kind": "radios",
  "variant": "aperture",
  "label": "あなたの制作モード",
  "description": "",
  "defaultValue": "cloud",
  "required": true,
  "items": [
    {
      "value": "local",
      "label": "Local",
      "description": "手元の環境で、静かに。",
      "badge": "01"
    },
    {
      "value": "cloud",
      "label": "Cloud",
      "description": "どこからでも、つながる。",
      "badge": "02"
    },
    {
      "value": "hybrid",
      "label": "Hybrid",
      "description": "両方のよさを、ひとつに。",
      "badge": "03"
    }
  ]
};
export type ApertureChoiceProps = FoundationProps;
/** RESONANCE: presentation stays below real, editable input and live content. */
export default forwardRef<HTMLDivElement, ApertureChoiceProps>(function ApertureChoice(props, ref) {
  return <FoundationWidget {...props} className={`sop-resonance ${props.className ?? ''}`} ref={ref} config={config} renderContent={renderRadio} mountContent={mountRadio}/>;
});
