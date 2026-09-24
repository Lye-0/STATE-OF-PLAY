'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createColor,colorMarkup,type ColorOptions} from './color';
export interface ColorProps extends ColorOptions, SignatureContainerProps {}
export function ColorView({skin,className,style,id,children,...options}:ColorProps & {skin:string}){
 return <SignatureHost kind="colors" skin={skin} options={options} create={createColor} render={colorMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
