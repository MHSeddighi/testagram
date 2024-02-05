
function Profile() {
  return `<x-navbar src="/src/views/navbar/Navbar"></x-navbar>
  <!-- Profile Section -->
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="flex items-center">
        <img
          src="palette.png"
          class="w-20 h-20 rounded-full"
          alt="Profile Picture"
        />
        <div class="ml-4">
          <h2 class="text-2xl font-semibold">John Doe</h2>
          <p class="text-gray-600">@johndoe</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Main Content -->
  <section class="container mx-auto px-4 py-8">
    <!-- Posts -->
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4">
        <img src="palette.png" class="w-full" alt="Post" />
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <img src="palette.png" class="w-full" alt="Post" />
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <img src="palette.png" class="w-full" alt="Post" />
      </div>
    </div>
  </section>
  `;
}

export default Profile;
