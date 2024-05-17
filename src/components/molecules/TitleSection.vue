<script>
export default {
  props: {
    title1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="w-4/6 flex-col">
    <slot name="icon"></slot>
    <div class="flex-grow-0 flex-shrink-0 relative mt-5">
      <div class="flex flex-col justify-start items-start">
        <p
          class="flex-grow-0 flex-shrink-0 text-[48px] font-bold text-left bg-gradient-to-tr from-[#fff] to-[#71717A] inline-block text-transparent bg-clip-text"
        >
          {{ title1 }}
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 text-[76px] -mt-6 font-bold text-left bg-gradient-to-tr from-[#fff] to-[#71717A] inline-block text-transparent bg-clip-text"
        >
          {{ title2 }}
        </p>
      </div>
    </div>
  </div>
</template>
