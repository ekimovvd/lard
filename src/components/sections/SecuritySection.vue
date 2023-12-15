<template>
  <section
    id="security"
    class="security-section"
  >
    <div class="security-section__container container">
      <div class="security-section__header">
        <UiTag>
          Дополнительные услуги
        </UiTag>

        <div class="security-section__content">
          <h2 class="security-section__title">
            Наши решения для вашей безопасности
          </h2>

          <p class="security-section__description">
            Мы оказываем множество услуг по информационной безопасности и проведем аудит вашего бизнеса, чтобы подобрать подходящие именно вам.
          </p>
        </div>
      </div>

      <div class="security-section__wrapper">
        <ul class="security-section__list">
          <SecurityCard
            v-for="(item, index) in securityCards"
            :key="index"
            :card="item"
          />
        </ul>

        <UiButton
          view="default"
          size="large"
          class="security-section__button"
          :is-expanded="true"
          @click="scrollToElementById('contacts')"
        >
          Попробовать

          <img
            src="../../assets/arrow.svg"
            alt="arrow"
            class="security-section__icon"
          >
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiTag from '../ui/UiTag.vue'
import UiButton from '../ui/UiButton.vue'

import SecurityCard from '../cards/SecurityCard.vue'

import { SecurityCardParams } from '../../shared/constants'

import { scrollToElementById } from '../../utils/scroll-to-element'

const securityCards: SecurityCardParams[] = [
  {
    title: 'VPN',
    description: 'Виртуальная частная сеть'
  },
  {
    title: 'MAIL',
    description: 'Безопасная корпоративная почта'
  },
  {
    title: 'Messenger',
    description: 'Непробиваемая связь'
  },
  {
    title: 'MDM',
    description: 'Управление мобильными устройствами'
  },
  {
    title: 'DLP',
    description: 'Защита от внутренних угроз'
  },
  {
    title: 'Self-hosted Cloud',
    description: 'Личное облако для работы с данными'
  }
]
</script>

<style lang="scss" scoped>
.security-section {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 100px 80px;

  @media screen and (max-width: 649px) {
    padding: 50px 16px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 56px;

    @media screen and (max-width: 649px) {
      row-gap: 32px;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @media screen and (max-width: 649px) {
      row-gap: 18px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (max-width: 649px) {
      row-gap: 18px;
    }
  }

  &__title {
    color: #000F2B;
    font-family: Inter;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @media screen and (max-width: 649px) {
      font-size: 22px;
    }
  }

  &__description {
    color: #868686;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }

  &__list {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-flow: row wrap;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__button {
    @media screen and (min-width: 650px) {
      max-width: 233px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
