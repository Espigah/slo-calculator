<script>
  // import Form from './Form.svelte';
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<main>
  <Navbar />
  <Header />
  <Main />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
