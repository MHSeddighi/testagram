import Navigation from "@core/router/Navigation";

function Login() {
  return `
  <div class="container mx-auto w-full p-4">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 class="text-2xl text-center mb-6">Login</h2>
    <form id="loginForm" onsubmit="login(event)">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 " for="username"
          >Username</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
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
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</div>
<script type="text/javascript">
  function login(event) {
    event.preventDefault();
    const form = new FormData(event.target)
    const username = form.get("username");
    const password = form.get("password");

    fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username,password})
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((res)=>{
      throw new Error(res.error)
    });
  }).then(response=>{
    const userDataString = JSON.stringify({username,password});
    localStorage.setItem('userData', userDataString);
    alert(response.message);
    Navigation.navigateTo('profile');
  })
  .catch(err => {
    alert(err);
  });
  }
</script>
`;
}

export default Login;
