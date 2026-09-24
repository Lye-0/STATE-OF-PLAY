'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createSkeleton,skeletonMarkup,type SkeletonOptions} from './skeleton';
export interface SkeletonProps extends SkeletonOptions, SignatureContainerProps {}
export function SkeletonView({skin,className,style,id,children,...options}:SkeletonProps & {skin:string}){
 return <SignatureHost kind="skeletons" skin={skin} options={options} create={createSkeleton} render={skeletonMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
