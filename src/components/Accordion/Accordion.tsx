import React, {useState} from 'react';
import {
  CardContainer,
  HeaderContainer,
  HeaderText,
  CollapseContent,
  Box,
  Title,
  ViewTitle,
  Arrow,
} from './styles';
import {Patients} from '../../../App';
import {ScrollView} from 'react-native';
const ArrowRightIcon = require('../../../assets/right.png');
const ArrowDownIcon = require('../../../assets/down.png');

interface IAccordionProps {
  data: Patients[];
}

export const Accordion = ({data}: IAccordionProps) => {
  const [collapsedItems, setCollapsedItems] = useState<number[]>([]);

  const toggleCollapse = (id: number) => {
    setCollapsedItems(prevCollapsedItems => {
      if (prevCollapsedItems.includes(id)) {
        return prevCollapsedItems.filter(item => item !== id);
      } else {
        return [...prevCollapsedItems, id];
      }
    });
  };

  const isCollapsed = (id: number) => collapsedItems.includes(id);

  return (
    <ScrollView style={{width: '100%'}}>
      <ViewTitle>
        <Title>Pacientes</Title>
      </ViewTitle>
      {data.map(item => (
        <CardContainer key={item.id}>
          <HeaderContainer onPress={() => toggleCollapse(item.id)}>
            <HeaderText>{item.name}</HeaderText>
            <Arrow
              source={isCollapsed(item.id) ? ArrowDownIcon : ArrowRightIcon}
            />
          </HeaderContainer>
          {isCollapsed(item.id) && (
            <Box>
              <CollapseContent>
                <HeaderText>Nome: {item.name}</HeaderText>
                <HeaderText>Idade: {item.age}</HeaderText>
              </CollapseContent>
              <CollapseContent>
                <HeaderText>Cidade: {item.city}</HeaderText>
                <HeaderText>Estado: {item.state}</HeaderText>
              </CollapseContent>
            </Box>
          )}
        </CardContainer>
      ))}
    </ScrollView>
  );
};
