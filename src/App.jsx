import React from "react";
import styled from "styled-components";
import CardList from "./Components/CardList";

const AppWrapper = styled.div``;

const spiderman = {
  name: "Spiderman",
  imageSource:
    "https://i.pinimg.com/originals/32/92/5e/32925e3718ee000e49c79f06f6c4389e.jpg",
};

const characters = [
  spiderman,
  spiderman,
  spiderman,
  spiderman,
  spiderman,
  spiderman,
  spiderman,
  spiderman,
  spiderman,
];

function App() {
  return (
    <AppWrapper>
      <CardList characters={characters} />
    </AppWrapper>
  );
}

export default App;
