import {StyleSheet} from 'react-native';

export const tabStyles = StyleSheet.create({
  tabContainer: {
    width: 300, // Approx. 82% of a standard 360–400px screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  tabBarContainer: {
    width: '100%',
    position: 'absolute',
    height: 60, // Static height replacing BOTTOM_TAB_HEIGHT
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 11,
    shadowColor: '#000',
    bottom: 0,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verticalLine: {
    marginHorizontal: 10,
    height: '60%',
    width: 1,
    position: 'absolute',
    left: '55%',
    borderRadius: 20,
    opacity: 0.2,
    backgroundColor: '#999',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  focusedTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#000', // Using black as primary color placeholder
  },
  slidingIndicator: {
    position: 'absolute',
    top: 0,
    height: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '15%',
    backgroundColor: '#000',
  },
  groceryLogoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '12%',
    overflow: 'hidden',
    backgroundColor: '#F7CB46',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  groceryLogo: {
    width: '100%',
    height: 26,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: 10,
    color: '#B3B3B3',
  },
  focusedTabLabel: {
    color: '#fff',
  },
});
