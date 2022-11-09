import {StyleSheet} from 'react-native';

import {W, H} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    height: H(60),
    width: W(100),
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    borderTopLeftRadius: W(6),
    borderTopRightRadius: W(6),
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
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  operationButton: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#0A58F6',
  },
  emptyButton: {
    width: W(19),
    height: W(19),
    margin: H(1),
  },
});

export default styles;
