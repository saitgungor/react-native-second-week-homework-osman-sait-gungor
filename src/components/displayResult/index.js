import {View, Text} from 'react-native';

import styles from './styles';

export const DisplayResult = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{props.current}</Text>
    </View>
  );
};
