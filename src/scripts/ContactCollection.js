const baseURL = "http://localhost:8088";

const API = {
  getAllContacts: function() {
    return fetch(`${baseURL}/entries`).then(response => response.json());
  },
  getOneContact: function(contactId) {
    return fetch(`${baseURL}/entries/${contactId}`).then(response =>
      response.json()
    );
  },
  saveContact: function(newEntry) {
    return fetch(`${baseURL}/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    })
      .then(response => response.json())
      .then(console.log(response));
  }
};

export default API;
