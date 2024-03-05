import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/components/navigation/Menu';



const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  );
};

export default HomeScreen;
