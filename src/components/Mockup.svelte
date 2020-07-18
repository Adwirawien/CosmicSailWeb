<script>
  export let src;
  export let earlyPreview = false;
</script>

<div class="mx-auto sm:mx-10 my-5">
  <img style="height:455px;width:225px;" class="mx-auto sm:mx-10 my-5" {src} alt="mockup"/>
  {#if earlyPreview}
    <p class="text-xs text-gray-500 -mt-4 text-center">Early Development Preview</p>
  {/if}
</div>
