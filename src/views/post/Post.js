function Post({ title = "", description = "", auther = "", id }) {
  return `<div class="container mx-auto max-w-lg p-4">
    <!-- Post container -->
    <div class="bg-white rounded-lg shadow-lg">
      <!-- Post header -->
      <div class="flex items-center p-4">
        <img src="palette.png" alt="Profile Picture" class="w-10 h-10 rounded-full">
        <div class="ml-3">
          <h1 class="font-semibold text-base">${auther}</h1>
          <p class="text-gray-500 text-sm">January 30, 2024</p>
        </div>
        <button onclick="deletePost(event)" class="ml-auto" id="${id}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px" ><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </button>
      </div>
      <!-- Post image -->
      <img src="palette.png" alt="Post Image">
      <!-- Post actions -->
      
      <!-- Post caption -->
      <div class="px-4 py-4">
        <h2 class="font-semibold mb-1">${title}</h2>
        <p class="text-gray-600">${description}</p>
      </div>
      <div class="flex items-center justify-between p-4">
        <div class="flex space-x-4">
          <button class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
            <span class="text-gray-500 text-sm">Comments</span>
          </button>
        </div>
      </div>
    </div>
    <script>
    function deletePost(event) {
      fetch('/api/posts/'+event.currentTarget.getAttribute('id'), {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((res) => {
            throw new Error(res.error);
          });
        })
        .then((response) => {
          alert(response.message);
          // window.location.reload();
          window.Navigation.navigateTo('profile')
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    </script>
  </div>`;
}

export default Post;
