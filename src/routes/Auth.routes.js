import React from 'react';
import { 
  createStackNavigator 
} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();
export default () => {
  return(
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen 
        name="SignIn" 
        component={SignIn} 
      />
    </AuthStack.Navigator>
  );
};