function NewPost() {
  return `<div class="px-10 py-10"> 
    <h1 class="text-2xl font-bold mb-4">Create New Post</h1>

    <form id="postForm" enctype="multipart/form-data" onsubmit="addNewPost(event)">
      <div class="mb-4">
        <label for="caption" class="block">Caption:</label>
        <input type="text" id="caption" name="caption" class="w-full border border-gray-300 rounded p-2" required>
      </div>
  
      <div class="mb-4">
        <label for="description" class="block">Description:</label>
        <textarea id="description" name="description" class="w-full border border-gray-300 rounded p-2" required></textarea>
      </div>
  
      <div class="mb-4">
        <label for="cover_image" class="block">Cover Image:</label>
        <input type="file" id="cover_image" name="cover_image" accept="image/*" required>
      </div>
  
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Post</button>
    </form>
  
    <script>
    function addNewPost(event) {
        event.preventDefault(); // Prevent form submission
        const formData = new FormData(event.target);
        const userData = localStorage.getItem('userData');
        const parsedData = JSON.parse(userData);
        formData.append('userId',parsedData['_id']);
        fetch('/api/posts', {
          method: 'POST',
          body: new URLSearchParams(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json().then((res)=>{
                throw new Error(res.error)
            });
        })
        .then(response => {
            alert('Post created successfully!');
            window.Navigation.navigateTo('profile')
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
      }
    </script>
    </div>`;
}

export default NewPost;
