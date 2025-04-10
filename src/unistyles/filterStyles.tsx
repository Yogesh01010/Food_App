import { createStyleSheet } from 'react-native-unistyles';

export const filterStyles = createStyleSheet(({ colors }) => ({
  filterBar: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    padding: 6,
    marginRight: 10,
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    elevation: 5,
    shadowColor: colors.lightText,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
}));
