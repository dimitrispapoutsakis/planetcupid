import { useEffect, useState } from "react";
import styles from './Ani.module.scss';

export interface IAni {
  children: React.ReactNode;
  initial: React.CSSProperties;
  animate?: React.CSSProperties;
  exit?: React.CSSProperties;
}

export const Ani = (props: IAni) => {
  const { children, initial, animate = {}, exit } = props;
  const [ aniStyle, setAniStyle ] = useState<React.CSSProperties>({
    ...initial,
    transition: 'all .25s ease',
  });
  
  useEffect(() => {
    setAniStyle(prev => ({
      ...prev,
      ...animate,
    }));
  }, [animate]);

  return (
    // <view main-thread:global-bindlayoutchange={() => console.log('layoutchange')} className={aniClass}>
    <view style={aniStyle}>
      {children}
    </view>
  );
};