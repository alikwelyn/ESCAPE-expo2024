<script>
import BecauseYouCanIcon from '../atoms/BecauseYouCanIcon.vue'

export default {
  components: {
    BecauseYouCanIcon
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center mt-14">
    <div class="w-4/6 flex justify-center items-center gap-5">
      <img class="w-[598px] h-[577px] rounded-[20px]" src="/public/carvao.png" />
      <div class="flex w-full">
        <div class="p-[50px]">
          <BecauseYouCanIcon />
          <h6 class="mt-10 block text-[42px] font-semibold leading-snug text-white antialiased">
            Porque na <span class="text-[#C3D600] font-bold">ESCAPE</span> pode conteúdo de
            narguile?
          </h6>
          <p class="block text-[18px] font-regular leading-snug text-white antialiased pt-[40px]">
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
