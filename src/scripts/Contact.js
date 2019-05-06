const contactEntry = entry => {
  let publishHere = document.querySelector(".output");
  publishHere.innerHTML += `
    <div id=${entry.id}>
        <h3>${entry.name}</h3>
        <p>Phone: ${entry.phone}</p>
        <p>Address: ${entry.address}</p>
    </div>`;
};
export default contactEntry;
