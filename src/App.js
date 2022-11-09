import React from 'react';
import {View} from 'react-native';
import {Home} from './screens';

import styles from './styles';

export const App = () => {
  return (
    <View style={styles.wrapper}>
      <Home />
    </View>
  );
};
