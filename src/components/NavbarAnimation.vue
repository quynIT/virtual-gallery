<template>
  <div class="mb-20">
    <nav>
      <button type="button" title="Home">
        <span>Home</span>
        <span class="material-symbols-outlined" aria-hidden="true">home</span>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <g>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath">Home</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">Home</textPath>
            </text>
          </g>
        </svg>
      </button>
      <button type="button">
        <span>About</span>
        <span class="material-symbols-outlined" aria-hidden="true">info</span>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <g>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath">About</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">About</textPath>
            </text>
          </g>
        </svg>
      </button>
      <button type="button">
        <span>Services</span>
        <span class="material-symbols-outlined" aria-hidden="true">linked_services</span>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <g>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath">Services</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">Services</textPath>
            </text>
          </g>
        </svg>
      </button>
      <button type="button">
        <span>Contact</span>
        <span class="material-symbols-outlined" aria-hidden="true">email</span>
        <svg viewBox="0 0 300 300">
          <g>
            <text fill="currentColor" aria-hidden="true">
              <textPath xlink:href="#circlePath">Contact</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">Contact</textPath>
            </text>
          </g>
        </svg>
      </button>
      <ButtonLogin />
    </nav>
    <!-- SVG template with dynamic text -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0">
      <defs>
        <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
      </defs>
    </svg>
  </div>
</template>

<script>
import ButtonLogin from './ButtonLogin.vue';
export default {
  components: { ButtonLogin },
  name: 'NavbarAnimation',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* reset button */
button {
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  text-transform: none;
  line-height: normal;
  overflow: visible;
}

body {
  background-color: #ffffff;
  color: white;
  font-size: 1rem;
  font-family: system-ui;
  margin: 0;
  padding: 0;
}
.mb-20 {
    margin-bottom: 9rem !important;
}
nav {
  justify-content: center;
  --_clr-txt: rgb(255, 255, 255);
  --_clr-txt-svg: rgb(147, 158, 184);
  --_ani-speed: 6s; /* speed of rotating text */
  display: flex;
  gap: 4rem;
  height: 100px;
  align-items: center;
  background-color: #010101;
  padding: 0 2rem;
  font-size: 1.4rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

nav > button {
  position: relative;
  display: grid;
  place-content: center;
  grid-template-areas: 'stack';
  padding: 0 1rem;
  text-transform: uppercase;
  font-weight: 300;
}

/* place button items on top of each other */
nav > button > span {
  transition: all 300ms ease-in-out;
  grid-area: stack;
}

/* nav icon */
nav > button > span:last-of-type {
  transform: scale(0);
  transition-delay: 0ms;
  border-radius: 50%;
}

/* hover - hide text */
nav > button:focus-visible > span:first-of-type,
nav > button:hover > span:first-of-type {
  transform: scale(0);
}

/* hover - reveal icon */
nav > button:focus-visible > span:last-of-type,
nav > button:hover > span:last-of-type {
  transform: scale(1);
}

/* nav SVG circular text */
nav > button > svg {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  opacity: 0;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  color: var(--_clr-txt-svg);
}

/* hover - reveal rotating SVG */
nav > button:focus-visible > svg,
nav > button:hover > svg {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  transition-delay: 150ms;
  transition: all 300ms ease-in-out;
}

button svg g {
  transform-origin: center;
  animation: rotate var(--_ani-speed) linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */

/* Tablet screens (up to 768px) */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 2rem;
    height: auto;
    padding: 1rem;
  }
  nav > button > svg {
    width: 100px;
    height: 100px;
  }
}

/* Mobile screens (up to 480px) */
@media (max-width: 480px) {
  nav {
    gap: 1.5rem;
    padding: 0.5rem;
  }
  nav > button {
    padding: 0 0.5rem;
  }
  nav > button > svg {
    width: 100px;
    height: 100px;
  }
  nav > button > span:first-of-type {
    font-size: 0.8rem;
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  nav {
    gap: 0rem;
    padding: 0.5rem;
  }
}
</style>
