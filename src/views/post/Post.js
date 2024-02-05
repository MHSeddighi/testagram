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
                d="M4.293 10.293a1 1 0 0 1 1.414 0l4.243 4.243 9.899-9.9a1 1 0 1 1 1.414 1.414l-10.6 10.6a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 0 1 0-1.414z" />
            </svg>
            <span class="text-gray-500 text-sm">Like</span>
          </button>
          <button class="flex items-center space-x-2">
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.572c-4.337 0-7.857-3.52-7.857-7.857S7.663 4.857 12 4.857 19.857 8.377 19.857 12 16.337 19.857 12 19.857zm-.714-9.286v4.428H9.715v-1.714h1.929v-2c0-1.066.86-1.929 1.929-1.929h2v1.714h-2c-.475 0-.857.382-.857.857v2h2.571v1.714h-2.571z" />
            </svg>
            <span class="text-gray-500 text-sm">Comment</span>
          </button>
          <button class="flex items-center space-x-2">
            <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 2.63.99 5.02 2.599 6.859L12 22l7.401-3.141C21.01 17.019 22 14.63 22 12c0-5.523-4.477-10-10-10zm0 18.572L5.028 14.2C3.882 12.89 3.143 10.99 3.143 12c0 3.304 2.693 5.997 5.997 5.997s5.997-2.693 5.997-5.997c0-1.01-.739-2.11-1.885-3.428L12 20.572z" />
            </svg>
            <span class="textApologies for the incomplete response. Here's the continuation of the HTML structure for the Instagram home page posts using Tailwind CSS:

            -gray-500 text-sm">Share</span>
          </button>
        </div>
        <button class="flex items-center space-x-2">
          <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path
              d="M12 22a2.97 2.97 0 0 0 2.816-2H9.184A2.97 2.97 0 0 0 12 22zm6-6V10a6 6 0 1 0-12 0v6a8 8 0 1 0 8 8 8 8 0 0 0 8-8zM4 10v6a4 4 0 0 1 8 0v-6a2 2 0 1 0-4 0zm12 0v6a4 4 0 0 1 8 0v-6a2 2 0 1 0-4 0z" />
          </svg>
          <span class="text-gray-500 text-sm">Save</span>
        </button>
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
