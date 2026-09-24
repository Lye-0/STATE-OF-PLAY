'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createWizard,wizardMarkup,type WizardOptions} from './wizard';
export interface WizardProps extends WizardOptions, SignatureContainerProps {}
export function WizardView({skin,className,style,id,children,...options}:WizardProps & {skin:string}){
 return <SignatureHost kind="wizards" skin={skin} options={options} create={createWizard} render={wizardMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
