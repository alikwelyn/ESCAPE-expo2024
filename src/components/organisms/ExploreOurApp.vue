<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dashboard.png'
        },
        {
          title: 'Dashboard - Amigos',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-amigos.png'
        },
        {
          title: 'Dashboard - Comentários',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-comentarios.png'
        },
        {
          title: 'Dashboard - Trending Topics',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-trending-topics.png'
        },
        {
          title: 'Dashboard - EscTV',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-esctv.png'
        },
        {
          title: 'Dashboard - EscTV',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-esctv-assistindo.png'
        },
        {
          title: 'Dashboard - Grupos',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/dash-grupos.png'
        },
        {
          title: 'Dashboard - Notificações',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/notificacoes.png'
        },
        {
          title: 'Dashboard - Descobrir',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/descobrir.png'
        },
        {
          title: 'Dashboard - Buscas Recentes',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/busca-recente.png'
        },
        {
          title: 'Dashboard - Tipo de Post',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/tipo-post.png'
        },
        {
          title: 'Dashboard - Preview Post',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/preview-post.png'
        },
        {
          title: 'Dashboard - Daily',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/daily.png'
        },
        {
          title: 'Dashboard - Beats',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/beats.png'
        },
        {
          title: 'Dashboard - Perfil Usuário',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-usuario.png'
        },
        {
          title: 'Dashboard - Perfil Usuário',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-usuario-configuracoes.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Free',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-free.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Gold',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-gold.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Premium',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-premium.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Premium Videos',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-premium-videos.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Premium Catálogo',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-catalogo.png'
        },
        {
          title: 'Dashboard - Catálogo',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/catalogo-produto.png'
        },
        {
          title: 'Dashboard - Catálogo',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/catalogo-produto-detalhes.png'
        },
        {
          title: 'Dashboard - Perfil Comercial Premium Grupo',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/perfil-comercial-premium-grupo.png'
        },
        {
          title: 'Dashboard - Grupo',
          text: 'lorem ipsum dolor site amt',
          img: '/expo/screens/grupo.png'
        }
      ]
    }
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard]
    }
  }
}
</script>

<template>
  <div
    class="w-full flex-col justify-center items-center mt-14 text-center"
    data-aos="fade-up"
    data-aos-delay="75"
    data-aos-duration="500"
    data-aos-easing="fade-down"
  >
    <h2
      class="sm:text-[32px] sm:leading-tight sm:px-4 md:leading-tight md:px-8 lg:text-[36px] mb-2 block text-[52px] font-semibold leading-snug text-white antialiased"
    >
      Explore cada canto do nosso aplicativo
    </h2>
    <p class="sm:px-4 mb-2 block text-[18px] font-regular leading-snug text-white antialiased">
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
        :mousewheel="false"
        :centeredSlides="true"
        :keyboard="{ enabled: true }"
        :autoplay="{ delay: 0, disableOnInteraction: true }"
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
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="relative w-full">
            <img :src="item.img" class="object-cover w-full h-full rounded-[20px]" />
            <div
              class="absolute w-full h-full bottom-0 bg-gradient-to-t from-slate-950 from-2% via-transparent via-50% to-transparent to-10% flex flex-col items-start justify-end text-left p-3 border-[3px] border-[#C3D600] rounded-[20px] pb-[20px]"
            >
              <h6 class="text-[24px] text-[#C3D600] font-bold text-left">{{ item.title }}</h6>
              <p class="hidden text-[16px] text-white font-semibold">
                {{ item.text }}
              </p>
            </div>
          </div>
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
