<template>
  <section
    id="anchor"
    class="anchor-section"
  >
    <div class="anchor-section__container container">
      <h3 class="anchor-section__title">
        Обезопасьте свой бизнес сейчас!
      </h3>

      <div class="anchor-section__wrapper">
        <img
          src="../../assets/shield-big.svg"
          alt="Anchor"
          class="anchor-section__image"
        >

        <UiButton
          view="extra"
          size="large"
          class="anchor-section__button"
          :is-expanded="true"
          @click="scrollToElementById('contacts')"
        >
          Оставить заявку

          <img
            src="../../assets/arrow_purple.svg"
            alt="arrow"
            class="anchor-section__icon"
          >
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from '../ui/UiButton.vue'

import { scrollToElementById } from '../../utils/scroll-to-element'
</script>

<style lang="scss" scoped>
.anchor-section {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  background-color: rgba(132, 36, 222, 1);
  border-radius: 16px;
  padding: 0 80px;
  margin: 100px 0;

  @media screen and (max-width: 649px) {
    height: fit-content;
    padding: 28px 16px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;

    @media screen and (max-width: 649px) {
      flex-direction: column;
      row-gap: 28px;
    }
  }

  &__title {
    color: #fff;
    font-size: 48px;
    font-family: Inter;
    font-weight: 700;
    line-height: 57.60px;

    @media screen and (max-width: 1280px) {
      font-size: 32px;
      line-height: 120%;
    }

    @media screen and (max-width: 649px) {
      font-size: 22px;
      line-height: 120%;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    column-gap: 35px;

    @media screen and (max-width: 649px) {
      width: 100%;
    }
  }

  &__image {
    margin-bottom: 15px;
    width: 150.99px;
    height: 176.1px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  &__button {
    @media screen and (min-width: 650px) {
      max-width: 200px;
    }
  }

  &__icon {
    width: 16px;
    height: 20px;
  }
}
</style>
