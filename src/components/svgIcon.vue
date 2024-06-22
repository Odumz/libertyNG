<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SvgIcon",
});
</script>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  iconName: String;
}>();

const { iconName } = toRefs(props);
</script>

<template>
  <svg
    v-if="iconName == 'tick'"
    width="15"
    height="11"
    viewBox="0 0 15 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.54748 10.4225C5.27248 10.4225 5.01123 10.3125 4.81873 10.12L0.92748 6.22876C0.52873 5.83001 0.52873 5.17001 0.92748 4.77126C1.32623 4.37251 1.98623 4.37251 2.38498 4.77126L5.54748 7.93376L12.615 0.866262C13.0137 0.467512 13.6737 0.467512 14.0725 0.866262C14.4712 1.26501 14.4712 1.92501 14.0725 2.32376L6.27623 10.12C6.08373 10.3125 5.82248 10.4225 5.54748 10.4225Z"
      fill="white"
    />
  </svg>
  <svg
    v-else-if="iconName == 'eye'"
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
  <svg
    v-else-if="iconName == 'lamp'"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99998 5.9175L8.19748 7.3125C8.01748 7.62 8.16748 7.875 8.51998 7.875H9.47248C9.83248 7.875 9.97498 8.13 9.79498 8.4375L8.99998 9.8325"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.22502 13.53V12.66C4.50002 11.6175 3.08252 9.585 3.08252 7.425C3.08252 3.7125 6.49502 0.802502 10.35 1.6425C12.045 2.0175 13.53 3.1425 14.3025 4.695C15.87 7.845 14.22 11.19 11.7975 12.6525V13.5225C11.7975 13.74 11.88 14.2425 11.0775 14.2425H6.94502C6.12002 14.25 6.22502 13.9275 6.22502 13.53Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.375 16.5C8.0925 16.0125 9.9075 16.0125 11.625 16.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="iconName == 'monitor'"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 8.9175V9.585C16.5 12.255 15.8325 12.915 13.17 12.915H4.83C2.1675 12.915 1.5 12.2475 1.5 9.585V4.83C1.5 2.1675 2.1675 1.5 4.83 1.5H6"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 12.915V16.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.5 9.75H16.5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.625 16.5H12.375"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.395 7.0275H9.82501C8.79001 7.0275 8.44501 6.3375 8.44501 5.6475V3.0075C8.44501 2.1825 9.12001 1.5075 9.94501 1.5075H13.395C14.16 1.5075 14.775 2.1225 14.775 2.8875V5.6475C14.775 6.4125 14.16 7.0275 13.395 7.0275Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.6825 5.94L14.775 5.3025V3.2325L15.6825 2.595C16.1325 2.2875 16.5 2.475 16.5 3.0225V5.52C16.5 6.0675 16.1325 6.255 15.6825 5.94Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="iconName == 'timer'"
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
  <svg
    v-else-if="iconName == 'wifi'"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.6825 8.88C6.9075 6.39 11.1 6.39 14.325 8.88"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.5 6.26998C6.045 2.75998 11.955 2.75998 16.5 6.26998"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.09247 11.6175C7.45497 9.7875 10.5375 9.7875 12.9 11.6175"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.04999 14.3625C8.23499 13.4475 9.77249 13.4475 10.9575 14.3625"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="iconName == 'caution'"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 11.0625C8.6925 11.0625 8.4375 10.8075 8.4375 10.5V6.75C8.4375 6.4425 8.6925 6.1875 9 6.1875C9.3075 6.1875 9.5625 6.4425 9.5625 6.75V10.5C9.5625 10.8075 9.3075 11.0625 9 11.0625Z"
      fill="currentColor"
    />
    <path
      d="M9 13.5C8.955 13.5 8.9025 13.4925 8.85 13.485C8.805 13.4775 8.76 13.4625 8.715 13.44C8.67 13.425 8.625 13.4025 8.58 13.3725C8.5425 13.3425 8.505 13.3125 8.4675 13.2825C8.3325 13.14 8.25 12.945 8.25 12.75C8.25 12.555 8.3325 12.36 8.4675 12.2175C8.505 12.1875 8.5425 12.1575 8.58 12.1275C8.625 12.0975 8.67 12.075 8.715 12.06C8.76 12.0375 8.805 12.0225 8.85 12.015C8.9475 11.9925 9.0525 11.9925 9.1425 12.015C9.195 12.0225 9.24 12.0375 9.285 12.06C9.33 12.075 9.375 12.0975 9.42 12.1275C9.4575 12.1575 9.495 12.1875 9.5325 12.2175C9.6675 12.36 9.75 12.555 9.75 12.75C9.75 12.945 9.6675 13.14 9.5325 13.2825C9.495 13.3125 9.4575 13.3425 9.42 13.3725C9.375 13.4025 9.33 13.425 9.285 13.44C9.24 13.4625 9.195 13.4775 9.1425 13.485C9.0975 13.4925 9.045 13.5 9 13.5Z"
      fill="currentColor"
    />
    <path
      d="M13.545 16.62H4.45498C2.99248 16.62 1.87498 16.0875 1.30498 15.1275C0.742482 14.1675 0.817482 12.93 1.52998 11.6475L6.07498 3.4725C6.82498 2.1225 7.85998 1.38 8.99998 1.38C10.14 1.38 11.175 2.1225 11.925 3.4725L16.47 11.655C17.1825 12.9375 17.265 14.1675 16.695 15.135C16.125 16.0875 15.0075 16.62 13.545 16.62ZM8.99998 2.505C8.29498 2.505 7.60498 3.045 7.05748 4.02L2.51998 12.2025C2.00998 13.1175 1.92748 13.9575 2.27998 14.565C2.63248 15.1725 3.41248 15.5025 4.46248 15.5025H13.5525C14.6025 15.5025 15.375 15.1725 15.735 14.565C16.095 13.9575 16.005 13.125 15.495 12.2025L10.9425 4.02C10.395 3.045 9.70498 2.505 8.99998 2.505Z"
      fill="currentColor"
    />
  </svg>
  <svg
    v-else-if="iconName == 'mic'"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14.25C11.4825 14.25 13.5 12.2325 13.5 9.75V6C13.5 3.5175 11.4825 1.5 9 1.5C6.5175 1.5 4.5 3.5175 4.5 6V9.75C4.5 12.2325 6.5175 14.25 9 14.25Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.25 8.25V9.75C2.25 13.4775 5.2725 16.5 9 16.5C12.7275 16.5 15.75 13.4775 15.75 9.75V8.25"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.83252 5.61001C8.16752 5.12251 9.62252 5.12251 10.9575 5.61001"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.52246 7.85994C8.42246 7.61244 9.37496 7.61244 10.275 7.85994"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
