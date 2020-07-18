<style>
  #header {
    background: url("/bg.JPG") no-repeat center;
    background-size: cover;
  }

  #header::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    animation: background-fade 7s ease;
  }

  .arrow {
    animation: opacity-fade 7s ease;
  }

  @keyframes opacity-fade {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes background-fade {
    0% {
      background-color: rgba(0, 0, 0, 1);
    }
    25% {
      background-color: rgba(0, 0, 0, 1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
</style>

<script>
  import DownArrow from "../components/DownArrow.svelte";
  import {scrollto} from "svelte-scrollto";

  function toggleHud(event) {
    if (event.key !== "d")
      return;

    document.getElementById("hud").classList.toggle("opacity-0")
  }
</script>

<svelte:window on:keydown={toggleHud}/>

<section id="header" class="min-h-screen text-white flex justify-center px-5">
  <div id="hud" class="my-auto flex">
    <a href="#introduction" use:scrollto={'#introduction'} class="arrow my-auto mr-0 invisible w-0 sm:visible sm:w-auto sm:mr-8">
      <DownArrow/>
    </a>
    <div class="pb-1 animate__animated animate__fadeIn">
      <h1 class="text-5xl font-semibold font-fira">CosmicSail</h1>
      <p class="text-lg">
        RC Vehicles brought to the<br/>
        <b>next level.</b>
      </p>
    </div>
  </div>
  <div class="w-2/5"></div>
</section>
