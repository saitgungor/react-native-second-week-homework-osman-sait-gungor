import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

export const Buttons = props => {
  const buttons = [
    'AC',
    'DEL',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    ' ',
    '0',
    ',',
    '=',
  ];

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={({item}) => {
          const operations = ['AC', 'DEL', '%', '÷', 'X', '-', '+', ',', '='];
          let isOprBtn, isEmptyBtn;
          if (operations.includes(item)) isOprBtn = true;
          if (item === ' ') isEmptyBtn = true;
          return (
            <TouchableOpacity
              style={!isEmptyBtn ? styles.buttonContainer : styles.emptyButton}
              onPress={() => {
                props.onPressHandler(item);
              }}
              id={item}>
              <Text
                style={
                  isOprBtn ? styles.operationButton : styles.buttonContent
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        numColumns={4}
        estimatedItemSize={20}
      />
    </TouchableOpacity>
  );
};
