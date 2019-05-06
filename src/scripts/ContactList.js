import API from "./ContactCollection";
import contactEntry from "./Contact";

const displayAllContacts = {
  doIt: function() {
    API.getAllContacts().then(result => {
      console.log("result:", result);
      result.forEach(result => {
        contactEntry(result);
      });
    });
  }
};

export default displayAllContacts;
