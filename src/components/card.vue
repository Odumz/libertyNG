<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
});
</script>

<script setup lang="ts">
import { toRefs, ref, Ref } from "vue";

const props = defineProps<{
  iconName: String;
  details: {};
  hasError: boolean;
  isOk: boolean;
}>();

const { iconName, details } = toRefs(props);

import svgIcon from "./svgIcon.vue";
// const hasError: Ref<boolean> = ref(true);
// const isOk: Ref<boolean> = ref(false);

const copy: any = async (link: string) => {
  console.log("copying");
  // console.log(`the alert state is ${alertState.value} `)
  console.log("copying");
  // alertState.value = !alertState.value;
  // console.log(`the alert state is ${alertState.value} `)
  try {
    await navigator.clipboard.writeText(link);
    console.log("Copied to d clipboard", link);
    isCopied.value = true;
  } catch (e) {
    console.error(e);
  }
  setTimeout(() => {
    isCopied.value = false;
  }, 1700);
};
</script>

<template>
  <div class="box">
    <!-- {{ details }} -->
    <div
      class="animate-flyIn rounded-full"
      :class="[
        hasError
          ? 'border-2 text-liberty-red-500 border-r-liberty-red-500'
          : isOk
            ? 'border-2 border-liberty-purple-500 p-[3px]'
            : '',
      ]"
    >
      <div
        class="box-icon"
        :class="[
          hasError
            ? 'bg-liberty-red-500 bg-opacity-10'
            : isOk
              ? 'bg-liberty-purple-500 !py-2.5'
              : 'bg-liberty-purple-300',
        ]"
      >
        <svgIcon :iconName="details.main" />
      </div>
    </div>
    <div
      class="box-icon__mini animate-flyIn"
      :class="[hasError ? 'bg-liberty-red-500' : 'bg-liberty-purple-500']"
    >
      <svgIcon :iconName="details.mini" class="transform scale-50" />
    </div>
  </div>
</template>

<style scoped>
.box {
  @apply relative grid place-content-center w-[5.6875rem] h-[4.4375rem] rounded-[.625rem] bg-liberty-purple-100;
}

.box-icon {
  @apply rounded-full p-2;
}

.box-icon__mini {
  @apply absolute top-[.125rem] right-[.1875rem] text-white w-4 h-4 grid place-content-center p-[3px] rounded-full;
}

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
