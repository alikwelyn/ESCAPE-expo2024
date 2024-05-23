<script>
import MarketEvolutionIcon from './../atoms/MarketEvolutionIcon.vue'
import TitleSection from './../molecules/TitleSection.vue'

export default {
  name: 'MarketEvolutionComponent',
  components: {
    MarketEvolutionIcon,
    TitleSection
  },
  data() {
    return {
      IBGEStudy: [
        {
          name: 'Total de consumidores',
          data: [
            {
              x: '2015',
              y: 212000
            },
            {
              x: '2019',
              y: 2500000
            }
          ]
        }
      ],
      IBGEStudychartOptions: {
        chart: {
          type: 'bar',
          height: 'auto',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },

        xaxis: {
          labels: {
            show: false
          }
        },
        legend: {
          show: true,
          fontSize: '24px',
          fontFamily: 'Poppins',
          fontWeight: 700,
          offsetY: 10,
          labels: {
            colors: ['#FFFFFF', '#C3D600']
          },
          markers: {
            width: 12,
            height: 12,
            radius: 12
          },
          itemMargin: {
            horizontal: 30,
            vertical: 0
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              if (value === 0) return '0'
              if (value === 200000) return '200K'
              if (value === 400000) return '400K'
              if (value === 600000) return '600K'
              if (value === 800000) return '800K'
              if (value === 1000000) return '1.0M'
              if (value === 1200000) return '1.2M'
              if (value === 1400000) return '1.4M'
              if (value === 1600000) return '1.6M'
              if (value === 1800000) return '1.8M'
              if (value === 2000000) return '2.0M'
              if (value === 2200000) return '2.2M'
              if (value === 2400000) return '2.4M'
              if (value === 2600000) return '2.6M'
              return value
            },
            style: {
              colors: ['#FFFFFF'],
              fontSize: '12px',
              fontFamily: 'Poppins'
            }
          },
          tickAmount: 12
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toLocaleString()
            }
          }
        },
        colors: ['#FFFFFF', '#C3D600'],
        grid: {
          borderColor: '#404040',
          strokeDashArray: 4
        }
      },
      USPStudy: [
        {
          name: 'Frequência de consumo',
          data: [175000, 675000, 325000, 1325000]
        }
      ],
      USPStudychartOptions: {
        chart: {
          type: 'bar',
          height: 'auto',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '20%',
            borderRadius: 0,
            borderRadiusApplication: 'end',
            distributed: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            const total = opts.w.globals.seriesTotals[opts.seriesIndex]
            const percentage = ((val / total) * 100).toFixed(2) + '%'
            return percentage
          },
          offsetX: 30,
          textAnchor: 'start',
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        xaxis: {
          categories: ['Diariamente', 'Semanalmente', 'Uma vez por mês', 'Esporadicamente'],
          labels: {
            style: {
              colors: ['#ffffff'],
              fontSize: '12px',
              fontFamily: 'Poppins'
            }
          }
        },
        legend: {
          show: false
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#FFFFFF'],
              fontSize: '12px',
              fontFamily: 'Poppins'
            }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toLocaleString()
            }
          }
        },
        colors: ['#36F097'],
        grid: {
          borderColor: '#404040',
          strokeDashArray: 4
        },
        responsive: [
          {
            breakpoint: 1025,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                  dataLabels: {
                    position: 'top'
                  }
                }
              },
              dataLabels: {
                offsetX: 0,
                offsetY: -20,
                textAnchor: 'middle',
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
              xaxis: {
                labels: {
                  style: {
                    colors: ['#fff', '#fff', '#fff', '#fff'],
                    fontSize: '16px'
                  }
                }
              }
            }
          }
        ]
      },
      entireMarket: [
        {
          name: 'Consumidores de informaçãoo',
          data: [150000]
        }
      ],
      entireMarketchartOptions: {
        chart: {
          type: 'bar',
          height: 'auto',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '20%',
            borderRadius: 0,
            borderRadiusApplication: 'end',
            distributed: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toLocaleString()
          },
          offsetX: 30,
          textAnchor: 'start',
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        xaxis: {
          categories: ['Diariamente'],
          labels: {
            style: {
              colors: ['#FFFFFF'],
              fontSize: '12px',
              fontFamily: 'Poppins'
            }
          }
        },
        legend: {
          show: false
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#FFFFFF'],
              fontSize: '12px',
              fontFamily: 'Poppins'
            }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val.toLocaleString()
            }
          }
        },
        colors: ['#36F097'],
        grid: {
          borderColor: '#404040',
          strokeDashArray: 4
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                  dataLabels: {
                    position: 'top'
                  }
                }
              },
              dataLabels: {
                offsetX: 0,
                offsetY: -20,
                textAnchor: 'middle',
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
              xaxis: {
                labels: {
                  style: {
                    colors: ['#fff', '#fff', '#fff', '#fff'],
                    fontSize: '16px'
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<template>
  <div
    class="w-full flex justify-center items-center mt-14"
    data-aos="fade-up"
    data-aos-delay="75"
    data-aos-duration="500"
    data-aos-easing="fade-down"
  >
    <div
      class="sm:w-full sm:px-4 md:w-full md:px-8 lg:w-full lg:px-10 xl:w-full xl:px-12 2xl:w-full 2xl:px-14 w-4/6 flex-col"
    >
      <TitleSection title1="A EVOLUÇÃO DO" title2="MERCADO">
        <template #icon>
          <MarketEvolutionIcon />
        </template>
      </TitleSection>
    </div>
  </div>
  <div class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center">
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex gap-5">
      <div
        class="relative flex w-full rounded-xl bg-[#252141] bg-opacity-50"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="fade-left"
      >
        <div class="p-[24px]">
          <h5
            class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
          >
            Segundo estudo realizado pelo IBGE, em 2019
            <span class="text-[#C3D600] font-semibold"
              >o mercado chegou a 2,5 milhões de consumidores:</span
            >
          </h5>
          <apexchart
            type="bar"
            height="450"
            :options="IBGEStudychartOptions"
            :series="IBGEStudy"
          ></apexchart>
        </div>
      </div>
      <div
        class="relative flex w-full rounded-xl bg-[#252141] bg-opacity-50"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="fade-left"
      >
        <div class="p-[24px]">
          <h5
            class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
          >
            A USP realizou um estudo sobre a
            <span class="text-[#C3D600] font-semibold">frequência de consumo</span>
            do consumidor conforme a tabela abaixo:
          </h5>
          <apexchart
            type="bar"
            height="450"
            :options="USPStudychartOptions"
            :series="USPStudy"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
  <div
    class="sm:px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full flex justify-center items-center mt-5"
    data-aos="fade-down"
    data-aos-delay="300"
    data-aos-duration="1000"
    data-aos-easing="fade-up"
  >
    <div class="sm:w-full sm:flex-col md:w-full lg:w-full xl:w-full 2xl:w-full w-4/6 flex gap-5">
      <div class="relative flex w-full rounded-xl bg-[#252141] bg-opacity-50">
        <div class="p-[24px]">
          <h5
            class="sm:text-[16px] mb-2 block text-[20px] font-regular leading-snug text-white antialiased"
          >
            Com base nessas informações entendemos que
            <span class="text-[#C3D600] font-semibold"
              >150 mil consumidores ativos de informação na rede social são suficientes para
              alcançar o mercado inteiro</span
            >.
          </h5>
          <apexchart
            type="bar"
            height="450"
            :options="entireMarketchartOptions"
            :series="entireMarket"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
