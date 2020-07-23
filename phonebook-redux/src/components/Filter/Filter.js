import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import styles from "../Phonebook.module.css";

const Filter = ({ value, onChange }) => (
  <label className={styles.finder}>
    Finder
    <input
      type="text"
      value={value}
      placeholder="Search for..."
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filterContact(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
