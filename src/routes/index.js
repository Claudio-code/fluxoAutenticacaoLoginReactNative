import React from 'react';
import { 
  NavigationContainer 
} from '@react-navigation/native';

import Auth from './Auth.routes';

export default () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
