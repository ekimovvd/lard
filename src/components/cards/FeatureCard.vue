<template>
  <div
    class="feature-card"
    :class="{ [`feature-card--view-${card.view}`]: card.view }"
  >
    <div
      v-if="!isCardViewExtra"
      class="feature-card__icon"
    >
      <img
        :src="card.image"
        alt="Icon"
        class="feature-card__image"
      >
    </div>

    <div class="feature-card__content">
      <h6 class="feature-card__title">
        {{ card.title }}
      </h6>

      <div
        v-if="!isCardViewExtra"
        class="feature-card__info"
      >
        <p class="feature-card__text">
          {{ card.firstText }}
        </p>

        <p class="feature-card__text">
          {{ card.secondText }}
        </p>
      </div>

      <ul class="feature-card__list">
        <li
          v-for="(item, index) in card.texts"
          :key="index"
          class="feature-card__item"
        >
          <img
            src="../../assets/marker.svg"
            alt=""
            class="feature-card__icon-small"
          >

          <span class="feature-card__label">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

import { FeatureCardParams } from '../../shared/constants'

interface Props {
  card: FeatureCardParams
}

const props = defineProps<Props>()

const isCardViewExtra = computed(() => props.card.view === 'extra')
</script>

<style lang="scss" scoped>
.feature-card {
  border-radius: 16px;
  padding: 24px 28px;
  flex-grow: 2;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media screen and (max-width: 649px) {
    row-gap: 16px;
    padding: 16px 12px 20px 16px;
    max-width: initial;
  }

  &--view {
    &-default {
      border: 1px solid #EBEBEB;
      background-color: #F5F5F5;
    }

    &-extra {
      border: 1px solid #EBEBEB;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 35px 15px 36px;
    border-radius: 12px;
    border: 1px solid #EBEBEB;
    background-color: #fff;
    width: fit-content;

    @media screen and (max-width: 649px) {
      padding: 12px 24px;
      border-radius: 8px;
    }
  }

  &__image {
    width: 58px;
    height: 58px;
    object-fit: none;

    @media screen and (max-width: 649px) {
      width: 39px;
      height: 39px;
      object-fit: contain;
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
    line-height: 130%;
    max-width: 340px;

    @media screen and (max-width: 649px) {
      font-size: 15px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (max-width: 649px) {
      row-gap: 15px;
    }
  }

  &__text {
    color: #868686;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    max-width: 320px;

    @media screen and (max-width: 649px) {
      font-size: 14px;
      max-width: initial;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media screen and (max-width: 649px) {
      row-gap: 16px;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 18px 1fr;
    column-gap: 12px;

    @media screen and (max-width: 649px) {
      column-gap: 8px;
    }
  }

  &__label {
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
}
</style>
