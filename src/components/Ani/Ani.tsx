import { useEffect, useState } from "react";
import styles from './Ani.module.scss';

export interface IAni {
  children: React.ReactNode;
  type?: TAniType;
  duration?: number;
  direction?: 'None' | 'In' | 'Out';
  delay?: number;
  easing?: string;
  aniOnMount?: boolean;
}

export type TAniType = 'slide' | 'scale';
export type TAnimationState = 'Idle' | 'Enter' | 'Exit';

export const Ani = (props: IAni) => {
  const { children, type = 'slide', duration = 300, delay = 0, easing = 'ease-in-out', direction = 'In' } = props;
  const [animationState, setAnimationState] = useState<TAnimationState>('Enter');
  const aniClass = styles[`${type}${direction}${animationState}`]
   
  useEffect(() => {
    // setAnimationState('entering');
  }, [aniClass]);

  return (
    // <view main-thread:global-bindlayoutchange={() => console.log('layoutchange')} className={aniClass}>
    <view className={aniClass}>
      {children}
    </view>
  );
};