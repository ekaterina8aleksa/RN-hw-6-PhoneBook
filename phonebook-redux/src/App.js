import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <ContactForm />

    <Filter />

    <h3>Contacts</h3>

    <ContactList />
  </>
);
export default App;
