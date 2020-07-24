import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import styles from "../Phonebook.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 && (
        <ul className={styles.list}>
          {contacts.map(({ name, number, id }) => (
            <li key={id} className={styles.item}>
              <ContactItem
                id={id}
                number={number}
                name={name}
                onDelete={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const getFilteredContacts = (allContacts, filter) => {
  const preparedContacts = filter.trim().toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.trim().toLowerCase().includes(preparedContacts)
  );
};

// const mapStateToProps = (state) => {
//     const { filter, items } = this.state;
//     const visibleContacts = getFilteredContacts(items, filter)

//     return { contacts: visibleContacts };
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
