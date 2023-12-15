<template>
  <section
    id="about"
    class="about-section"
  >
    <div class="about-section__container container">
      <div class="about-section__content">
        <h2 class="about-section__title">
          {{ displayedTitle }}
        </h2>

        <p class="about-section__text">
          Профессиональное внедрение защиты от любых киберугроз, не требующее ваших внутренних ресурсов
        </p>

        <UiButton
          view="default"
          size="large"
          class="about-section__button"
          :is-expanded="true"
          @click="scrollToElementById('contacts')"
        >
          Попробовать

          <img
            src="../../assets/arrow.svg"
            alt="arrow"
            class="about-section__icon"
          >
        </UiButton>
      </div>

      <img
        src="../../assets/main.svg"
        alt="main"
        class="about-section__image"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import UiButton from '../ui/UiButton.vue'

import { scrollToElementById } from '../../utils/scroll-to-element'

const displayedTitle = computed<string>(() => {
  const currentQueryParams = getQueryParams();
  const currentQueryAttribute: string = currentQueryParams['landing']

  const titleAttributes: Record<string, string> = {
    businessprotection: 'Внедрим систему защиты информации вашего бизнеса',
    dataleak: 'Защитим бизнес от утечки информации',
    unauthorized: 'Защитим ваши информационные системы от несанкционированного доступа',
    cyberprotection: 'Внедрим решения по кибербезопасности вашего бизнеса',
    messenger: 'Внедрим защищенный месенджер на базе новейшего протокола MATRIX',
    vpn: 'Внедрим решения по защите данных с корпоративным VPN',
    email: 'Внедрим решения по защите данных с корпоративным email',
    services: 'Окажем услуги по информационной безопасности',
    audit: 'Проведем полный аудит информационной безопасности бизнеса',
    inspection: 'Оказываем техническую поддержку при проверках',
    removal: 'Спасём ваши данные данные при изъятии техники',
  }

  return currentQueryAttribute ? titleAttributes[currentQueryAttribute] : "Внедрим проверенные решения для защиты данных";
})

function getQueryParams(): Record<string, string> {
  const queryParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  for (const [key, value] of queryParams) {
    params[key] = value;
  }

  return params;
}
</script>

<style lang="scss" scoped>
.about-section {
  width: 100%;
  box-sizing: border-box;
  padding: 158px 80px 67px 80px;

  @media screen and (max-width: 649px) {
    padding: 50px 16px 30px 16px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 500px);
    align-items: center;
    column-gap: 28px;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    @media screen and (max-width: 649px) {
      row-gap: 24px;
    }
  }

  &__title {
    color: #333333;
    font-size: 56px;
    font-family: Inter;
    font-weight: 700;
    line-height: 71.68px;
    word-wrap: break-word;

    @media screen and (max-width: 649px) {
      font-size: 23px;
      line-height: 120%;
    }
  }

  &__text {
    letter-spacing: 0.1px;
    color: #868686;
    font-size: 24px;
    font-family: Inter;
    font-weight: 300;
    line-height: 33.60px;
    word-wrap: break-word;

    @media screen and (max-width: 649px) {
      font-size: 14px;
      line-height: 140%;
    }
  }

  &__button {
    @media screen and (min-width: 650px) {
      max-width: 200px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      max-width: 500px;
    }
  }
}
</style>
