<script>
  import Tailwindcss from './Tailwindcss.svelte'
  import Header from "./sections/Header.svelte";
  import Introduction from "./sections/Introduction.svelte";
  import Features from "./sections/Features.svelte";
  import Control from "./sections/features/Control.svelte";
</script>

<Tailwindcss/>
<main class="w-full">
  <Header/>
  <Introduction/>
  <Features/>
  <div>
    <Control/>
  </div>
</main>
