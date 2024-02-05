function Home() {
  var variable = "say hello world";
  return `
  <x-navbar src="/src/views/navbar/Navbar"></x-navbar>
  <!-- Main Content -->
  <section class="container mx-auto px-4 py-8">
    <!-- Posts -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <x-post src="/src/views/post/Post"  auther="amir" title="hello0" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
      ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
      ullamcorper ex pellentesque."></x-post>
      <x-post src="/src/views/post/Post" auther="amir" title="hello1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
      ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
      ullamcorper ex pellentesque."></x-post>
      <x-post src="/src/views/post/Post" title="hello2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus
      ullamcorper, hendrerit sem nec, dictum nulla. Integer efficitur risus ac enim consectetur, in
      ullamcorper ex pellentesque." auther="amir"></x-post>
    </div>
  </section>
  `;
}

export default Home;
