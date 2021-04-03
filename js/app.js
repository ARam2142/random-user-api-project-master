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


// let output = `
//             <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-user"></i></span>first name :<span
//                   id="first" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].name.first}</span></p>

//               <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-user"></i></span>last name
//                 :<span id="last" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].name.last}</span></p>

//               <p class="text-capitalize"><span class="mr-3 text-primary"><i
//                     class="fas fa-search-location"></i></span>location
//                 :<span id="street" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].location.city}</span>
//               </p>

//               <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-phone"></i></span>phone :<span
//                   id="phone" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].phone}</span></p>

//               <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-envelope"></i></span>email
//                 :<span id="email" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].email}</span>
//               </p>
//             `;