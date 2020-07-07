import React, { useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";
import * as actions from "./actions";

const INITAL_STATE = {
  characters: [],
  characterSelected: {},
  comics: [],
};

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE);
  const value = {
    ...state,
    searchCharacter: useCallback(
      (characterName) => actions.searchCharacter(dispatch, characterName),
      []
    ),
    searchRandomCharacter: useCallback(
      () => actions.searchRandomCharacter(dispatch),
      []
    ),
    selectCharacter: useCallback(
      (id, name) => actions.selectCharacter(dispatch, id, name),
      []
    ),
    hideModal: useCallback(() => dispatch(actions.hideModal()), []),
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
