<script>
import ImpactOurMarketIcon from '../atoms/ImpactOurMarketIcon.vue'
import TitleSection from '../molecules/TitleSection.vue'
import PeopleChainTrue from '../atoms/peopleChainTrue.vue'
import PeopleChainFalse from '../atoms/peopleChainFalse.vue'

export default {
  components: {
    ImpactOurMarketIcon,
    TitleSection,
    PeopleChainTrue,
    PeopleChainFalse
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center mt-14">
    <div
      class="sm:w-full sm:px-4 md:w-full md:px-8 lg:w-full lg:px-10 xl:w-full xl:px-12 2xl:w-full 2xl:px-14 w-4/6 flex-col"
    >
      <TitleSection title1="COMO AS RESTRIÇÕES" title2="IMPACTAM O NOSSO MERCADO?">
        <template #icon>
          <ImpactOurMarketIcon />
        </template>
      </TitleSection>
    </div>
  </div>
  <div class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center">
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex-col mb-4">
      <p
        class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
      >
        Para explicar precisamos usar o conceito da
        <span class="text-[#C3D600] font-semibold">corrente do bem</span> que consiste em
        <span class="text-[#C3D600] font-semibold"
          >uma pessoa criar uma boa ação para 3 pessoas, e cada umas dessas 3 pessoas extende a boa
          ação para mais 3 e assim sucessivamente</span
        >.<br /><br />
        Essa ação gera um fenômeno em
        <span class="text-[#C3D600] font-semibold">cadeia de boas ações</span> que viralmente
        infecta toda uma sociedade ou mercado.
      </p>
    </div>
  </div>
  <div class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center">
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex gap-5">
      <div class="relative flex w-full rounded-xl bg-[#252141] bg-opacity-50">
        <div class="p-[24px]">
          <h5
            class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
          >
            No nosso mercado
            <span class="text-[#C3D600] font-semibold">funciona da mesma forma</span>, dependemos de
            pessoas para alcançar mais pessoas.
          </h5>
          <div class="py-5">
            <PeopleChainTrue />
          </div>
        </div>
      </div>
      <div class="relative flex w-full rounded-xl bg-[#252141] bg-opacity-50">
        <div class="p-[24px]">
          <h5
            class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
          >
            A USP realizou um estudo sobre a
            <span class="text-[#C3D600] font-semibold">frequência de consumo</span>
            do consumidor conforme a tabela abaixo:
          </h5>
          <div class="py-5">
            <PeopleChainFalse />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center">
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex-col mt-4">
      <p
        class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
      >
        Todos nós sabemos que as
        <span class="text-[#C3D600] font-semibold"
          >redes sociais têm colocado barreiras, restringindo nosso conteúdo</span
        >. Isso não só afeta a visibilidade e alcance,
        <span class="text-[#C3D600] font-semibold">mas consequentemente diminui as vendas</span>.
      </p>
    </div>
  </div>
</template>
