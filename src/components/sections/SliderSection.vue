<template>
  <section
    id="slider"
    class="slider-section"
  >
    <div class="container">
      <Splide :options="options">
        <SplideSlide
          v-for="(item, index) in sliderCards"
          :key="index"
        >
          <div class="slider-section__wrapper">
            <img
              :src="item.image"
              alt=""
              class="slider-section__image"
            >

            <div class="slider-section__content">
              <UiTag>
                Кому подойдет Lard Defender?
              </UiTag>

              <div class="slider-section__info">
                <h4 class="slider-section__title">
                  {{ item.title }}
                </h4>

                <p class="slider-section__text">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import UiTag from '../ui/UiTag.vue'

import image1 from '../../assets/Server-rafiki.svg'
import image2 from '../../assets/growth.svg'
import image3 from '../../assets/goout.svg'
import image4 from '../../assets/meditation.svg'

interface SliderCardParams {
  image: string
  title: string
  text: string
}

const sliderCards: SliderCardParams[] = [
  {
    image: image1,
    title: 'Уже столкнулись с проблемой кибербезопасности?',
    text: 'Срочно проанализируем вашу систему и подберем необходимое защитное ПО: закройте все уязвимости и отслеживайте возможные угрозы.',
  },
  {
    image: image2,
    title: 'Взрывной рост бизнеса привлекает внимание злоумышленников?',
    text: 'Не дадим ценной информации попасть в руки недоброжелателей: мгновенно стирайте ее с носителей и восстанавливайте за пару кликов.',
  },
  {
    image: image3,
    title: 'Лояльность сотрудников вызывает сомнения?',
    text: 'Внедрим ПО для защиты от утечек. Больше не беспокойтесь о безопасности ваших данных — попытки выкрасть информацию будут предотвращены.',
  },
  {
    image: image4,
    title: 'IT-отдел не справляется? Внедрять сервисы киберзащиты сложно?',
    text: 'Интегрируем самые передовые решения без привлечения ваших кадровых ресурсов.',
  }
]

const options = {
  rewind: true,
  gap: '1rem',
  autoplay: true,
  interval: 2500,
  pauseOnHover: false
}
</script>

<style lang="scss">
.slider-section {
  width: 100%;
  box-sizing: border-box;
  padding: 130px 80px 80px 80px;
  background-color: #F5F5F5;

  @media screen and (max-width: 650px) {
    padding: 130px 16px 50px 16px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: minmax(300px, 500px) 1fr;
    align-items: center;
    justify-content: center;
    column-gap: 96px;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column-reverse;
      row-gap: 12px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    @media screen and (max-width: 1024px) {
      max-width: 500px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @media screen and (max-width: 650px) {
      row-gap: 18px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    @media screen and (max-width: 650px) {
      row-gap: 28px;
    }
  }

  &__title {
    color: #000F2B;
    font-family: Inter;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    max-width: 670px;

    @media screen and (max-width: 650px) {
      font-size: 22px;
    }
  }

  &__text {
    color: #868686;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    max-width: 684px;

    @media screen and (max-width: 650px) {
      font-size: 14px;
    }
  }

  .splide__arrow {
    border-radius: 8px;
    border: 1px solid #E4E3E3;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: 48px;
    padding: 6px 12px;

    @media screen and (max-width: 650px) {
      display: none;
    }

    svg {
      width: 24px !important;
      height: 24px !important;
    }

    &--next {
      right: -3em;
    }

    &--prev {
      left: -3em;
    }
  }

  .splide__pagination {
    bottom: -1em;
    column-gap: 6px;

    &__page {
      width: 12px;
      height: 12px;
      background-color: #D9D9D9;

      @media screen and (max-width: 650px) {
        width: 8px;
        height: 8px;
      }

      &.is-active {
        background-color: #000F2B;
      }
    }
  }
}
</style>
