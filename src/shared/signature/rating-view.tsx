'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createRating,ratingMarkup,type RatingOptions} from './rating';
export interface RatingProps extends RatingOptions, SignatureContainerProps {}
export function RatingView({skin,className,style,id,children,...options}:RatingProps & {skin:string}){
 return <SignatureHost kind="ratings" skin={skin} options={options} create={createRating} render={ratingMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
