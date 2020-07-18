<style>
  #features {
    background: url("/features.JPG") no-repeat center;
    background-size: cover;
  }

  #features::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }

  li:before {
    content: "–";
    padding-right: 8px;
  }

  @media screen and (max-width: 500px) {
    li:before {
      content: "·";
      padding-right: 2px;
    }
  }
</style>

<section id="features" class="min-h-screen flex justify-center text-gray-300 font-fira">
  <div class="p-5 py-10 my-auto max-w-md" style="z-index: 10">
    <h1 class="font-semibold mb-4">
      <ion-icon class="text-xl -mb-1" name="navigate-circle"></ion-icon>
      What can CosmicSail do?
    </h1>
    <ul class="text-sm">
      <li>remote control from your mobile phone</li>
      <li>drive or sail your boat automatically</li>
      <li>be configured for any boat setup</li>
      <li>save your trips for future analysis</li>
    </ul>
  </div>
</section>
