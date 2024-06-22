<script setup lang="ts">
import card from "./components/card.vue";
import detector from "./components/detector.vue";

const hasError: boolean[] = [false, false, false, false];
const isOk: boolean[] = [false, false, false, false];

const icons: {}[] = [
  {
    default: {
      main: "monitor",
      mini: "",
      text: "text-liberty-purple-500",
      textMini: "text-liberty-purple-500",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    isOk: {
      main: "tick",
      mini: "monitor",
      text: "text-white",
      textMini: "text-white",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    fail: {
      main: "caution",
      mini: "monitor",
      text: "text-liberty-red-500",
      textMini: "text-white",
      bg: "bg-liberty-red-500 bg-opacity-10",
      bgMini: "bg-liberty-red-500",
    },
  },
  {
    default: {
      main: "wifi",
      mini: "",
      text: "text-liberty-purple-500",
      textMini: "text-liberty-purple-500",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    isOk: {
      main: "tick",
      mini: "wifi",
      text: "text-white",
      textMini: "text-white",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    fail: {
      main: "caution",
      mini: "wifi",
      text: "text-liberty-red-500",
      textMini: "text-white",
      bg: "bg-liberty-red-500 bg-opacity-10",
      bgMini: "bg-liberty-red-500",
    },
  },
  {
    default: {
      main: "mic",
      mini: "",
      text: "text-liberty-purple-500",
      textMini: "text-liberty-purple-500",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    isOk: {
      main: "tick",
      mini: "mic",
      text: "text-white",
      textMini: "text-white",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    fail: {
      main: "caution",
      mini: "mic",
      text: "text-liberty-red-500",
      textMini: "text-white",
      bg: "bg-liberty-red-500 bg-opacity-10",
      bgMini: "bg-liberty-red-500",
    },
  },
  {
    default: {
      main: "lamp",
      mini: "",
      text: "text-liberty-purple-500",
      textMini: "text-liberty-purple-500",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    isOk: {
      main: "tick",
      mini: "lamp",
      text: "text-white",
      textMini: "text-white",
      bg: "bg-liberty-purple-300",
      bgMini: "bg-liberty-purple-500",
    },
    fail: {
      main: "caution",
      mini: "lamp",
      text: "text-liberty-red-500",
      textMini: "text-white",
      bg: "bg-liberty-red-500 bg-opacity-10",
      bgMini: "bg-liberty-red-500",
    },
  },
];

console.log(icons[0]?.default);
</script>

<template>
  <div class="page">
    <nav>
      <div class="nav-logo">
        <img src="./assets/libertyNG-logo.png" alt="" class="nav-logo__img" />
        <p class="nav-logo__text">
          Frontend developer
          <span> Skill assessment test </span>
        </p>
      </div>
      <div class="nav-details">
        <div class="nav-details__timer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5.33334V8.66668"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99999 14.6667C4.77999 14.6667 2.16666 12.0533 2.16666 8.83333C2.16666 5.61333 4.77999 3 7.99999 3C11.22 3 13.8333 5.61333 13.8333 8.83333"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 1.33334H10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.93332 12.3333V11.56C9.93332 10.6067 10.6133 10.2133 11.44 10.6933L12.1067 11.08L12.7733 11.4667C13.6 11.9467 13.6 12.7267 12.7733 13.2067L12.1067 13.5933L11.44 13.98C10.6133 14.46 9.93332 14.0667 9.93332 13.1133V12.3333Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            29:10
            <span> time left </span>
          </p>
        </div>
        <div class="nav-details__eye">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01667 11.65 7.01667 10C7.01667 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.8917C12.9417 16.8917 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00834 17.5917 7.83334C15.6833 4.83334 12.9417 3.10001 10 3.10001C7.05834 3.10001 4.31667 4.83334 2.40834 7.83334C1.65834 9.00834 1.65834 10.9833 2.40834 12.1583C4.31667 15.1583 7.05834 16.8917 10 16.8917Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
    <main>
      <h1>System check</h1>
      <p class="text">
        We utilize your camera image to ensure fairness for all participants,
        and we also employ both your camera and microphone for a video questions
        where you will be prompted to record a response using your camera or
        webcam, so it's essential to verify that your camera and microphone are
        functioning correctly and that you have a stable internet connection. To
        do this, please position yourself in front of your camera, ensuring that
        your entire face is clearly visible on the screen. This includes your
        forehead, eyes, ears, nose, and lips. You can initiate a 5-second
        recording of yourself by clicking the button below.
      </p>
      <div
        class="screen flex gap-x-[2.125rem] items-center w-[31.5625rem] mt-[1.875rem]"
      >
        <!-- <div class="screen-camera w-[16.5rem] h-[10.5rem] rounded-[.625rem] overflow-hidden border"> -->
        <!-- <div class="screen-camera rounded-[.625rem] border"> -->
        <detector class="rounded-[.625rem]" />
        <!-- </div> -->
        <div class="screen-icons grid grid-cols-2 gap-x-4 gap-y-3 w-[12.375rem]">
          <div
            v-for="(icon, index) in icons"
            :key="index"
          >
            <card
              :hasError="hasError[index]"
              :isOk="isOk[index]"
              :details="
                hasError[index]
                  ? icon?.fail
                  : isOk[index]
                    ? icon?.isOk
                    : icon?.default
              "
              class="text-liberty-purple-500"
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <button class="btn mt-10">Take picture and continue</button>
      </div>
    </main>
    <footer>
      <p class="footer-credit">POWERED BY</p>
      <p class="footer-sponsor">Getlinked.AI</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  @apply relative grid content-start pb-[4.75rem];
}

nav {
  @apply fixed top-0 z-10 w-full bg-white pt-6 pb-3 pad-x flex items-end justify-between shadow-sm;
}

.nav-logo {
  @apply flex items-center gap-x-3;
}

.nav-logo__img {
  @apply h-[3.875rem] w-auto;
}

.nav-logo__text {
  @apply text-[1.25rem] leading-[1.625rem] tracking-[-0.015rem] font-medium text-black grid;
}

.nav-logo__text > span {
  @apply text-[.875rem] leading-[1.125rem] tracking-[-0.015rem] text-liberty-grey-200 mt-[.1875rem];
}

.nav-details {
  @apply flex items-center gap-x-[.625rem];
}

.nav-details__timer {
  @apply nav-details py-[.625rem] px-4 rounded-lg;
}

.nav-details__eye {
  @apply flex items-center justify-center p-[.3125rem] rounded-full;
}

.nav-details__timer,
.nav-details__eye {
  @apply text-liberty-purple-500 bg-liberty-purple-200;
}

.nav-details__timer > p {
  @apply text-[1.125rem] leading-[1.4375rem] font-bold text-liberty-purple-500;
}

.nav-details__timer > p > span {
  @apply text-[.875rem] leading-[1.125rem] font-medium;
}

.pad-x {
  @apply pl-[6.5625rem] pr-[5.375rem];
}

main {
  @apply relative grid content-start mt-[7.625rem] mx-auto bg-white rounded-[1.25rem] pt-9 px-12 pb-11 w-[64%];
}

main > h1 {
  @apply text-black;
}

main > p {
  @apply mt-2;
}

footer {
  @apply relative bottom-0 flex items-center gap-x-2 mt-[6.125rem] pad-x w-full;
}

.footer-credit {
  @apply text-liberty-grey-200 text-[.875rem] leading-[1.125rem] tracking-[-0.015rem];
}

.footer-sponsor {
  @apply text-liberty-grey-800 text-[1.125rem] leading-[1.4375rem] tracking-[-0.015rem] font-medium mt-[3px];
}
</style>
