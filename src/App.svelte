<script>
  import Tailwindcss from './Tailwindcss.svelte'
  import Header from "./sections/Header.svelte";
  import Introduction from "./sections/Introduction.svelte";
  import Features from "./sections/Features.svelte";
  import Control from "./sections/features/Control.svelte";
  import Autopilot from "./sections/features/Autopilot.svelte";
  import Configuration from "./sections/features/Configuration.svelte";
</script>

<Tailwindcss/>
<main class="w-full">
  <Header/>
  <Introduction/>
  <Features/>
  <div>
    <Control/>
    <Autopilot/>
    <Configuration/>
  </div>
</main>
