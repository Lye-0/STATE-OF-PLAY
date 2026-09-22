import React,{useState} from 'react';
import PaperSegments,{type SegmentItem} from './PaperSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"日次"},
{value:"choice-2",label:"週次"},
{value:"choice-3",label:"月次"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <PaperSegments items={items} value={value} onValueChange={setValue} aria-label="Paper Segments" name="displayMode"/>;}
