import BottomBar from "../BottomBar/BottomBar";
import { MemoryRouter, Routes, Route } from 'react-router';
import { butteryCubicBezier, transitionDuration25 } from "@/constants/animations";
import '@/assets/scss/index.scss';

export const App = () => {
  const getAnimationStyle = (name: string) => {
    return {
      animation: `${name} ${transitionDuration25} ${butteryCubicBezier} both` as const,
    };
  }

  return (
    <view style={getAnimationStyle('grow-in')} className="bg-background-primary min-h-screen flex items-center justify-center animate-scale-in">
      <view className="bg-primary-4004 p-8 rounded-lg shadow-lg">
        <text className="text-white text-2xl font-bold">ReactLynx with Tailwind CSS</text>
        <text className="text-white/80 mt-2">Dark theme working! 🎉</text>
      </view>
    </view>
  );
};

