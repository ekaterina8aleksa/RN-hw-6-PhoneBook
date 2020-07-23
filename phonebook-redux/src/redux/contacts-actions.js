import actionTypes from "./contacts-types";
import shortid from "shortid";

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
});

const deleteContact = (contactId) => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const filterContact = (value) => ({
  type: actionTypes.FILTER,
  payload: value,
});

export default { addContact, deleteContact, filterContact };
