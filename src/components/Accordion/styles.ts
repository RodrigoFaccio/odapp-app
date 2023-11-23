import styled from 'styled-components/native';

export const CardContainer = styled.View`
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #228da6;
  width: 90%;
`;

export const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  width: 100%;
`;

export const HeaderText = styled.Text`
  padding: 10px;
  font-size: 16px;
`;

export const CollapseContent = styled.View`
  margin-top: 10px;
`;
export const Box = styled.View`
  justify-content: space-between;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #228da6;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const ViewTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #228da6;
`;
export const Arrow = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
