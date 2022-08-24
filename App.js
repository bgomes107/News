import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

// screens
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/HealthScreen';
import SportsScreen from './screens/SportsScreen';
import TechScreen from './screens/TechScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Todos'
          component={All}
          options={{
            tabBarLabel: 'Todos',
            tabBarIcon: ({ color, size }) => (
              <Feather name='home' color='#000000' size={23} />
            ),
          }}
        />
        <Tab.Screen
          name='Negócios'
          component={Business}
          options={{
            tabBarLabel: 'Negócios',
            tabBarIcon: ({ color, size }) => (
              <Feather name='dollar-sign' color='#25d366' size={23} />
            ),
          }}
        />
        <Tab.Screen
          name='Saúde'
          component={HealthScreen}
          options={{
            tabBarLabel: 'Saúde',
            tabBarIcon: ({ color, size }) => (
              <Feather name='heart' color='#ff3300' size={23} />
            ),
          }}
        />
        <Tab.Screen
          name='Esportes'
          component={SportsScreen}
          options={{
            tabBarLabel: 'Esportes',
            tabBarIcon: ({ color, size }) => (
              <Feather name='dribbble' color='#f39c12' size={23} />
            ),
          }}
        />
        <Tab.Screen
          name='Tecnologia'
          component={TechScreen}
          options={{
            tabBarLabel: 'Tecnologia',
            tabBarIcon: ({ color, size }) => (
              <Feather name='cpu' color='#0099ff' size={23} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default App;