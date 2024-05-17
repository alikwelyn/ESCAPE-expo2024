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
  <slot name="icon"></slot>
  <div class="mt-5 mb-5">
    <p
      class="sm:text-[30px] text-[40px] font-bold text-left bg-gradient-to-tr from-[#fff] to-[#71717A] text-transparent bg-clip-text leading-tight"
    >
      {{ title1 }}
      <br />
      <span
        class="sm:text-[36px] text-[65px] font-bold text-left bg-gradient-to-tr from-[#fff] to-[#71717A] text-transparent bg-clip-text leading-none"
      >
        {{ title2 }}
      </span>
    </p>
  </div>
</template>
