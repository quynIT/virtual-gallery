<template>
  <div class="nav-container">
    <button 
      class="hamburger-menu"
      @click="toggleMenu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <nav :class="{ 'menu-open': isMenuOpen }">
      <button type="button" title="Home" onclick="window.location.href='/';">
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
      <button type="button" onclick="window.location.href='https://quynit.vercel.app/';">
        <span>Portfolio</span>
        <span class="material-symbols-outlined" aria-hidden="true">person</span>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <g>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath">Portfolio</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">Portfolio</textPath>
            </text>
          </g>
        </svg>
      </button>
      <button type="button">
        <span>Moment</span>
        <span class="material-symbols-outlined">favorite</span>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <g>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath">Moment</textPath>
            </text>
            <text fill="currentColor">
              <textPath xlink:href="#circlePath" startOffset="50%">Moment</textPath>
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
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #010101;
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

/* Hamburger menu styles */
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: none;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.hamburger-menu.is-active .hamburger-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-menu.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

nav {
  justify-content: center;
  --_clr-txt: rgb(255, 255, 255);
  --_clr-txt-svg: rgb(147, 158, 184);
  --_ani-speed: 6s;
  display: flex;
  gap: 4rem;
  height: 100px;
  align-items: center;
  background-color: #010101;
  padding: 0 2rem;
  font-size: 1.4rem;
  color: white;
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

nav > button > span {
  transition: all 300ms ease-in-out;
  grid-area: stack;
}

nav > button > span:last-of-type {
  transform: scale(0);
  transition-delay: 0ms;
  border-radius: 50%;
}

nav > button:focus-visible > span:first-of-type,
nav > button:hover > span:first-of-type {
  transform: scale(0);
}

nav > button:focus-visible > span:last-of-type,
nav > button:hover > span:last-of-type {
  transform: scale(1);
}

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

nav > button:focus-visible > svg,
nav > button:hover > svg {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  transition-delay: 150ms;
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

/* Mobile and Tablet styles */
@media (max-width: 768px) {
  .nav-container {
    height: 60px; /* Fixed height for mobile header */
  }

  .hamburger-menu {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    padding-top: 60px;
    gap: 2rem;
    background-color: #010101;
  }

  nav.menu-open {
    transform: translateY(0);
  }

  nav > button {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  nav > button > svg {
    width: 100px;
    height: 100px;
  }
}

/* Additional responsive adjustments */
@media (max-width: 480px) {
  nav > button {
    padding: 0.8rem 0;
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