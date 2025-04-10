import {StyleSheet} from 'react-native';

export const restaurantStyles = StyleSheet.create({
  listContainer: {
    paddingBottom: 300,
  },
  shadowBottom: {
    shadowOffset: {width: 1, height: 18},
    shadowOpacity: 0.08,
    elevation: 5,
    shadowRadius: 10,
    shadowColor: '#000',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 25,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 10,
    shadowColor: '#000',
    margin: 10,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  name: {
    marginBottom: 5,
  },
  details: {
    opacity: 0.7,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPart: {
    width: '70%',
  },
  backToTopButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  },
});
