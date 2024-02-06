import Navigation from "@core/router/Navigation";

function Register() {
  return `<div class="container mx-auto w-full">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
    <h2 class="text-2xl text-center mb-6">Sign Up</h2>
    <form id="signupForm" onsubmit="register(event)">
      <div class="mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="photo"
            >Photo</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            name="photo"
            type="file"
            placeholder="photo"
          />
        </div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"
          >User Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          type="text"
          placeholder="User Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="*********"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bio"
          >Bio</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bio"
          name="bio"
          type="text"
          placeholder="Bio"
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
<script>
  function register(event) {
    event.preventDefault();
    const data = new URLSearchParams(new FormData(event.target));
    const form = new FormData(event.target)
    const username = form.get("username");
    const password = form.get("password");
    const email = form.get("email");

    fetch('api/auth/register', {
    method: 'POST',
    body: data
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((res)=>{
      throw new Error(res.error)
    });
  }).then(response=>{
    const userDataString = JSON.stringify(response.userData);
    localStorage.setItem('userData', userDataString);
    alert(response.message);
    Navigation.navigateTo('home');
  })
  .catch(err => {
    alert(err);
  });
  }
</script>
`;
}

export default Register;
