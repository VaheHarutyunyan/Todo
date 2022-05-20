import { useState } from "react";

export function useModal() {
  const [modal, setModal] = useState({
    edit: false,
    editSave: false,
    delete: false,
  });
  const handleClickEdit = () =>
    setModal({
      edit: !modal.edit,
    });
    const handleClickEditSave = () =>
      setModal({
        editSave: !modal.editSave,
      });
  const handleClickDelete = () =>
    setModal({
      delete: !modal.delete,
    });

  return { modal, handleClickEdit, handleClickDelete, handleClickEditSave };
}
