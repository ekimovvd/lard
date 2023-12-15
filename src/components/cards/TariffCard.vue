<template>
  <div
    class="tariff-card"
    :class="{ [`tariff-card tariff-card--view-${card.view}`]: card.view }"
  >
    <div class="tariff-card__icon">
      <img
        :src="card.image"
        alt="Icon"
        class="tariff-card__image"
      >
    </div>

    <div class="tariff-card__content">
      <h5 class="tariff-card__title">
        {{ card.title }}
      </h5>

      <p class="tariff-card__text">
        {{ card.text }}
      </p>
    </div>

    <button
      class="tariff-card__button"
      @click="scrollToElementById('contacts')"
    >
      {{ card.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { TariffCardParams } from '../../shared/constants'

import { scrollToElementById } from '../../utils/scroll-to-element'

interface Props {
  card: TariffCardParams
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.tariff-card {
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #EBEBEB;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  row-gap: 32px;
  max-width: 360px;

  @media screen and (max-width: 649px) {
    padding: 16px;
    row-gap: 20px;
  }

  &--view {
    &-extra {
      background-color: #000F2B;

      .tariff-card {
        &__icon {
          background-color: #fff;
        }

        &__title {
          color: #fff;
        }

        &__text {
          color: #E1E1E1;
        }

        &__button {
          border: 1px solid #EBEBEB;
          background-color: #FFF;
        }
      }
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 35px 15px 36px;
    border-radius: 12px;
    background-color: rgba(132, 36, 222, 0.10);
    width: fit-content;

    @media screen and (max-width: 649px) {
      padding: 11px 16px;
    }
  }

  &__image {
    width: 58px;
    height: 58px;

    @media screen and (max-width: 649px) {
      width: 39px;
      height: 39px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @media screen and (max-width: 649px) {
      row-gap: 16px;
    }
  }

  &__title {
    color: #000F2B;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media screen and (max-width: 649px) {
      font-size: 15px;
    }
  }

  &__text {
    max-width: 350px;
    color: #868686;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }
  }

  &__button {
    outline: none;
    border: none;
    display: flex;
    height: 48px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    border: 1px solid #EBEBEB;
    background-color: #F5F5F5;
    margin-top: auto;
    color: #8424DE;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;

    @media screen and (max-width: 649px) {
      font-size: 14px;
      line-height: 38px;
    }
  }
}
</style>
