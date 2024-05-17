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
  <div class="w-full flex justify-center items-center mt-14">
    <div class="w-4/6 flex-col">
      <TitleSection title1="SOBRE A" title2="ESC">
        <template #icon>
          <Logo />
        </template>
      </TitleSection>
    </div>
  </div>
  <div class="w-full flex justify-center items-center">
    <div class="w-4/6 flex gap-5">
      <div class="relative flex w-full rounded-xl">
        <div class="w-full rounded-md bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] p-[1px]">
          <div
            class="flex items-center justify-center bg-black bg-opacity-90 rounded-md py-[35px] px-[60px] gap-16 block z-10 bg-[url('/public/ellipse.png')] bg-bottom bg-cover bg-no-repeat"
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
