
import Item from "./Item";
import { routes } from "@/constants/routes";

const BottomBar = () => {
  return (
    <view className="bg-background-nav absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 mb-3 shadow-lg rounded-xl flex items-center justify-around z-[2]">
      {
        routes.map((route) => (
          <Item key={route.path} route={route} />
        ))
      }
    </view>
  );
};

export default BottomBar;
