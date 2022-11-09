import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Buttons, DisplayResult} from '../../components';

import calculator, {initialState} from '../../utils/calculator';

export const Home = () => {
  console.log('rendered');

  const [state, setState] = useState(initialState);

  const onPressHandler = value => {
    let type;
    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const operators = ['+', '-', '÷', 'X'];
    if (numbers.includes(value)) type = 'number';
    if (operators.includes(value)) type = 'operator';
    if (value === '=') type = 'equal';
    if (value === 'AC') type = 'clear';
    // if (value === '=') type = 'equal';
    if (value === '%') type = 'percentage';
    setState(state => ({...state, ...calculator(type, value, state)}));
  };
  console.log(state);

  return (
    <View>
      <DisplayResult current={state.currentValue} />
      <TouchableOpacity>
        <Buttons onPressHandler={onPressHandler} />
      </TouchableOpacity>
    </View>
  );
};
