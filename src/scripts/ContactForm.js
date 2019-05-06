import API from "./ContactCollection";

const captureInput = () => {
  let submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", () => {
    const inputName = document.querySelector("#name").value;
    const inputPhone = document.querySelector("#phone").value;
    const inputAddress = document.querySelector("#address").value;

    const newEntry = {
      id: "",
      name: inputName,
      phone: inputPhone,
      address: inputAddress
    };
    API.saveContact(newEntry);
  });
};
export default captureInput;
