import React,{useState} from 'react';
import TicketSegments,{type SegmentItem} from './TicketSegments';
// Stable values, not positional indices. Add/remove items here; layout is not fixed to 3.
const items:readonly SegmentItem[]=[
{value:"choice-1",label:"Local"},
{value:"choice-2",label:"Express"},
{value:"choice-3",label:"Night"}
];
export default function Example(){const[value,setValue]=useState('choice-2');return <TicketSegments items={items} value={value} onValueChange={setValue} aria-label="Ticket Selector" name="displayMode"/>;}
