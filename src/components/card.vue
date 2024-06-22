<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
});
</script>

<script setup lang="ts">
import { toRefs, ref, Ref } from "vue";
import svgIcon from "./svgIcon.vue";

const props = defineProps<{
  iconName: String;
  details: {};
  hasError: boolean;
  isOk: boolean;
}>();

const { iconName, details } = toRefs(props);

</script>

<template>
  <div class="box">
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
</style>
