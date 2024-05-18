<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard]
    }
  }
}
</script>

<template>
  <div class="w-full flex-col justify-center items-center mt-14 text-center">
    <h2
      class="sm:text-[32px] sm:leading-tight sm:px-4 md:leading-tight md:px-8 lg:text-[36px] mb-2 block text-[52px] font-semibold leading-snug text-white antialiased"
    >
      Explore cada canto do nosso aplicativo
    </h2>
    <p class="mb-2 block text-[18px] font-regular leading-snug text-white antialiased">
      Descubra cada canto do
      <span class="text-[#C3D600] font-bold">nosso aplicativo e junte-se a nós</span> para uma<br />experiência
      completa.
    </p>
  </div>
  <div class="w-full flex justify-center items-center mt-[50px]">
    <div class="relative w-full">
      <div
        class="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#12111f] to-[transparent] z-10 pointer-events-none"
      ></div>
      <div
        class="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#12111f] to-transparent z-10 pointer-events-none"
      ></div>
      <swiper
        class="w-full"
        :modules="modules"
        :grabCursor="true"
        :freeMode="true"
        :loop="true"
        :mousewheel="false"
        :centeredSlides="true"
        :keyboard="{ enabled: true }"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :speed="18000"
        :breakpoints="{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20
          },
          1600: {
            slidesPerView: 4.2,
            spaceBetween: 50
          }
        }"
      >
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="/public/esc-feed.png" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  width: fit-content;
}
.swiper-container-free-mode > .swiper-wrapper {
  transition-timing-function: linear;
}
</style>
