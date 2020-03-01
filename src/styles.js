import styled from 'styled-components/native';

const blue = '#567ED9';
const darkBlue = '#0A1B43';
const lightBlue = '#A9C1F8';
const grey = '#707070';
const lightGrey = '#BFBFBF';

export const Container = styled.View`
  flex: 1;
  padding: 5%;
  background-color: ${props => (props.isDarkMode ? darkBlue : '#fff')};
`;

export const Title = styled.Text`
  color: ${props => (props.isDarkMode ? lightBlue : blue)};
  font-family: 'Montserrat Bold';
  font-size: 54px;
`;

export const SubTitle = styled.Text`
  max-width: 300px;
  margin: 8px 0 32px;
  color: ${props => (props.isDarkMode ? lightGrey : grey)};
  font-family: 'Montserrat Regular';
  font-size: 20px;
  line-height: 30px;
`;

export const Rodape = styled.Text`
  margin-top: 16px;
  color: ${props => (props.isDarkMode ? '#fff' : grey)};
  text-align: center;
`;
