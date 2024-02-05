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
    <x-post src="/src/views/post/Post"  auther="amir" title="hello0" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
    ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
    ullamcorper ex pellentesque."></x-post>
    <x-post src="/src/views/post/Post"  auther="amir" title="hello0" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
    ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
    ullamcorper ex pellentesque."></x-post>
    <x-post src="/src/views/post/Post"  auther="amir" title="hello0" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
    ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
    ullamcorper ex pellentesque."></x-post>
    </div>
  </section>
  `;
}

export default Profile;
