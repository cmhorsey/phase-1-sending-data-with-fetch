function submitData(name, email) {

  const userData = {
    name: `${name}`,
    email: `${email}`,
  }

  return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(appendUserId)
    .catch(appendError)
}

function appendUserId(userData) {
  const body = document.querySelector('body');
  body.innerHTML = userData.id
}

function appendError() {
  const body = document.querySelector('body');
  body.innerHTML = 'Unauthorized Access'
}
