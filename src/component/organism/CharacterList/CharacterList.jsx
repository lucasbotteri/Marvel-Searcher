import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useQuery } from "../../../hook";
import { StoreContext } from "../../../store";
import CharacterCard from "../../molecule/CharacterCard";

const CharacterListWrapper = styled.ul`
  box-sizing: border-box;
  display: grid;
  grid-gap: 33px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
  padding: 20px;
  margin: 0;
  width: 100%;
`;

const CharacterListItem = styled.li`
  list-style: none;
`;

const CharacterList = ({ characters }) => {
  const {
    selectCharacter,
    searchCharacterComics,
    saveFav,
    removeFav,
    favs,
  } = useContext(StoreContext);
  const { comic: comicFilter } = useQuery();

  return (
    <CharacterListWrapper>
      {characters.map((c) => (
        <CharacterListItem key={c.id}>
          <CharacterCard
            character={c}
            onClick={() => {
              selectCharacter(c.id, c.name);
              searchCharacterComics(c.id, comicFilter);
            }}
            isFaved={favs && favs.some((f) => f.id === c.id)}
            onFaved={() => saveFav(c)}
            onUnfaved={() => removeFav(c.id)}
          />
        </CharacterListItem>
      ))}
    </CharacterListWrapper>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ).isRequired,
};

export default CharacterList;
