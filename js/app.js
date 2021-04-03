const genButton = document.getElementById('btn');

const photo = document.getElementById('photo');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const street = document.getElementById('street');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

function getData() {
  const xml = new XMLHttpRequest();

  xml.open('GET', 'https://randomuser.me/api', true);

  xml.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.response);
      console.log(response)

      photo.src = response.results[0].picture.large
      firstName.innerHTML = response.results[0].name.first;
      lastName.innerHTML = response.results[0].name.last;
      street.innerHTML = response.results[0].location.street.name;
      phone.innerHTML = response.results[0].phone;
      email.innerHTML = response.results[0].email;

    };
  };
  xml.send()

}

genButton.addEventListener("click", getData)
