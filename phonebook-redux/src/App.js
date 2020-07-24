import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactForm
          onSubmit={this.formListener}
          onAddContact={this.addContact}
        />
        <Filter />

        <h3>Contacts</h3>

        <ContactList />
      </>
    );
  }
}
export default App;
