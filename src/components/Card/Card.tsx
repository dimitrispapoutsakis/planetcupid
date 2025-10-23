import type { IChildren } from "@/typings";

const Card = ({children}: IChildren) => {
  return (
    <view className="bg-background-card rounded-lg p-4">
      {children}
    </view>
  );
};

export default Card;