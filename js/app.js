const genButton = document.getElementById('btn');

function loadProfiles() {
    const xhr = new XMLHttpRequest();
    const url = 'https://randomuser.me/api/';

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const profile = JSON.parse(xhr.responseText)
            console.log(profile);

            let output = `
              <img src="${profile.results[0].picture.medium}" class="card-img-top" alt="im fred" id="photo">
            <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-user"></i></span>first name :<span
                  id="first" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].name.first}</span></p>

              <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-user"></i></span>last name
                :<span id="last" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].name.last}</span></p>

              <p class="text-capitalize"><span class="mr-3 text-primary"><i
                    class="fas fa-search-location"></i></span>location
                :<span id="street" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].location.city}</span>
              </p>

              <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-phone"></i></span>phone :<span
                  id="phone" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].phone}</span></p>

              <p class="text-capitalize"><span class="mr-3 text-primary"><i class="fas fa-envelope"></i></span>email
                :<span id="email" class="text-uppercase ml-2 badge badge-secondary single-info">${profile.results[0].email}</span>
              </p>
            `;


            document.querySelector('.card').innerHTML = output;


        }

    }

    xhr.send()

}

genButton.addEventListener("click", loadProfiles)