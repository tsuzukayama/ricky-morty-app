import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Character: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Location: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Episode: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
