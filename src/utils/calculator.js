export const initialState = {
  currentValue: '0',
  result: '0',
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return {currentValue: `${value}`, result: `${value}`};
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    result: `${state.currentValue}${value}`,
  };
};

export const handleEqual = state => {
  const {currentValue, previousValue, operator} = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  if (operator === '÷') {
    return {
      currentValue: (previous / current).toFixed(3),
      ...resetState,
    };
  }

  if (operator === 'X') {
    return {
      currentValue: (previous * current).toFixed(3),
      ...resetState,
    };
  }

  if (operator === '+') {
    return {
      currentValue: (previous + current).toFixed(3),
      result: (previous + current).toFixed(3),
      ...resetState,
    };
  }

  if (operator === '-') {
    return {
      currentValue: (previous - current).toFixed(3),
      ...resetState,
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  console.log(`type:${type}
  value:${value}
  state:${state}`);
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
        // currentValue: `${state.currentValue}${value}`,
      };
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return initialState;
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
