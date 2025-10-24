
import type { MainThread } from '@lynx-js/types';
import { useNavigate } from 'react-router';
import { scaleIn } from '@/constants/animations';

interface IItem {
  route: any;
}

const Item = ({ route, ...rest }: IItem) => {
  const nav = useNavigate();

  const onPress = () => {
    // TODO: Add vibration and effects 
    nav(route.path); 
  };
  
  return (
    <view {...rest} bindtap={onPress} style={{padding: '1rem'}}>
      <image 
        src={route.icon}
        mode="scaleToFill"
        style={{ 
          width: '2rem', 
          height: '2rem',
        }}
      />
    </view>
  );
};

export default Item;
