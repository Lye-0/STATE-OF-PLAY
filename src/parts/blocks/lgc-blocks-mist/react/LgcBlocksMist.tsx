'use client';
import React, { useEffect, useRef, type HTMLAttributes } from 'react';
import { createSurfaceController } from '../../../../shared/surface-controller';
import '../styles.css';
export interface LgcBlocksMistProps extends HTMLAttributes<HTMLDivElement> {
}
/** 今のギャラリーを包む、オリジナルの面。 The content is yours. */
export default function LgcBlocksMist({ children, className = '', ...props }: LgcBlocksMistProps) {
    const element = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!element.current)
            return;
        const controller = createSurfaceController(element.current, { tilt: false });
        return () => controller.destroy();
    }, []);
    return <div {...props} ref={element} className={`sop-surface lgc-root sop-lgc-blocks-mist ${className}`}>

    <div className="sop-surface-content">{children}</div>
  </div>;
}
