import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/Add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortid.generate(),
    },
  };
});

// const addContact = ({ name, number }) => ({
//     type: actionTypes.ADD,
//     payload: {
//         name,
//         number,
//         id: shortid.generate(),
//     },
// });
const deleteContact = createAction("contacts/Delete");

// const deleteContact = (contactId) => ({
//     type: actionTypes.DELETE,
//     payload: contactId,
// });

const filterContact = createAction("contacts/Filter");

// const filterContact = (value) => ({
//     type: actionTypes.FILTER,
//     payload: value,
// });

export default { addContact, deleteContact, filterContact };
