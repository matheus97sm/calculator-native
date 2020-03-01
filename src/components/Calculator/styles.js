import styled from 'styled-components/native';

const blue = '#567ED9';
const darkBlue = '#031339';
const grey = '#707070';
const lightGrey = '#ABABAB';
const pink = '#E84A7F';

export const Container = styled.View`
  padding: 16px;
  justify-content: flex-start;
  background-color: ${props => (props.isDarkMode ? darkBlue : '#fff')};
  border-radius: 32px;
`;

export const Result = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${lightGrey};
`;

export const SmallText = styled.Text`
  color: ${lightGrey};
  font-family: 'Montserrat Regular';
  font-size: 16px;
  text-align: right;
`;

export const BigText = styled.Text`
  color: ${props => (props.isDarkMode ? '#fff' : grey)};
  font-family: 'Montserrat Regular';
  font-size: 52px;
  text-align: right;
`;

export const CalculatorKeyboard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.TouchableHighlight.attrs({
  underlayColor: '#567ED944',
})`
  width: ${props => (props.zero ? '50%' : '25%')};
  padding: 16px 0;
  align-items: center;
  justify-content: center;
`;

export const CalcButton = styled.Text`
  color: ${props => (props.isDarkMode ? '#fff' : grey)};
  font-family: 'Montserrat Regular';
  font-size: 28px;
  font-weight: ${props => (props.cButton ? 'bold' : 'normal')};
`;
