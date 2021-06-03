import React from 'react';
import tw from 'twin.macro';
import {Link} from 'react-router-dom';

type ComponentsType = {
  id: number;
  title: string;
  link: string
}

const COMPONENTS_LIST: ComponentsType[] = [
  {
    id   : 1,
    title: 'Header Component',
    link : '/components/header'
  },
];

const TitleContainer = tw.div`bg-blue-400 text-center p-5`;
const Title = tw.h1`font-bold text-3xl text-white`;
const List = tw.ul`m-5 p-5`;
const ListItem = tw(Link)`text-xl hover:underline hover:text-blue-400`;

export default function MainPage() {
  return (
    <>
      <TitleContainer>
        <Title>My Pland Components</Title>
      </TitleContainer>
      <List>
        {COMPONENTS_LIST.map(item => <ListItem key={item.id} to={item.link}>{item.title}</ListItem>)}
      </List>
    </>
  );
}