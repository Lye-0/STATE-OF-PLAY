'use client';
import React from 'react';
import {SignatureHost,type SignatureContainerProps} from './react-host';
import {createAvatar,avatarMarkup,type AvatarOptions} from './avatar';
export interface AvatarProps extends AvatarOptions, SignatureContainerProps {}
export function AvatarView({skin,className,style,id,children,...options}:AvatarProps & {skin:string}){
 return <SignatureHost kind="avatars" skin={skin} options={options} create={createAvatar} render={avatarMarkup} className={className} style={style} id={id}>{children}</SignatureHost>;
}
