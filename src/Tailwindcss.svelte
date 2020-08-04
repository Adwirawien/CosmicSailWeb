<style global>
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css);

  @tailwind base;
  @tailwind components;

  .font-fira { font-family: 'Fira Code', monospace; }

  @supports (font-variation-settings: normal) {
    .font-fira { font-family: 'Fira Code VF', monospace; }
  }

  ::-moz-selection { /* Code for Firefox */
    color: #ffffff;
    background: #0064e0;
  }

  ::selection {
    color: #ffffff;
    background: #0064e0;
  }

  @tailwind utilities;
</style>
