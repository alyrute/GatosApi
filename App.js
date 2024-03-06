<<<<<<< HEAD
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
=======
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> 1951274567911b48f659538340f36ff5d6ea2ce8
import Menu from './src/components/navigation/Menu';



<<<<<<< HEAD


const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Menu />
=======
const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Menu/>
>>>>>>> 1951274567911b48f659538340f36ff5d6ea2ce8
    </NavigationContainer>
  );
};

export default HomeScreen;
