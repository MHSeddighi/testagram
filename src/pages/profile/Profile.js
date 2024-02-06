function Profile() {
  setTimeout(() => {
    const userData = localStorage.getItem("userData");
    const user = JSON.parse(userData);
    const profileContianer = document.querySelector('#user-profile');
    profileContianer.insertAdjacentHTML('afterbegin',`
        <img
          src="${user?.photo ?? 'palette.png'}"
          class="w-20 h-20 rounded-full"
          alt="Profile Picture"
        />
        <div class="ml-4">
          <h2 class="text-2xl font-semibold">${user.username}</h2>
          <p class="text-gray-600">${user.email}</p>
          <p class="text-gray-600">${user.bio}</p>
        </div>
    `);
    
    fetch("api/users/" + user["_id"] + "/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((res) => {
          throw new Error(res.error);
        });
      })
      .then((response) => {
        const postContainer = document.querySelector("#posts");
        if (postContainer) {
          response.posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `<x-post src="/src/views/post/Post"  auther="123" id="${post._id}" title="${post.caption}" description="${post.description}"></x-post>`;
            postContainer.appendChild(postElement);
            window.Navigation.renderComponent(
              postElement.querySelector("x-post")
            );
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }, 500);
  return `
  <x-navbar src="/src/views/navbar/Navbar"></x-navbar>
  <!-- Profile Section -->
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="flex items-center" id="user-profile">
      <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onclick="window.Navigation.navigateTo('new-post')">Add New Post</button>
      </div>
    </div>
  </section>
  
  <!-- Main Content -->
  <section class="container mx-auto px-4 py-8">
    <!-- Posts -->
    <div id="posts" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
    </div>
  </section>`;
}

export default Profile;
