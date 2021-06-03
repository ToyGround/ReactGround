import React from 'react';
import tw from 'twin.macro';

const TitleContainer = tw.div`bg-blue-400 text-center p-5`;
const Title = tw.h1`font-bold text-3xl text-white`;

function App() {
  return (
    <>
      <TitleContainer>
        <Title>My Pland Components</Title>
      </TitleContainer>
    </>
  );
}

export default App;
