<template>
  <footer
    id="footer"
    class="footer-section"
  >
    <div class="footer-section__container container-lg">
      <div class="footer-section__top">
        <div class="footer-section__content">
          <a
            class="footer-section__title"
            href="mailto:it@lard.team"
          >
            it@lard.team
          </a>

          <div class="footer-section__wrapper">
            <a
              class="footer-section__title"
              href="tel:+78123029990"
            >
              +7 812 302 99 90
            </a>

            <div class="footer-section__lists">
              <ul class="footer-section__list">
                <li
                  v-for="(item, index) in firstFooterLinks"
                  :key="index"
                >
                  <a
                    class="footer-section__link"
                    @click="scrollToElementById(item.href)"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>

              <ul class="footer-section__list">
                <li
                  v-for="(item, index) in secondFooterLinks"
                  :key="index"
                >
                  <a
                    class="footer-section__link"
                    target="_blank"
                    :href="item.href"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src="../../assets/logo-footer.svg"
          alt="logo"
          class="footer-section__logo"
        >
      </div>

      <div class="footer-section__bottom">
        <div class="footer-section__inner-left">
          <a
            class="footer-section__label"
            href="https://t.me/lard_digital"
            target="_blank"
          >
            <img
              src="../../assets/tg-footer.svg"
              alt="tg"
            >

            Наш канал Telegram
          </a>

          <a
            class="footer-section__label"
            href="https://lard.team/integrator/"
            target="_blank"
          >
            <img
              src="../../assets/world-footer.svg"
              alt="world"
            >

            Наш сайт
          </a>
        </div>

        <div class="footer-section__inner-right">
          <span class="footer-section__label footer-section__label--no-hover">
            ©2023 ООО «ЛАРД»
          </span>

          <span class="footer-section__label footer-section__label--no-hover">
            ИНН 7842184337 | КПП 784201001
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { scrollToElementById } from '../../utils/scroll-to-element'

interface FooterLinkParams {
  title: string
  href: string
}

const firstFooterLinks: FooterLinkParams[] = [
  { title: 'Проблема', href: 'slider' },
  { title: 'Как это работает', href: 'features' },
  { title: 'Тарифы', href: 'tariffs' },
  { title: 'Доп. услуги', href: 'security' }
]

const secondFooterLinks: FooterLinkParams[] = [
  { title: 'IT - аутсорсинг', href: 'https://lard.team/directions/autsorsing' },
  { title: 'IT - инфраструктура', href: 'https://lard.team/directions/it-infrastruktura' },
  { title: 'Информационная безопасность', href: 'https://lard.team/directions/bezopasnost-sistem-i-dannyh' }
]
</script>

<style lang="scss" scoped>
.footer-section {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 44px 40px;

  @media screen and (max-width: 649px) {
    padding: 50px 16px;
  }

  &__container {
    border-radius: 16px;
    background-color: #000F2B;
    background: url(../../assets/footer-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 44px 40px;

    @media screen and (max-width: 649px) {
      padding: 16px 16px 36px 16px;
    }
  }

  &__top {
    padding-bottom: 77px;
    position: relative;

    @media screen and (max-width: 649px) {
      padding-bottom: 31px;
    }
  }

  &__logo {
    position: absolute;
    right: 0;
    top: 0;
    object-fit: cover;

    @media screen and (max-width: 649px) {
      position: static;
      margin-top: 30px;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    column-gap: 32px;

    @media screen and (max-width: 649px) {
      flex-direction: column;
      row-gap: 24px;
    }
  }

  &__title {
    color: #fff;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;

    @media screen and (max-width: 649px) {
      font-size: 26px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    @media screen and (max-width: 649px) {
      row-gap: 32px;
    }
  }

  &__lists {
    display: flex;
    align-items: flex-start;
    column-gap: 36px;

    @media screen and (max-width: 649px) {
      flex-direction: column;
      column-gap: 0;
      row-gap: 24px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
    list-style: none;

    @media screen and (max-width: 649px) {
      row-gap: 24px;
    }
  }

  &__link {
    color: #EBEBEB;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;

    @media screen and (max-width: 649px) {
      font-size: 16px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    border-top: 1px solid rgba(245, 245, 245, 0.20);

    @media screen and (max-width: 649px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 32px;
    }
  }

  &__inner-left {
    display: flex;
    align-items: center;
    column-gap: 50px;

    @media screen and (max-width: 649px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 24px;
    }
  }

  &__inner-right {
    display: flex;
    align-items: center;
    column-gap: 28px;

    @media screen and (max-width: 649px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 24px;
    }
  }

  &__label {
    color: #EBEBEB;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    display: flex;
    align-items: center;
    column-gap: 14px;

    @media screen and (max-width: 649px) {
      font-size: 15px;
      line-height: 4px;
    }

    &:hover {
      text-decoration: underline;
    }

    &--no-hover {
      &:hover {
        text-decoration: initial;
      }
    }
  }
}
</style>
