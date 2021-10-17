import './App.css';
import ContactForm from './Component/ContactForm/ContactForm';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';

export default function App() {
  return (
    <>
      <div className="Input-form">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2 className="SearchName">Contact</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
