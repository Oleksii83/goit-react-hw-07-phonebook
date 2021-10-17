import axios from 'axios';
import shortid from 'shortid';

axios.defaults.baseURL = 'http://localhost:4040/contacts';

export async function addContacts(name, number) {
  const contact = {
    id: shortid.generate(),
    name,
    number,
  };
}
