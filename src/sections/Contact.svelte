<style>
  #contact {
    background: url("/contact.JPG") no-repeat center;
    background-size: cover;
  }

  #contact::before {
    content: "";
    position: absolute;
    min-height: 100vh;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
</style>

<section id="contact" class="min-h-screen flex justify-center text-gray-300 font-fira">
  <div class="p-5 py-10 my-auto max-w-md" style="z-index: 10">
    <h1 class="font-semibold mb-4">
      <ion-icon class="text-xl -mb-1" name="file-tray-full"></ion-icon>
      Contact
    </h1>
    Currently we are in an early stage of development,
    but feel free to contact us via email if you want to be an early tester.<br/><br/>

    <a href="mailto:adrian@cosmicsail.online">adrian@cosmicsail.online</a>
  </div>
</section>
