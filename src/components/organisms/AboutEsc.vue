<script>
import Logo from '../atoms/logo.vue'
import TitleSection from '../molecules/TitleSection.vue'

export default {
  components: {
    Logo,
    TitleSection
  }
}
</script>

<template>
  <div class="sm:mt-5 w-full flex justify-center items-center mt-14">
    <div
      class="sm:w-full sm:px-4 md:w-full md:px-8 lg:w-full lg:px-10 xl:w-full xl:px-12 2xl:w-full 2xl:px-14 w-4/6 flex-col"
    >
      <TitleSection title1="SOBRE A" title2="ESC">
        <template #icon>
          <Logo />
        </template>
      </TitleSection>
    </div>
  </div>
  <div class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center">
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex gap-5">
      <div class="relative flex w-full rounded-xl">
        <div class="w-full rounded-md bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] p-[1px]">
          <div
            class="sm:flex-col sm:px-5 md:flex-col md:px-5 lg:px-5 flex items-center justify-center bg-black bg-opacity-90 rounded-md py-[35px] px-[60px] gap-16 block z-10 bg-[url('/public/ellipse.png')] bg-bottom bg-cover bg-no-repeat"
          >
            <div class="flex-col h-full w-full items-center justify-center">
              <h6 class="block text-[50px] font-semibold leading-snug text-white antialiased">
                MISSÃO
              </h6>
              <p class="block text-[16px] font-regular leading-snug text-white antialiased">
                Reconectarmos a nossa cultura, restaurando laços e criando uma comunidade
                acolhedora. Buscamos reavivar a essência do mercado, promovendo a diversidade e a
                cultura em um ambiente inclusivo e seguro.
              </p>
            </div>
            <div class="flex-col h-full w-full items-center justify-center">
              <h6 class="block text-[50px] font-semibold leading-snug text-white antialiased">
                VISÃO
              </h6>
              <p class="block text-[16px] font-regular leading-snug text-white antialiased">
                Sonhamos com um mercado onde cada pessoa encontre seu espaço para compartilhar
                experiências, ideias e paixões. Queremos ser a principal plataforma que fortalece
                esses laços, impulsionando o crescimento e a inovação.
              </p>
            </div>
            <div class="flex-col h-full w-full items-center justify-center">
              <h6 class="block text-[50px] font-semibold leading-snug text-white antialiased">
                VALORES
              </h6>
              <p class="block text-[16px] font-regular leading-snug text-white antialiased">
                Confiamos na liberdade de expressão, na diversidade e na responsabilidade.
                Valorizamos a conexão genuína, o respeito mútuo e a transparência. Nosso compromisso
                é com a comunidade, promovendo um ambiente acolhedor e positivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
