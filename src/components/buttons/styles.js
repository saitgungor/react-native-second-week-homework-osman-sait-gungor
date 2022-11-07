import {StyleSheet} from 'react-native';

import {W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    height: H(60),
    width: W(100),
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
  },
  buttonContainer: {
    width: W(19),
    height: W(19),
    backgroundColor: '#FBFBFB',
    margin: H(1),
    borderRadius: W(100),
  },
  buttonContent: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
