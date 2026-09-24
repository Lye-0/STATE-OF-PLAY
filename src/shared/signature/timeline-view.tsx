'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createTimeline,timelineMarkup,type TimelineOptions} from './timeline';
export interface TimelineProps extends TimelineOptions, SignatureContainerProps {}
export function TimelineView({skin,className,style,id,children,...options}:TimelineProps & {skin:string}){
 return <SignatureHost kind="timelines" skin={skin} options={options} create={createTimeline} render={timelineMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
