import React, { createContext, useContext } from "react";
import { useModal } from "../../hook/useModal";

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const TodoModalProvider = ({ children }) => {
  const { modal, handleClickEdit, handleClickDelete, handleClickEditSave } =
    useModal();
  return (
    <ModalContext.Provider
      value={{ modal, handleClickEdit, handleClickDelete, handleClickEditSave }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default TodoModalProvider;
