import '@/assets/scss/index.scss';
import { Ani } from '@/components/Ani/Ani';

const App = () => {
  return (
    <Ani
      initial={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      exit={{ opacity: .8, transform: 'translate3d(-20%, 0, 0)' }}
    >
      <view className=" bg-background-primary min-h-screen flex items-center justify-center animate-scale-in">
        <view className="bg-primary-4004 p-8 rounded-lg shadow-lg">
          <text className="text-white text-2xl font-bold">ReactLynx with Tailwind CSS</text>
          <text className="text-white/80 mt-2">Dark theme working! 🎉</text>
        </view>
      </view>
    </Ani>
  );
};

export default App;