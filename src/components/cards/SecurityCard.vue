<template>
  <span class="security-card">
    <p class="security-card__title">
      {{ card.title }}
    </p>

    <p class="security-card__text">
      {{ card.description }}
    </p>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { SecurityCardParams } from '../../shared/constants'

interface Props {
  card: SecurityCardParams
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.security-card {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid #EBEBEB;
  background-color: #F5F5F5;
  padding: 24px 15px 29px 20px;
  min-height: 190px;
  min-width: 190px;

  @media screen and (max-width: 649px) {
    padding: 16px 8px 16px 16px;
    row-gap: 14px;
    width: 100%;
    min-width: initial;
  }

  @media screen and (max-width: 480px) {
    min-width: initial;
    min-height: 110px;
  }

  &__title {
    background-image: linear-gradient(204deg, #8424DE 42.08%, #5B61E4 66.73%, #83D9FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 18px;
    font-family: Inter;
    font-weight: 700;

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }
  }

  &__text {
    color: #868686;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    max-width: 140px;

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }
  }
}
</style>
