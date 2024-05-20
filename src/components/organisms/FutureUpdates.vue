<script>
import FutureUpdatesIcon from '../atoms/FutureUpdatesIcon.vue'
import TitleSection from '../molecules/TitleSection.vue'
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
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
          </div>
          <div
            class="sm:flex-col sm:space-y-0 sm:space-x-0 sm:mt-1 md:flex-col md:space-y-0 md:space-x-0 md:mt-1 flex flex-row w-full space-x-16 mt-[30px]"
          >
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
          </div>
          <div
            class="sm:flex-col sm:space-y-0 sm:space-x-0 sm:mt-1 md:flex-col md:space-y-0 md:space-x-0 md:mt-1 flex flex-row w-full space-x-16 mt-[30px]"
          >
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
            <div class="sm:pb-5 md:pb-5 w-full">
              <div class="w-full h-1 rounded-tl-xl rounded-tr-xl bg-[#c3d600]"></div>
              <div
                class="flex flex-col justify-center items-center p-[40px] rounded-bl-xl rounded-br-xl bg-[#1b1724] border-t-0 border-r border-b border-l border-white/10"
              >
                <svg
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[50px] h-[50px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_158_1667)">
                    <path
                      d="M6.49973 26.947H35.714L39.2854 9.08984H3.57116C3.30999 9.0908 3.0522 9.14904 2.81598 9.26045C2.57975 9.37186 2.37084 9.53373 2.20398 9.73465C2.03711 9.93557 1.91635 10.1707 1.8502 10.4233C1.78406 10.676 1.77415 10.9401 1.82116 11.197L4.74973 25.4827C4.81805 25.8957 5.03218 26.2706 5.35326 26.5393C5.67435 26.8079 6.08111 26.9526 6.49973 26.947V26.947Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M39.2852 9.09012L40.7852 3.37584C40.8675 2.97249 41.0867 2.60998 41.4055 2.34966C41.7244 2.08933 42.1235 1.94718 42.5352 1.94727H48.2137"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M35.7139 26.9473L34.2139 34.4473C34.1315 34.8506 33.9124 35.2131 33.5935 35.4734C33.2746 35.7338 32.8755 35.8759 32.4639 35.8758H10.7139"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.4996 48.3761C13.4858 48.3761 14.2853 47.5766 14.2853 46.5904C14.2853 45.6042 13.4858 44.8047 12.4996 44.8047C11.5134 44.8047 10.7139 45.6042 10.7139 46.5904C10.7139 47.5766 11.5134 48.3761 12.4996 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M30.357 48.3761C31.3432 48.3761 32.1427 47.5766 32.1427 46.5904C32.1427 45.6042 31.3432 44.8047 30.357 44.8047C29.3708 44.8047 28.5713 45.6042 28.5713 46.5904C28.5713 47.5766 29.3708 48.3761 30.357 48.3761Z"
                      stroke="#C3D600"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_158_1667">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 0.161133)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[28px] font-semibold text-left text-white">LOJA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/esc-feed.png" />
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
</style>
