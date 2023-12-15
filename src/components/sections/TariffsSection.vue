<template>
  <section
    id="tariffs"
    class="tariffs-section"
  >
    <div class="tariffs-section__container container">
      <div class="tariffs-section__header">
        <UiTag>
          Стоимость для бизнеса
        </UiTag>

        <div class="tariffs-section__content">
          <h2 class="tariffs-section__title">
            Тарифы на 1 год поддержки Lard Defender
          </h2>

          <p class="tariffs-section__description">
            Переходите с тарифа на тариф в любой момент, оплачивайте — потом!
          </p>
        </div>
      </div>

      <div class="tariffs-section__wrapper">
        <ul class="tariffs-section__list">
          <TariffCard
            v-for="(item, index) in tariffCards"
            :key="index"
            :card="item"
          />
        </ul>

        <p class="tariffs-section__note">
          *Цены указаны из расчета на 10 сотрудников в системе
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiTag from '../ui/UiTag.vue'

import TariffCard from '../cards/TariffCard.vue'

import { TariffCardParams } from '../../shared/constants'

import ShieldIcon from '../../assets/shield.svg'
import ShieldPlusIcon from '../../assets/shield-plus.svg'
import ShieldZapIcon from '../../assets/shield-zap.svg'

const tariffCards: TariffCardParams[] = [
  {
    image: ShieldIcon,
    title: 'Standard',
    text: 'Базовое решение для обеспечения безопасности данных с размещением на серверах лучших дата-центров мира.',
    buttonText: 'от 240 000 рублей',
    view: 'default'
  },
  {
    image: ShieldPlusIcon,
    title: 'Premium',
    text: 'Все, что входит в Standard, а также управление доступом в реальном времени: ограничивайте, удаляйте или выдавайте разрешения пользователям в любой момент.',
    buttonText: 'от 360 000 рублей',
    view: 'default'
  },
  {
    image: ShieldZapIcon,
    title: 'Exclusive',
    text: 'Свой VPN, предотвращение утечек данных, защищенные почта и мессенджер, полный контроль за пользователями и многое другое — подберем пакет решений, подходящих именно вам.',
    buttonText: 'Цена по запросу',
    view: 'extra'
  }
]
</script>

<style lang="scss" scoped>
.tariffs-section {
  width: 100%;
  box-sizing: border-box;
  background-color: #F5F5F5;
  padding: 100px 80px;

  @media screen and (max-width: 649px) {
    padding: 50px 16px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 56px;

    @media screen and (max-width: 649px) {
      row-gap: 24px;
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
    row-gap: 28px;

    @media screen and (max-width: 649px) {
      row-gap: 16px;
    }
  }

  &__list {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-flow: row wrap;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 649px) {
      gap: 16px;
    }
  }

  &__note {
    color: #868686;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media screen and (max-width: 649px) {
      font-size: 12px;
    }
  }
}
</style>
