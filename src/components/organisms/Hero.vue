<script>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'HeroComponent',
  setup() {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      gsap.to('.engagement-card, .notification-card, .follow-card, .visits-card', {
        x: (mouseX / window.innerWidth - 1) * 30,
        y: (mouseY / window.innerHeight - 1) * 30,
        delay: 0.1,
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    onMounted(() => {
      document.addEventListener('mousemove', handleMouseMove)

      // Timeline
      const timeline = gsap.timeline()

      // Animate the texts
      timeline.fromTo(
        '.text-header span',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }
      )

      // Animate the images
      timeline.fromTo(
        '.text-header .inline-block span',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=2'
      )
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove', handleMouseMove)
    })

    return {}
  }
}
</script>

<template>
  <div class="mt-12 mx-auto">
    <div class="engagement-card">
      <span
        class="inline-block absolute z-0 sm:hidden md:hidden lg:hidden xl:block xl:-top-[180px] xl:left-10 2xl:block 2xl:top-[-150px] 2xl:left-[50px] 3xl:block 3xl:top-130 3xl:left-16 w-32 mt-20 text-red-900"
      >
        <div class="flex-grow-0 flex-shrink-0 w-[330px] h-[116px] rounded-[20px] bg-[#252141]">
          <div class="w-[329px] h-[116px] absolute left-px top-0 overflow-hidden">
            <svg
              width="309"
              height="63"
              viewBox="0 0 309 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-2.5 top-[38px]"
              preserveAspectRatio="none"
            >
              <path
                d="M2 61C4.32346 58.9538 8.85421 55.4069 15.3599 56.2254C23.492 57.2486 28.1389 61 32.7859 56.2254C37.4328 51.4509 40.918 47.3584 44.984 48.0405C49.0501 48.7225 51.9544 52.474 57.1822 51.7919C62.41 51.1098 47.8445 58.7369 71.123 48.0405C94.4014 37.3441 91.867 38.9745 93.1959 42.5838C94.8338 47.0326 99.5854 53.4971 109.46 49.4046C119.335 45.3121 119.567 40.8786 126.305 40.8786C133.043 40.8786 129.209 39.1734 131.533 40.8786C133.856 42.5838 135.018 41.9017 137.922 39.8555C140.827 37.8092 144.992 31.6705 148.477 34.3988C151.962 37.1272 154.768 42.5838 161.738 42.5838C168.708 42.5838 179.954 37.1272 187.506 33.0347C195.057 28.9422 199.494 36.7861 201.237 38.8324C202.979 40.8786 215.758 36.7861 222.729 31.6705C228.305 27.578 233.959 33.6031 236.089 37.1272C243.64 35.6493 260.253 31.8069 266.294 28.2601C272.335 24.7133 275.781 27.9191 276.749 29.9653C282.171 27.578 304.096 10.8671 307 2"
                stroke="url(#paint0_linear_161_19)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_161_19"
                  x1="307"
                  y1="0.635821"
                  x2="19.4084"
                  y2="117.088"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="0.0782926" stop-color="#F9F2FF"></stop>
                  <stop offset="0.205255" stop-color="#C3D600"></stop>
                  <stop offset="0.401455" stop-color="#C3D600"></stop>
                  <stop offset="0.581288" stop-color="#848F09"></stop>
                  <stop offset="0.729526" stop-color="#C3D600"></stop>
                  <stop offset="0.882474" stop-color="#FFE7E7"></stop>
                  <stop offset="1" stop-color="white"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p class="absolute left-[245px] top-[15px] text-2xl font-bold text-left text-white">
              76%
            </p>
            <div class="flex flex-col justify-start items-start absolute left-[26px] top-[11px]">
              <p class="flex-grow-0 flex-shrink-0 text-[13px] text-left text-white">25/05/2024</p>
              <p class="flex-grow-0 flex-shrink-0 text-[14px] font-bold text-left text-white">
                Engajamento da sua conta
              </p>
            </div>
          </div>
        </div>
      </span>
    </div>
    <div class="notification-card">
      <span
        class="inline-block absolute sm:hidden md:hidden lg:hidden xl:block xl:top-[200px] xl:left-[70px] 2xl:block 2xl:top-[200px] 2xl:left-[100px] 3xl:block 3xl:top-[200px] 3xl:left-[150px] z-0 w-32 mt-20 text-red-900"
      >
        <div
          class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] overflow-hidden py-4 rounded-[20px] bg-[#252141]"
        >
          <div
            class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 px-4 border-t-0 border-r-0 border-b-0 border-l-[3px] border-[#c3d600]"
          >
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
              <img
                src="/narguilerosa.jpg"
                class="flex-grow-0 flex-shrink-0 w-[50px] h-[50px] rounded-full border-[3px] border-white object-cover"
              />
            </div>
            <div class="flex flex-col justify-start items-start flex-grow gap-[3px]">
              <div
                class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[219px] relative gap-[5px]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">
                    Narguile Rosa
                  </p>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-[15px] h-[15px] relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5.23828 7.99982L6.74456 9.51232L9.76331 6.4873"
                      stroke="#C549FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.65078 4.3748C2.65078 3.7123 3.19453 3.16855 3.85703 3.16855H4.93828C5.18828 3.16855 5.53828 3.0373 5.72578 2.88105L6.71331 2.0373C7.15081 1.66855 7.85706 1.66855 8.28206 2.0373L9.26956 2.88105C9.45706 3.0373 9.81331 3.16855 10.0633 3.16855H11.1258C11.7883 3.16855 12.3321 3.7123 12.3321 4.3748V5.4373C12.3321 5.6873 12.4633 6.0373 12.6196 6.2248L13.4633 7.21232C13.8321 7.64982 13.8321 8.35607 13.4633 8.78107L12.6196 9.76857C12.4633 9.95607 12.3321 10.3061 12.3321 10.5561V11.6186C12.3321 12.2811 11.7883 12.8248 11.1258 12.8248H10.0633C9.81331 12.8248 9.46331 12.9561 9.27581 13.1123L8.28831 13.9561C7.85081 14.3248 7.14456 14.3248 6.71956 13.9561L5.73203 13.1123C5.54453 12.9561 5.18828 12.8248 4.94453 12.8248H3.85703C3.19453 12.8248 2.65078 12.2811 2.65078 11.6186V10.5498C2.65078 10.3061 2.52578 9.94982 2.36953 9.76857L1.52578 8.77482C1.16328 8.34357 1.16328 7.64357 1.52578 7.21232L1.87578 6.79982"
                      stroke="#C549FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  class="flex-grow-0 flex-shrink-0 text-[10px] -ml-10 font-medium text-left text-[#4c487d]"
                >
                  Agora
                </p>
              </div>
              <div
                class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
              >
                <p class="flex-grow w-[203px] text-[13px] text-left text-white">
                  Se liga nesse novo lançamento que a marca X está fazendo!
                </p>
                <div
                  class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[22px] w-[22px] relative gap-2.5 p-2.5 rounded-[900px] bg-[#c3d600]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">
                    2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
    <div class="w-full mx-auto text-center text-header">
      <h1
        class="w-full text-center text-white font-bold sm:text-[40px] sm:leading-[40px] sm:px-[10px] md:text-[44px] lg:text-[62px] xl:text-[62px] 2xl:text-[62px] 3xl:text-[62px] leading-[72px]"
      >
        <span class="sm:text-[28px]">A primeira e única</span> <br />
        <span class="inline-block relative">
          <svg
            width="343"
            height="12"
            viewBox="0 0 343 12"
            class="absolute top-2/3 left-0 h-[0.7em] w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00013 5.89091C56.6278 5.08954 195.325 4.16334 337.092 6.86946"
              stroke="#C3D600"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>

          <span class="relative sm:text-[40px]">rede social</span></span
        >
        <div class="inline-block px-3 sm:pt-[25px] sm:pb-[10px]">
          <span
            class="rounded-full border-[3px] border-white inline-block bg-contain bg-no-repeat align-middle mx-[0] -my-[0.5em] w-[55px] h-[55px] bg-[url(/narguilerosa.jpg)] translate-x-0 -translate-y-[5px]"
          ></span>
          <span
            class="-ml-4 rounded-full border-[3px] border-white inline-block bg-contain bg-no-repeat align-middle mx-[0] -my-[0.5em] w-[55px] h-[55px] bg-[url(/juba.jpg)] translate-x-0 -translate-y-[5px]"
          ></span>
          <span
            class="-ml-4 rounded-full border-[3px] border-white inline-block bg-contain bg-no-repeat align-middle mx-[0] -my-[0.5em] w-[55px] h-[55px] bg-[url(/rucoelho.jpg)] translate-x-0 -translate-y-[5px]"
          ></span>
          <span
            class="-ml-4 rounded-full border-[3px] border-white inline-block bg-contain bg-no-repeat align-middle mx-[0] -my-[0.5em] w-[55px] h-[55px] bg-[url(/macario.jpg)] translate-x-0 -translate-y-[5px]"
          ></span>
        </div>
        <span class="inline-block relative">
          <svg
            width="343"
            height="12"
            viewBox="0 0 343 12"
            class="absolute top-2/3 left-0 h-[0.7em] w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00013 5.89091C56.6278 5.08954 195.325 4.16334 337.092 6.86946"
              stroke="#C3D600"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>

          <span class="relative sm:text-[40px]">narguileira</span></span
        ><br />
        <span
          class="sm:hidden mr-5 rounded-full inline-block align-middle mx-[0] w-[209px] h-[45px] bg-[url(/rosh.png)]"
        ></span
        ><span class="sm:text-[28px]">do mundo</span>
        <span
          class="sm:hidden ml-3 rounded-full inline-block align-middle mx-[0] w-[159px] h-[45px] bg-[url(/emojis.png)]"
        ></span>
      </h1>
    </div>
    <div class="follow-card">
      <span
        class="inline-block absolute sm:hidden md:hidden lg:hidden xl:block xl:-top-[420px] xl:right-[270px] 2xl:block 2xl:top-[-400px] 2xl:right-[270px] 3xl:block 3xl:-top-[340px] 3xl:right-[270px] z-0 hidden w-32 mt-20 text-red-900"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[350px] overflow-hidden p-6 rounded-[20px] bg-[#252141]"
        >
          <div
            class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden"
          >
            <div class="flex justify-start items-center flex-grow relative overflow-hidden gap-2.5">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <img
                  src="/macario.jpg"
                  class="flex-grow-0 flex-shrink-0 w-[50px] h-[50px] rounded-full border-[3px] border-white object-cover"
                />
              </div>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[172px] absolute left-[61px] top-[5px] overflow-hidden gap-[3px]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                  Eduardo Macário
                </p>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-[15px] h-[15px] relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5.23828 7.99982L6.74456 9.51232L9.76331 6.4873"
                    stroke="#C549FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.65078 4.3748C2.65078 3.7123 3.19453 3.16855 3.85703 3.16855H4.93828C5.18828 3.16855 5.53828 3.0373 5.72578 2.88105L6.71331 2.0373C7.15081 1.66855 7.85706 1.66855 8.28206 2.0373L9.26956 2.88105C9.45706 3.0373 9.81331 3.16855 10.0633 3.16855H11.1258C11.7883 3.16855 12.3321 3.7123 12.3321 4.3748V5.4373C12.3321 5.6873 12.4633 6.0373 12.6196 6.2248L13.4633 7.21232C13.8321 7.64982 13.8321 8.35607 13.4633 8.78107L12.6196 9.76857C12.4633 9.95607 12.3321 10.3061 12.3321 10.5561V11.6186C12.3321 12.2811 11.7883 12.8248 11.1258 12.8248H10.0633C9.81331 12.8248 9.46331 12.9561 9.27581 13.1123L8.28831 13.9561C7.85081 14.3248 7.14456 14.3248 6.71956 13.9561L5.73203 13.1123C5.54453 12.9561 5.18828 12.8248 4.94453 12.8248H3.85703C3.19453 12.8248 2.65078 12.2811 2.65078 11.6186V10.5498C2.65078 10.3061 2.52578 9.94982 2.36953 9.76857L1.52578 8.77482C1.16328 8.34357 1.16328 7.64357 1.52578 7.21232L1.87578 6.79982"
                    stroke="#C549FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <p class="flex-grow-0 flex-shrink-0 w-[116.5px] pt-5 text-sm text-left text-white">
                Influencer
              </p>
            </div>
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] overflow-hidden rounded-[10px]"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[25px] relative px-4 py-[9px] rounded bg-[#c3d600]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-[11px] font-bold text-center text-white">
                  Seguir
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
    <div class="visits-card">
      <span
        class="inline-block absolute sm:hidden md:hidden lg:hidden xl:block xl:top-[-70px] xl:right-[130px] 2xl:block 2xl:top-[-50px] 2xl:right-[130px] 3xl:block 3xl:top-[-120px] 3xl:right-[330px] z-0 hidden w-32 mt-20 text-red-900"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2 p-4 rounded-2xl bg-[#252141]"
        >
          <div class="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1.5">
            <div class="flex-grow-0 flex-shrink-0 w-2 h-6 rounded-[100px] bg-[#c3d600]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-[22px] rounded-[100px] bg-[#12111f]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-[34px] rounded-[100px] bg-[#c3d600]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-4 rounded-[100px] bg-[#12111f]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-6 rounded-[100px] bg-[#c3d600]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-8 rounded-[100px] bg-[#12111f]"></div>
            <div class="flex-grow-0 flex-shrink-0 w-2 h-6 rounded-[100px] bg-[#c3d600]"></div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-white">Visitas no perfil</p>
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">14m+</p>
        </div>
      </span>
    </div>
    <div class="w-full mx-auto text-center w-10/12">
      <div
        class="sm:px-[10px] mt-[20px] flex justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
      >
        <button
          type="button"
          class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 border-[2px] border-white"
        >
          <div class="mr-3">
            <svg viewBox="0 0 384 512" width="30">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
          </div>
          <div class="text-left">
            <div class="text-xs">Em breve na</div>
            <div class="-mt-1 font-sans text-xl font-semibold">App Store</div>
          </div>
        </button>
        <button
          type="button"
          class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 border-[2px] border-white"
        >
          <div class="mr-3">
            <svg viewBox="30 336.7 120.9 129.2" width="30">
              <path
                fill="#FFD400"
                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
              ></path>
              <path
                fill="#FF3333"
                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
              ></path>
              <path
                fill="#48FF48"
                d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
              ></path>
              <path
                fill="#3BCCFF"
                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
              ></path>
            </svg>
          </div>
          <div class="text-left">
            <div class="text-xs">Em breve no</div>
            <div class="-mt-1 font-sans text-xl font-semibold">Google Play</div>
          </div>
        </button>
      </div>
    </div>
    <div class="w-full mt-20 flex justify-center items-center">
      <img src="/mockup-telefone-app.png" />
    </div>
  </div>
</template>
