import BottomBar from "../BottomBar/BottomBar";
import { MemoryRouter, Routes, Route } from 'react-router';
export const App = () => {

  return (
    <view className="bg-background-primary min-h-screen flex items-center justify-center">
      <view className="bg-primary-4004 p-8 rounded-lg shadow-lg">
        <text className="text-white text-2xl font-bold">ReactLynx with Tailwind CSS</text>
        <text className="text-white/80 mt-2">Dark theme working! 🎉</text>
      </view>
    </view>
  );
};

