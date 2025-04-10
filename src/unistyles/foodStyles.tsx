import { RFValue } from 'react-native-responsive-fontsize';
import { createStyleSheet } from 'react-native-unistyles';

export const foodStyles = createStyleSheet(({colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  vegIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  animatedCount: {
    fontSize: RFValue(16),
    color: colors.background,
    fontFamily: 'Okra-Bold',
    margin: 0,
  },
  lowOpacity: {
    opacity: 0.5,
    marginTop: 2,
    marginBottom: 10,
  },
  infoContainer: {
    width: '57%',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '40%',
  },
  addToCollectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 5,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  foodImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  customizeText: {
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 5,
    bottom: -10,
  },
  addButtonContainer: (isAdded: boolean) => ({
    width: 120,
    height: 40,
    borderWidth: 0.7,
    borderRadius: 10,
    position: 'absolute',
    bottom: -12,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: colors.primary,
    backgroundColor: isAdded ? colors.primary : colors.active_light,
  }),
  noSelectionContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSmallIcon: {
    position: 'absolute',
    top: -1,
    right: 8,
  },
  selectedContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
}));
