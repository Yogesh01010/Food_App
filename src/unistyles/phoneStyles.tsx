import { createStyleSheet } from 'react-native-unistyles';

const shadowStyle = {
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 4,
  shadowColor: '#888888',
  borderColor: '#CCCCCC',
  borderRadius: 10,
};

export const phoneStyles = createStyleSheet(() => ({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  countryPickerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    height: 45,
    flexDirection: 'row',
    gap: 5,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowStyle,
  },
  phoneInputContainer: {
    backgroundColor: '#FFFFFF',
    width: '78%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    ...shadowStyle,
  },
  input: {
    height: 45,
    width: '100%',
    fontFamily: 'System', // Use default system font
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    ...shadowStyle,
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
}));
