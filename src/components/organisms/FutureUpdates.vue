<script>
import FutureUpdatesIcon from '../atoms/FutureUpdatesIcon.vue'
import TitleSection from '../molecules/TitleSection.vue'
import CartIcon from '../atoms/CartIcon.vue'
import DesktopIcon from '../atoms/DesktopIcon.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: {
    FutureUpdatesIcon,
    TitleSection,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeIndex: null,
      items: [
        { name: 'LOJA1', icon: <CartIcon />, img: '/esc-feed.png' },
        { name: 'LOJA2', icon: DesktopIcon, img: '/esc-feed.png' },
        { name: 'LOJA3', icon: 'path/to/icon3.svg', img: '/carvao.png' }
      ]
    }
  },
  computed: {
    activeImage() {
      return this.activeIndex !== null ? this.items[this.activeIndex].img : '/esc-feed.png'
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    }
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Keyboard]
    }
  }
}
</script>

<template>
  <div
    class="w-full flex justify-center items-center mt-14"
    data-aos="fade-right"
    data-aos-delay="75"
    data-aos-duration="1000"
    data-aos-easing="fade-left"
  >
    <div
      class="sm:hidden md:hidden lg:hidden lg:px-10 xl:w-full xl:px-12 2xl:w-full 2xl:px-14 w-4/6 flex justify-center items-center"
    >
      <div class="flex w-full">
        <div class="sm:pr-0 md:pr-0 lg:pr-5 w-full flex-col pr-[60px]">
          <TitleSection title1="FIQUE POR DENTRO DAS" title2="ATUALIZAÇÕES FUTURAS">
            <template #icon>
              <FutureUpdatesIcon />
            </template>
          </TitleSection>
          <div
            class="sm:flex-col sm:space-y-0 sm:space-x-0 sm:mt-1 md:flex-col md:space-y-0 md:space-x-0 md:mt-1 flex flex-row w-full space-x-16 mt-[30px]"
          >
            <div
              v-for="(item, index) in items"
              :key="index"
              @click="setActive(index)"
              class="sm:pb-5 md:pb-5 w-full cursor-pointer"
            >
              <div
                class="w-full h-1 rounded-tl-xl rounded-tr-xl"
                :style="{ backgroundColor: activeIndex === index ? '#c3d600' : '#c3d600' }"
              ></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl border-t-0 border-r border-b border-l border-white/10"
                :style="{
                  backgroundColor: activeIndex === index ? '#ffffff' : '#1b1724',
                  color: activeIndex === index ? '#333333' : '#ffffff'
                }"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_84_10108)">
                    <path
                      d="M6.49998 26.947H35.7143L39.2857 9.08984H3.57141C3.31023 9.0908 3.05244 9.14904 2.81622 9.26045C2.58 9.37186 2.37109 9.53373 2.20422 9.73465C2.03735 9.93557 1.91659 10.1707 1.85045 10.4233C1.78431 10.676 1.77439 10.9401 1.82141 11.197L4.74998 25.4827C4.81829 25.8957 5.03242 26.2706 5.35351 26.5393C5.67459 26.8079 6.08135 26.9526 6.49998 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.2857 9.08963L40.7857 3.37535C40.868 2.972 41.0872 2.60949 41.4061 2.34917C41.725 2.08884 42.124 1.94669 42.5357 1.94678H48.2143"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.7142 26.9468L34.2142 34.4468C34.1319 34.8501 33.9127 35.2126 33.5938 35.473C33.2749 35.7333 32.8759 35.8754 32.4642 35.8753H10.7142"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.4999 48.3751C13.4862 48.3751 14.2857 47.5756 14.2857 46.5894C14.2857 45.6032 13.4862 44.8037 12.4999 44.8037C11.5137 44.8037 10.7142 45.6032 10.7142 46.5894C10.7142 47.5756 11.5137 48.3751 12.4999 48.3751Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30.3571 48.3751C31.3433 48.3751 32.1428 47.5756 32.1428 46.5894C32.1428 45.6032 31.3433 44.8037 30.3571 44.8037C29.3709 44.8037 28.5714 45.6032 28.5714 46.5894C28.5714 47.5756 29.3709 48.3751 30.3571 48.3751Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_84_10108">
                      <rect width="50" height="50" fill="white" transform="translate(0 0.161133)" />
                    </clipPath>
                  </defs>
                </svg>

                <p
                  class="text-[28px] font-semibold text-left"
                  :style="{ color: activeIndex === index ? '#333333' : '#ffffff' }"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="activeImage" alt="Active image" />
    </div>
    <div
      class="sm:block sm:w-full sm:px-4 md:block md:w-full md:px-8 lg:block lg:w-full lg:px-10 xl:hidden 2xl:hidden 3xl:hidden w-4/6 flex justify-center items-center"
    >
      <div class="flex w-full">
        <div class="w-full flex-col">
          <TitleSection title1="FIQUE POR DENTRO DAS" title2="ATUALIZAÇÕES FUTURAS">
            <template #icon>
              <FutureUpdatesIcon />
            </template>
          </TitleSection>
        </div>
      </div>
      <div class="flex w-full">
        <swiper
          class="w-full"
          :modules="modules"
          :grabCursor="true"
          :mousewheel="false"
          :keyboard="{ enabled: true }"
          :navigation="true"
          :pagination="true"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }"
        >
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/esc-feed.png" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style>
.swiper {
  --swiper-navigation-color: #fff !important;
  --swiper-pagination-color: #fff !important;
  --swiper-navigation-size: 20px;
}
.swiper-button-prev,
.swiper-button-next {
  padding: 20px;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  background-color: #c3d600;
  border-radius: 5px;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  background-color: #c3d600;
  border-radius: 5px;
}
.swiper-pagination .swiper-pagination-bullet {
  background-color: white;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: #c3d600;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
