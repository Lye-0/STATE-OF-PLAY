import React,{useState} from 'react';
import OutlineSegments,{type SegmentItem} from './OutlineSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"下書き"},
{value:"choice-2",label:"確認"},
{value:"choice-3",label:"公開"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <OutlineSegments items={items} value={value} onValueChange={setValue} aria-label="Outline Segments" name="displayMode"/>;}
