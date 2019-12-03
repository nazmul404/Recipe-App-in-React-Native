import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./Screen/HomeScreen"
import DetailsScreen from "./Screen/DetailsScreen"


const AppNavigator= createStackNavigator({
    Home: { screen: HomeScreen},
    Details: { screen: DetailsScreen}

    },
    {
        initialRouteName:'Home',
        headerBackTitleVisible:false,

})

export default createAppContainer(AppNavigator); 