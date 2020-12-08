import HomeView from './HomeView.js';
import SecondView from './SecondView.js';
import { StackNavigator } from "react-navigation";
const Routing = StackNavigator({
    HOME: { screen: HomeView },
    SECOND: { screen: SecondView }
},
{
    initialRouteName: 'HOME',
    headerMode: 'none'
});