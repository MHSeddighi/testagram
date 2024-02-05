import Navigation from "@core/router/Navigation";

function Register() {
  return `<div class="container mx-auto w-full">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
    <h2 class="text-2xl text-center mb-6">Sign Up</h2>
    <form id="signupForm" onsubmit="register(event)">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"
          >Full Name</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          type="text"
          placeholder="Full Name"
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
    const form = new FormData(event.target)
    const username = form.get("username");
    const password = form.get("password");
    const email = form.get("email");

    fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username,password})
  })
  .then(response => {
    if (response.ok) {
      alert('Register successful!');
      Navigation.navigateTo('home');
      form.reset();
    } else {
      alert('Invalid username or password!');
    }
  })
  .catch(error => {
    console.error('Register failed:', error);
  });
  }
</script>
`;
}

export default Register;
