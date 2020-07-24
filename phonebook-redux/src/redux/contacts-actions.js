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

const deleteContact = createAction("contacts/Delete");

const filterContact = createAction("contacts/Filter");

export default { addContact, deleteContact, filterContact };
