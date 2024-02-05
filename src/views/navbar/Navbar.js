function Navbar() {
  return `<header class="bg-white shadow">
  <div class="container mx-auto px-4 py-2 flex justify-between items-center">
    <h1 class="text-xl font-bold">Instagram</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><button onclick="window.Navigation.navigateTo('home')" class="text-blue-500">Home</button></li>
        <li><button onclick="window.Navigation.navigateTo('profile')" class="text-blue-500">Profile</button></li>
        <li><button onclick="window.Navigation.navigateTo('settings')" class="text-blue-500">Settings</button></li>
      </ul>
    </nav>
  </div>
</header>
`;
}

export default Navbar;
