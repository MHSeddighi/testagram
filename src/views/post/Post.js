function Post({ title = "", description = "", auther = "" }) {
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
      </div>
      <!-- Post image -->
      <img src="palette.png" alt="Post Image">
      <!-- Post actions -->
      <div class="flex items-center justify-between p-4">
        <div class="flex space-x-4">
          <button class="flex items-center space-x-2">
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.572c-4.337 0-7.857-3.52-7.857-7.857S7.663 4.857 12 4.857 19.857 8.377 19.857 12 16.337 19.857 12 19.857zm-.714-9.286v4.428H9.715v-1.714h1.929v-2c0-1.066.86-1.929 1.929-1.929h2v1.714h-2c-.475 0-.857.382-.857.857v2h2.571v1.714h-2.571z" />
            </svg>
            <span class="text-gray-500 text-sm">Comment</span>
          </button>
        </div>
      </div>
      <!-- Post caption -->
      <div class="px-4 pb-4">
        <h2 class="font-semibold mb-1">${title}</h2>
        <p class="text-gray-600">${description}</p>
      </div>
    </div>
  </div>`;
}

export default Post;
