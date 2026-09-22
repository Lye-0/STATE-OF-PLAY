import React,{useState} from 'react';
import StudioSegments,{type SegmentItem} from './StudioSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Mono"},
{value:"choice-2",label:"Stereo"},
{value:"choice-3",label:"Spatial"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <StudioSegments items={items} value={value} onValueChange={setValue} aria-label="Studio Selector" name="displayMode"/>;}
