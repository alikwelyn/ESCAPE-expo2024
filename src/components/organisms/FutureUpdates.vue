<script>
import { markRaw } from 'vue'
import FutureUpdatesIcon from '../atoms/FutureUpdatesIcon.vue'
import TitleSection from '../molecules/TitleSection.vue'
import CartIcon from '../atoms/CartIcon.vue'
import DesktopIcon from '../atoms/DesktopIcon.vue'
import MoneyIcon from '../atoms/MoneyIcon.vue'
import EyeIcon from '../atoms/EyeIcon.vue'
import UsersIcon from '../atoms/UsersIcon.vue'
import TradeIcon from '../atoms/TradeIcon.vue'
import JobsIcon from '../atoms/JobsIcon.vue'
import GameficationIcon from '../atoms/GameficationIcon.vue'
import InsightsIcon from '../atoms/InsightsIcon.vue'

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
      activeIndex: 0,
      items: [
        {
          name: 'LOJA',
          icon: markRaw(CartIcon),
          text: 'Venda produtos ou faça compras com facilidade, garantindo segurança e proteção em todas as transações.',
          img: '/expo/screens/em-breve/loja.png'
        },
        {
          name: 'ESC DESKTOP',
          icon: markRaw(DesktopIcon),
          text: 'EM BREVE!!',
          img: '/expo/screens/em-breve/esc-desktop.png'
        },
        {
          name: 'MOEDA PRÓPRIA',
          icon: markRaw(MoneyIcon),
          text: 'Encontre, adquira, aproveite! Explore e compre com suas moedas dentro do aplicativo.',
          img: '/expo/screens/em-breve/moeda.png'
        },
        {
          name: 'ESC LIVES',
          icon: markRaw(EyeIcon),
          text: 'Transmita momentos, converse com seguidores e mergulhe na experiência de livestream.',
          img: '/expo/screens/em-breve/esc-lives.png'
        },
        {
          name: 'ESC FRIENDS',
          icon: markRaw(UsersIcon),
          text: 'Encontre um amigo, jogue junto, compartilhe uma sessão ou encontre seu par romântico.',
          img: '/expo/screens/em-breve/esc-friends.png'
        },
        {
          name: 'ESC TRADE',
          icon: markRaw(TradeIcon),
          text: 'Troque, negocie, renove! Explore o mercado de trocas e encontre novos lares para seus itens favoritos.',
          img: '/expo/screens/em-breve/esc-trade.png'
        },
        {
          name: 'ESC JOBS',
          icon: markRaw(JobsIcon),
          text: 'Descubra oportunidades. Encontre freelas e empregos sob medida para você.',
          img: '/expo/screens/em-breve/esc-jobs.png'
        },
        {
          name: 'GAMEFICAÇÃO',
          icon: markRaw(GameficationIcon),
          text: 'Explore desafios, personalize seu perfil, conquiste troféus e exiba títulos exclusivos em seu perfil.',
          img: '/expo/screens/em-breve/gameficacao.png'
        },
        {
          name: 'INSIGHTS',
          icon: markRaw(InsightsIcon),
          text: 'Explore insights exclusivos sobre sua atividade e relacionamentos na plataforma.',
          img: '/expo/screens/em-breve/insights.png'
        }
      ]
    }
  },
  computed: {
    activeImage() {
      return this.activeIndex !== null
        ? this.items[this.activeIndex]
        : { name: '', text: '', img: '/expo/screens/em-breve/loja.png' }
    },
    chunkedItems() {
      const chunkSize = 3
      return this.items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize)
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
      }, [])
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
            v-for="(chunk, chunkIndex) in chunkedItems"
            :key="chunkIndex"
            class="sm:flex-col sm:space-y-0 sm:space-x-0 sm:mt-1 md:flex-col md:space-y-0 md:space-x-0 md:mt-1 flex flex-row w-full space-x-16 mt-[30px]"
          >
            <div
              v-for="(item, index) in chunk"
              :key="index"
              @click="setActive(index + chunkIndex * 3)"
              class="sm:pb-5 md:pb-5 w-full cursor-pointer"
            >
              <div
                class="w-full h-1 rounded-tl-xl rounded-tr-xl"
                :style="{
                  backgroundColor: activeIndex === index + chunkIndex * 3 ? '#c3d600' : '#c3d600'
                }"
              ></div>
              <div
                class="flex flex-col justify-center items-center h-[175px] rounded-bl-xl rounded-br-xl border-t-0 border-r border-b border-l border-white/10 text"
                :style="{
                  backgroundColor: activeIndex === index + chunkIndex * 3 ? '#ffffff' : '#1b1724',
                  color: activeIndex === index + chunkIndex * 3 ? '#333333' : '#ffffff'
                }"
              >
                <template v-if="typeof item.icon === 'object'">
                  <component :is="item.icon" />
                </template>
                <template v-else>
                  <img :src="item.icon" />
                </template>
                <p
                  class="text-[22px] font-semibold text-center leading-tight mt-2"
                  :style="{ color: activeIndex === index + chunkIndex * 3 ? '#333333' : '#ffffff' }"
                >
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-[50%]" v-lazy-container="{ selector: 'img' }">
        <img :data-src="activeImage.img" class="object-cover w-full h-full rounded-[20px]" />
        <div
          v-if="activeImage !== null"
          class="absolute w-full h-full bottom-0 bg-gradient-to-t from-slate-950 from-2% via-transparent via-50% to-transparent to-10% flex flex-col items-start justify-end text-left p-3 border-[3px] border-[#C3D600] rounded-[20px] pb-[20px]"
        >
          <h6 class="text-[24px] text-[#C3D600] font-bold text-left">{{ activeImage.name }}</h6>
          <p class="text-[16px] text-white font-semibold">{{ activeImage.text }}</p>
        </div>
        <div
          v-else
          class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 rounded-[20px]"
        >
          <svg
            class="animate-spin h-10 w-10 text-[#C3D600]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4V0C6.486 0 2 4.486 2 10h4zM20 4a8 8 0 00-7.291 12H12c4.513 0 8-3.487 8-8h-4zM4 12h.001M20 12h.001"
            ></path>
          </svg>
        </div>
      </div>
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
          <swiper-slide v-for="(item, index) in items" :key="index">
            <div class="relative w-full" v-lazy-container="{ selector: 'img' }">
              <img :data-src="item.img" class="object-cover w-full h-full rounded-[20px]" />
              <div
                class="absolute w-full h-full bottom-0 bg-gradient-to-t from-slate-950 from-2% via-transparent via-50% to-transparent to-10% flex flex-col items-start justify-end text-left p-3 border-[3px] border-[#C3D600] rounded-[20px] pb-[20px]"
              >
                <h6 class="text-[24px] text-[#C3D600] font-bold text-left">
                  {{ item.name }}
                </h6>
                <p class="text-[16px] text-white font-semibold">{{ item.text }}</p>
              </div>
            </div>
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
