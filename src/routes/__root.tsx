import { createRootRoute, Outlet } from '@tanstack/react-router';
import BottomBar from '../components/BottomBar/BottomBar';

export const Route = createRootRoute({
  component: () => (
    <view className="min-h-screen">
      <Outlet />
      <BottomBar />
    </view>
  ),
});