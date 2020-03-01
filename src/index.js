import React from 'react';
import { StatusBar, Text, Linking } from 'react-native';
import { useDarkMode } from 'react-native-dark-mode';
import CodePush from 'react-native-code-push';

import Icon from 'react-native-vector-icons/FontAwesome5';

import './config/ReactotronConfig';

import Calculator from './components/Calculator';

import { Container, Title, SubTitle, Rodape } from './styles';

const App = () => {
  const isDarkMode = useDarkMode();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isDarkMode ? '#07173c' : '#567ED9'}
      />
      <Container isDarkMode={isDarkMode}>
        <Title isDarkMode={isDarkMode}>Open Source Calculator</Title>
        <SubTitle isDarkMode={isDarkMode}>
          An open source calculator developed with React Native. You can access
          the code{' '}
          <Text
            onPress={() =>
              Linking.openURL(
                'https://github.com/matheus97sm/calculator-native'
              )
            }
          >
            here
          </Text>
          .
        </SubTitle>
        <Calculator isDarkMode={isDarkMode} />
        <Rodape
          isDarkMode={isDarkMode}
          onPress={() => Linking.openURL('https://mathdev.com.br')}
        >
          Developed with <Icon name="heart" /> by Math.
        </Rodape>
      </Container>
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.checkFrequency.ON_APP_RESUME,
})();
