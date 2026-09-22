import React,{useState} from 'react';
import CopperSegments,{type SegmentItem} from './CopperSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Soft"},
{value:"choice-2",label:"Warm"},
{value:"choice-3",label:"Hot"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <CopperSegments items={items} value={value} onValueChange={setValue} aria-label="Copper Selector" name="displayMode"/>;}
