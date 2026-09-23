'use client';
import React from 'react';
import {KineticSelectView,type SelectProps} from '../../../../shared/kinetic-select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/kinetic-select-view';
/** 暗い舞台に光源が移動し、照らされた行の背後に細い光の帯と大きな光だまりが生まれる。 */
export default function SpotlightMenu({className='',...props}:SelectProps){return <KineticSelectView autoIcon={false} showHeading={false} showHints={false} {...props} effect="spotlight" className={`sop-spotlight-menu ${className}`}/>;}
