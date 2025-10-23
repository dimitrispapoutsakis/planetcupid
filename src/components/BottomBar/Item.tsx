import Text from '@/components/Text/Text';
import chatIcon from '@/assets/icons/chat.svg';

interface IItem {
  route: any;
}

const Item = ({ route, ...rest }: IItem) => {
  return (
    <view className="flex flex-col items-center justify-center" {...rest}>
      <Text>{route.name}</Text>
      {/* Using Unicode character instead of Font Awesome classes */}
      {/* <image 
        src={chatIcon}
        mode="scaleToFill"
        style={{ width: '2rem', height: '2rem' }}
      /> */}
    </view>
  );
};

export default Item;
