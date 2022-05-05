import React, {useState} from "react";
import InputCheckbox from "./TodoCheckbox";

const TodoList = ({
  searchQueryData,
  onDeleteItem,
  onEditItem,
  onChangeChecked,
}) => {
  const [isDelete, setIsDelete] = useState({show: false, id: ""});
  return (
    <div>
      {isDelete.show && (
        <div>
          <h6>Are you sure you wont to delete</h6>
          <button
            onClick={() => {
              onDeleteItem(isDelete.id);
              setIsDelete({show: false});
            }}
          >
            Yes
          </button>
          <button onClick={() => setIsDelete(isDelete.show)}>No</button>
        </div>
      )}
      <ul>
        {searchQueryData.map(item => {
          return (
            <React.Fragment key={item.id}>
              <li>
                <div>
                  <span>
                    <InputCheckbox
                      todo={item}
                      onChangeChecked={onChangeChecked}
                    />
                  </span>
                  <span>{item.title}</span>
                  <span>
                    <button onClick={() => onEditItem(item)}>Edit</button>
                    <button
                      onClick={() => setIsDelete({show: true, id: item.id})}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
