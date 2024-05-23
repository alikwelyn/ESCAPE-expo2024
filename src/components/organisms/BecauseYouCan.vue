<script>
import BecauseYouCanIcon from '../atoms/BecauseYouCanIcon.vue'

export default {
  components: {
    BecauseYouCanIcon
  }
}
</script>

<template>
  <div class="sm:mt-5 md:mt-5 w-full flex justify-center items-center mt-14">
    <div
      v-lazy-container="{ selector: 'img' }"
      class="sm:w-full sm:px-4 md:w-full md:px-8 lg:w-full lg:px-10 xl:w-full xl:px-12 2xl:w-full 2xl:px-14 w-4/6 flex justify-center items-center gap-5"
    >
      <img
        class="sm:hidden md:hidden lg:w-[525px] lg:h-[507px] xl:w-[525px] xl:h-[507px] w-[598px] h-[577px] rounded-[20px]"
        data-src="/expo/voce-pode.png"
        data-aos="fade-down"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="fade-up"
      />
      <div
        class="md:order-1 flex w-full"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="fade-up"
      >
        <div class="sm:px-0 md:px-1 lg:px-5 xl:px-5 2xl:px-5 p-[50px]">
          <BecauseYouCanIcon />
          <h6
            class="sm:text-[36px] lg:text-[36px] mt-10 block text-[42px] font-semibold leading-snug text-white antialiased"
          >
            Porque na <span class="text-[#C3D600] font-bold">ESCAPE</span> pode conteúdo de
            narguile?
          </h6>
          <p
            class="sm:text-[16px] lg:text-[16px] block text-[18px] font-regular leading-snug text-white antialiased pt-[40px]"
          >
            Porque é uma
            <span class="text-[#C3D600] font-bold">rede social para maiores de 18 anos</span> e que
            na política consta o tipo de conteúdo que será consumido pelo usuário.<br /><br />
            Estamos empenhados em
            <span class="text-[#C3D600] font-bold">fornecer uma plataforma inovadora</span> que
            promova a
            <span class="text-[#C3D600] font-bold"
              >conscientização responsável, a educação e a conexão direta com os consumidores</span
            >, enquanto respeitamos as regulamentações rigorosas do país.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
