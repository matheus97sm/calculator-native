import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Result,
  SmallText,
  BigText,
  CalculatorKeyboard,
  ButtonWrapper,
  CalcButton,
} from './styles';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberInMemory: [],
      atualTyping: 0,
      total: 0,
    };
  }

  componentDidUpdate(_, prevState) {
    const { atualTyping } = this.state;

    if (prevState.atualTyping !== atualTyping) return this.makeCalc();

    return null;
  }

  addNumber = number => {
    const { atualTyping } = this.state;

    if (atualTyping.length >= 8) return;

    const newNumber = atualTyping !== 0 ? atualTyping + number : number;

    if (number === '.' && String(atualTyping).indexOf('.') !== -1) {
      return;
    }

    this.setState({
      atualTyping: newNumber,
    });
  };

  removeNumber = e => {
    const { atualTyping } = this.state;

    const newNumber =
      atualTyping !== 0 && atualTyping.length > 1
        ? atualTyping.slice(0, atualTyping.length - 1)
        : 0;

    this.setState({
      atualTyping: newNumber,
    });
  };

  addOperator = (expressionSymbol, e) => {
    const { atualTyping, numberInMemory } = this.state;

    if (expressionSymbol === 'c') {
      return this.setState({
        numberInMemory: [],
        atualTyping: 0,
        total: 0,
      });
    }

    if (expressionSymbol === '=') {
      this.setState({
        numberInMemory: [...numberInMemory, atualTyping],
        atualTyping: '',
      });

      return this.makeCalc();
    }

    if (!numberInMemory[0]) {
      return this.setState({
        numberInMemory: [atualTyping, expressionSymbol],
        atualTyping: 0,
      });
    }
    return this.setState({
      numberInMemory: [...numberInMemory, atualTyping, expressionSymbol],
      atualTyping: 0,
    });
  };

  makeCalc = () => {
    const { numberInMemory } = this.state;

    const totalValue = numberInMemory.reduce((total, number, indice, array) => {
      if (!(number * 1)) return total;

      if (array[indice - 1] === '+') return total + +number;
      if (array[indice - 1] === '-') return total - +number;
      if (array[indice - 1] === '÷') return total / +number;
      if (array[indice - 1] === '×') return total * +number;
      if (array[indice - 1] === '%') return (total / 100) * +number;

      return +number;
    }, 0);

    const formatedNumber = Number(`${Math.round(`${totalValue}e2`)}e-2`);

    return this.setState({
      total: formatedNumber,
    });
  };

  render() {
    const { numberInMemory, atualTyping, total } = this.state;
    const { isDarkMode } = this.props;

    return (
      <Container isDarkMode={isDarkMode} style={styles.container}>
        <Result>
          <SmallText>
            {numberInMemory.map(atual => `${atual} `)}
            {atualTyping}
          </SmallText>
          <BigText isDarkMode={isDarkMode}>{total}</BigText>
        </Result>

        <CalculatorKeyboard>
          <ButtonWrapper onPress={e => this.addOperator('c', e)}>
            <CalcButton isDarkMode={isDarkMode} style={styles.cButton}>
              C
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.removeNumber(e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="angle-left" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('%', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="percent" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('÷', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="divide" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('7')}>
            <CalcButton isDarkMode={isDarkMode}>7</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('8')}>
            <CalcButton isDarkMode={isDarkMode}>8</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('9')}>
            <CalcButton isDarkMode={isDarkMode}>9</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('×', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="times" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('4')}>
            <CalcButton isDarkMode={isDarkMode}>4</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('5')}>
            <CalcButton isDarkMode={isDarkMode}>5</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('6')}>
            <CalcButton isDarkMode={isDarkMode}>6</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('+', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="plus" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('1')}>
            <CalcButton isDarkMode={isDarkMode}>1</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('2')}>
            <CalcButton isDarkMode={isDarkMode}>2</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('3')}>
            <CalcButton isDarkMode={isDarkMode}>3</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('-', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="minus" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('0')} zero="zero">
            <CalcButton isDarkMode={isDarkMode}>0</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={() => this.addNumber('.')}>
            <CalcButton isDarkMode={isDarkMode}>.</CalcButton>
          </ButtonWrapper>
          <ButtonWrapper onPress={e => this.addOperator('=', e)}>
            <CalcButton isDarkMode={isDarkMode}>
              <Icon name="equals" size={20} color="#567ED9" />
            </CalcButton>
          </ButtonWrapper>
        </CalculatorKeyboard>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    elevation: 5,
  },
  cButton: {
    color: '#E84A7F',
    fontFamily: 'Montserrat Bold',
  },
});
