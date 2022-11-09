import {StyleSheet} from 'react-native';

import {W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    height: H(40),
    width: W(100),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  result: {
    fontSize: 32,
    marginRight: W(6),
    marginBottom: H(1),
  },
  input: {
    fontSize: 48,
    marginRight: W(6),
    marginBottom: H(1),
  },
});

export default styles;
