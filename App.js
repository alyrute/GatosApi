import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Menu from './src/components/navigation/Menu';





const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Menu />
    </NavigationContainer>
  );
};

export default HomeScreen;
