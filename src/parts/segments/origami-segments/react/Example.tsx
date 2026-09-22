import React,{useState} from 'react';
import OrigamiSegments,{type SegmentItem} from './OrigamiSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Calm"},
{value:"choice-2",label:"Play"},
{value:"choice-3",label:"Explore"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <OrigamiSegments items={items} value={value} onValueChange={setValue} aria-label="Origami Selector" name="displayMode"/>;}
