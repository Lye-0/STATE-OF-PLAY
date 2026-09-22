import React,{useState} from 'react';
import VelvetSegments,{type SegmentItem} from './VelvetSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Quiet"},
{value:"choice-2",label:"Balance"},
{value:"choice-3",label:"Rich"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <VelvetSegments items={items} value={value} onValueChange={setValue} aria-label="Velvet Selector" name="displayMode"/>;}
