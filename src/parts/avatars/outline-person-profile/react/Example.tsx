import React, {useState} from 'react';
import OutlinePersonProfile, {type OutlinePersonProfileProps} from './OutlinePersonProfile';
const initial: OutlinePersonProfileProps = {
  "users": [
    {
      "id": "sora",
      "name": "Sora Mori",
      "initials": "SM",
      "subtitle": "Design",
      "status": "online"
    },
    {
      "id": "rin",
      "name": "Rin Aoki",
      "initials": "RA",
      "subtitle": "Engineering",
      "status": "away"
    },
    {
      "id": "nao",
      "name": "Nao Ueda",
      "initials": "NU",
      "subtitle": "Research",
      "status": "offline"
    }
  ],
  "defaultValue": "sora",
  "interactive": true,
  "label": "チームのメンバー"
};
export default function Example() {
 const [selected,setSelected]=useState('sora');
 return <OutlinePersonProfile {...initial} value={selected} onValueChange={setSelected} />;
}
