import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Buttons, DisplayResult} from '../../components';

export const Home = () => {
  // console.log(Buttons);
  return (
    <View>
      <DisplayResult />
      <TouchableOpacity>
        <Buttons />
      </TouchableOpacity>
    </View>
  );
};
