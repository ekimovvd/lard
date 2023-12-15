<template>
  <section
    id="features"
    class="features-section"
  >
    <div class="features-section__container container">
      <div class="features-section__header">
        <UiTag>
          Почему именно Lard Defender?
        </UiTag>

        <div class="features-section__content">
          <h2 class="features-section__title">
            Все для полной защиты в одном пакете услуг
          </h2>

          <p class="features-section__description">
            50+ клиентов уже уверены в их качестве
          </p>
        </div>
      </div>

      <ul class="features-section__list">
        <FeatureCard
          v-for="(item, index) in featureCards"
          :key="index"
          :card="item"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiTag from '../ui/UiTag.vue'

import FeatureCard from '../cards/FeatureCard.vue'

import { FeatureCardParams } from '../../shared/constants'

import CheckVerifiedIcon from '../../assets/check-verified.svg'
import FileVerifiedIcon from '../../assets/file-verified.svg'

const featureCards: FeatureCardParams[] = [
  {
    image: CheckVerifiedIcon,
    title: '10+ лет опыта в сфере кибербезопасности',
    firstText: 'Обеспечиваем сохранность данных и оптимизируем работу в 50+ компаниях-представителях крупного и среднего бизнеса в сферах от медицины до промышленности.',
    secondText: 'Среди наших партнеров ИТМО, Linx, XCOM-SHOP и другие крупные компании.',
    texts: [],
    view: 'default'
  },
  {
    image: FileVerifiedIcon,
    title: 'Делаем срочно, в том числе под 1С',
    firstText: 'Подбираем оптимальные решения именно под вашу корпоративную систему и уже установленное ПО, выполняем работу в сжатые сроки и учитываем все дополнительные пожелания, чтобы защита данных была максимально комфортной.',
    secondText: '',
    texts: [],
    view: 'default'
  },
  {
    image: FileVerifiedIcon,
    title: 'Что вы получаете, заказав пакет услуг Lard Defender?',
    firstText: '',
    secondText: '',
    texts: [
      'Полный контроль: быстрое стирание и восстановление данных с помощью удаленного доступа',
      'Экономию на обновлении рабочей техники: все мощности находятся на сервере',
      'Сокращение нагрузки на собственный IT-отдел: меньше задач по кибербезопасности, больше по непосредственной работе',
      'Работу без перебоев: вашим данным больше не страшны отключение электричества и неисправность техники'
    ],
    view: 'extra'
  }
]
</script>

<style lang="scss" scoped>
.features-section {
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
}
</style>
