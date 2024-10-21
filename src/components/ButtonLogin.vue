<template>
    <div>
<button class="shiny-cta">
      <span class="material-symbols-outlined">library_add</span>
      <span class="ml-2" onclick="window.location.href='/add-image';">Add Image</span>
</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YourComponentName',
    // Your component logic here
  }
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&display=swap");
  
  :root {
    --shiny-cta-bg: #000000;
    --shiny-cta-bg-subtle: #1a1818;
    --shiny-cta-fg: #ffffff;
    --shiny-cta-highlight: #f25f4c;
    --shiny-cta-highlight-subtle: #8484ff;
    --hover-glow-color: #f25f4c; /* Màu xanh dương cho ánh sáng viền */
  }
  
  .shiny-cta {
    --animation: gradient-angle linear infinite;
    --duration: 3s;
    --shadow-size: 2px;
    isolation: isolate;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline-offset: 4px;
    padding: 1.25rem 2.5rem;
    font-family: inherit;
    font-size: 1.125rem;
    line-height: 1.2;
    border: 1px solid transparent;
    border-radius: 360px;
    color: var(--shiny-cta-fg);
    background: linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
      conic-gradient(
        from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
        transparent,
        var(--shiny-cta-highlight) var(--gradient-percent),
        var(--gradient-shine) calc(var(--gradient-percent) * 2),
        var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
        transparent calc(var(--gradient-percent) * 4)
      ) border-box;
    box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
    transition: 0.4s;
  }
  
  /* Hiệu ứng phát sáng viền khi hover */
  .shiny-cta:hover {
    box-shadow: 0 0 20px 5px var(--hover-glow-color), /* Ánh sáng xanh bên ngoài viền */
                inset 0 0 0 1px var(--shiny-cta-bg-subtle);
  }
  
  .shiny-cta::before,
  .shiny-cta::after,
  span::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
    z-index: -1;
  }
  
  .shiny-cta:active {
    translate: 0 1px;
  }
  
  /* Dots pattern */
  .shiny-cta::before {
    /* --size: calc(100% - var(--shadow-size) * 3);
    --position: 2px;
    --space: calc(var(--position) * 2);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(
        circle at var(--position) var(--position),
        white calc(var(--position) / 4),
        transparent 0
      )
      padding-box;
    background-size: var(--space) var(--space);
    background-repeat: space;
    -webkit-mask-image: conic-gradient(
      from calc(var(--gradient-angle) + 45deg),
      black,
      transparent 10% 90%,
      black
    );
    mask-image: conic-gradient(
      from calc(var(--gradient-angle) + 45deg),
      black,
      transparent 10% 90%,
      black
    );
    border-radius: inherit; */
    opacity: 0;
    z-index: -1;
  }
  
  /* Inner shimmer */
  .shiny-cta::after {
    --animation: shimmer linear infinite;
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(
      -50deg,
      transparent,
      var(--shiny-cta-highlight),
      transparent
    );
    -webkit-mask-image: radial-gradient(circle at bottom, transparent 40%, black);
    mask-image: radial-gradient(circle at bottom, transparent 40%, black);
    opacity: 0.6;
  }
  
  .shiny-cta span::before {
    --size: calc(100% + 1rem);
    width: var(--size);
    height: var(--size);
    box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
    opacity: 0;
  }
  
  /* Animate */
  .shiny-cta {
    --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);
    transition: var(--transition);
    transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
  
    animation: gradient-angle 3s linear infinite;
  }
  button.shiny-cta {
    margin-right: -1000px;
    margin-left: 100px;
}
  
  .shiny-cta::after {
    animation: shimmer 3s linear infinite;
  }
  
  @-webkit-keyframes gradient-angle {
    to {
      --gradient-angle: 360deg;
    }
  }
  
  @keyframes gradient-angle {
    to {
      --gradient-angle: 360deg;
    }
  }
  
  @-webkit-keyframes shimmer {
    to {
      rotate: 360deg;
    }
  }
  
  @keyframes shimmer {
    to {
      rotate: 360deg;
    }
  }
  
  @-webkit-keyframes breathe {
    from,
    to {
      scale: 1;
    }
    50% {
      scale: 1.2;
    }
  }
  
  @keyframes breathe {
    from,
    to {
      scale: 1;
    }
    50% {
      scale: 1.2;
    }
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    display: grid;
    place-items: center;
    color: white;
    background: #ffffff;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }
  @media (max-width: 768px) {
    button.shiny-cta{
      margin: 0;
    }
}
button.shiny-cta {
  display: inline-flex; 
  align-items: center;  
}

.material-symbols-outlined {
  font-size: 24px; 
}

  </style>
  