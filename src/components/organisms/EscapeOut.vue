<script>
export default {
  data() {
    return {
      line1: [
        'https://picsum.photos/100?random=1',
        'https://picsum.photos/100?random=2',
        'https://picsum.photos/100?random=3',
        'https://picsum.photos/100?random=4',
        'https://picsum.photos/100?random=5',
        'https://picsum.photos/100?random=6',
        'https://picsum.photos/100?random=7'
      ],
      line2: [
        'https://picsum.photos/100?random=11',
        'https://picsum.photos/100?random=22',
        'https://picsum.photos/100?random=33',
        'https://picsum.photos/100?random=44',
        'https://picsum.photos/100?random=55',
        'https://picsum.photos/100?random=66',
        'https://picsum.photos/100?random=77'
      ],
      line3: [
        'https://picsum.photos/100?random=111',
        'https://picsum.photos/100?random=222',
        'https://picsum.photos/100?random=333',
        'https://picsum.photos/100?random=444',
        'https://picsum.photos/100?random=555',
        'https://picsum.photos/100?random=666',
        'https://picsum.photos/100?random=777'
      ],
      line4: [
        'https://picsum.photos/100?random=1111',
        'https://picsum.photos/100?random=2222',
        'https://picsum.photos/100?random=3333',
        'https://picsum.photos/100?random=4444',
        'https://picsum.photos/100?random=5555',
        'https://picsum.photos/100?random=6666',
        'https://picsum.photos/100?random=7777'
      ]
    }
  },
  computed: {
    duplicatedImagesLine1() {
      return this.line1.concat(this.line1)
    },
    duplicatedImagesLine2() {
      return this.line2.concat(this.line2)
    },
    duplicatedImagesLine3() {
      return this.line3.concat(this.line3)
    },
    duplicatedImagesLine4() {
      return this.line4.concat(this.line4)
    }
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center mt-14">
    <div
      class="sm:w-full sm:flex-col sm:rounded-none sm:h-auto sm:p-0 sm:bg-white sm:gap-5 md:w-full md:rounded-none md:px-7 lg:w-full lg:rounded-none lg:px-12 xl:w-full xl:rounded-none xl:px-7 2xl:w-full 2xl:rounded-none 2xl:px-7 w-5/6 flex justify-center items-center rounded-[40px] h-[650px] px-[135px] gap-20 relative overflow-hidden block z-10 bg-[url('/public/bg-escapeout.png')] bg-cover bg-no-repeat"
    >
      <div class="sm:w-full sm:px-4 w-3/5">
        <h6
          class="sm:leading-none sm:text-[36px] sm:pt-10 md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[40px] mb-2 block text-[48px] font-regular leading-snug text-[#090914] antialiased"
        >
          Porque o mercado precisa de uma saída de
          <span class="text-[#C3D600] font-bold">ESC</span>ape?
        </h6>
        <p
          class="sm:text-[16px] sm:pt-[10px] mb-2 block text-[18px] font-regular leading-snug text-[#090914] antialiased pt-[50px]"
        >
          Precisamos
          <span class="text-[#C3D600] font-bold">restaurar os elos perdidos da nossa corrente</span
          >, por causa das restrições, para que o nosso mercado volte a crescer. <br /><br />
          A ESCAPE <span class="text-[#C3D600] font-bold">(ESC)</span> é uma rede social projetada e
          desenvolvida para atender as demandas do nosso mercado.
        </p>
      </div>
      <div class="sm:w-full sm:pb-10 w-2/5">
        <div class="sm:hidden w-full flex relative">
          <div class="w-full flex-col space-y-3 animate-infinite-scroll-up">
            <div
              v-for="(image, index) in duplicatedImagesLine1"
              :key="index"
              class="w-[100px] h-[100px] border-[5px] border-[#C3D600] rounded-full mb-3"
            >
              <img class="object-cover rounded-full" :src="image" />
            </div>
          </div>
          <div class="w-full flex-col space-y-3 animate-infinite-scroll-down">
            <div
              v-for="(image, index) in duplicatedImagesLine2"
              :key="index"
              class="w-[100px] h-[100px] border-[5px] border-[#C3D600] rounded-full mb-3"
            >
              <img class="object-cover rounded-full" :src="image" />
            </div>
          </div>
          <div class="w-full flex-col space-y-3 animate-infinite-scroll-up">
            <div
              v-for="(image, index) in duplicatedImagesLine3"
              :key="index"
              class="w-[100px] h-[100px] border-[5px] border-[#C3D600] rounded-full mb-3"
            >
              <img class="object-cover rounded-full" :src="image" />
            </div>
          </div>
          <div class="md:hidden w-full flex-col space-y-3 animate-infinite-scroll-down">
            <div
              v-for="(image, index) in duplicatedImagesLine4"
              :key="index"
              class="w-[100px] h-[100px] border-[5px] border-[#C3D600] rounded-full mb-3"
            >
              <img class="object-cover rounded-full" :src="image" />
            </div>
          </div>
        </div>
        <div class="md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden w-full flex flex-col">
          <div class="w-full inline-flex flex-nowrap">
            <ul class="flex [&_li]:mx-2 [&_img]:max-w-none horizontal-scroll">
              <li v-for="(image, index) in duplicatedImagesLine1" :key="index">
                <img class="object-cover rounded-full max-w-full max-h-full" :src="image" />
              </li>
            </ul>
          </div>
          <div class="w-full inline-flex flex-nowrap mt-5">
            <ul class="flex [&_li]:mx-2 [&_img]:max-w-none horizontal-scroll">
              <li v-for="(image, index) in duplicatedImagesLine2" :key="index">
                <img class="object-cover rounded-full max-w-full max-h-full" :src="image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes horizontalScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.horizontal-scroll {
  animation: horizontalScroll 150s linear infinite;
}
</style>
