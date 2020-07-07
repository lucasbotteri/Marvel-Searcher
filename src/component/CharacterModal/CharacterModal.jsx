import React, { useContext } from "react";
import Modal from "../Modal";
import { StoreContext } from "../../store";
import ComicList from "../ComicList";

const CharacterModal = () => {
  const {
    isShowingModal,
    characterSelected,
    comics,
    hideModal,
    isLoadingComics,
  } = useContext(StoreContext);
  return (
    <Modal
      isShowing={isShowingModal}
      title={characterSelected.name}
      onClose={hideModal}
    >
      {isLoadingComics ? "Loading comics..." : <ComicList comics={comics} />}
    </Modal>
  );
};

export default CharacterModal;
