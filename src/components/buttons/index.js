import {View, Text, FlatList} from 'react-native';

import styles from './styles';

export const Buttons = () => {
  const buttons = [
    'AC',
    'DEL',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    'Boş',
    '0',
    ',',
    '=',
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonContent}>{item}</Text>
            </View>
          );
        }}
        numColumns={4}
        estimatedItemSize={20}
      />
    </View>
  );
};
