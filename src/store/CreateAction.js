import data from "../data/data";
const initialState = data;

const CreateAction = ({ state = initialState, action }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CreateAction;
