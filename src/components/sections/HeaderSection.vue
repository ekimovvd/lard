<template>
  <header
    class="header-section"
    :class="{ 'header-hidden': scrolledDown, 'header-visible': scrolledUp, 'header-section--opened': isMenuMobileOpen }"
  >
    <div
      class="header-section__container container-lg"
      :class="{ 'header-section__container--opened': isMenuMobileOpen }"
    >
      <img
        src="../../assets/logo.svg"
        alt="logo"
        class="header-section__logo"
      >

      <nav class="header-section__list">
        <span
          v-for="(item, index) in navbarElements"
          :key="index"
          class="header-section__link"
          @click="scrollToElement(item.href, item.offsetTop)"
        >
          {{ item.title }}
        </span>
      </nav>

      <div class="header-section__contacts">
        <a
          href="https://t.me/lard_digital"
          target="_blank"
          class="header-section__telegram"
        >
          <img
            src="../../assets/tg.svg"
            alt="Telegram"
          >

          Telegram
        </a>

        <UiButton
          view="primary"
          size="large"
          class="header-section__button"
          :is-expanded="true"
          @click="scrollToElement('contacts', 50)"
        >
          Оставить заявку
        </UiButton>
      </div>

      <img
        v-show="!isMenuMobileOpen"
        src="../../assets/burger_mobile.svg"
        alt="burger"
        class="header-section__burger-icon"
        @click='toggleMenu'
      >

      <img
        v-show="isMenuMobileOpen"
        @click='toggleMenu'
        src="../../assets/close-menu_mobile.svg"
        alt="close"
        class="header-section__burger-icon"
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted, onBeforeUnmount } from 'vue'

import UiButton from '../ui/UiButton.vue'

import { scrollLock } from '../../utils/scroll-lock'

interface NavbarElementParams {
  title: string
  href: string
  offsetTop: number
  mobileOffsetTop: number
}

const navbarElements: NavbarElementParams[] = [
  {
    title: 'Проблема',
    href: 'slider',
    offsetTop: 145,
    mobileOffsetTop: 0
  },
  {
    title: 'Как это работает',
    href: 'features',
    offsetTop: 65,
    mobileOffsetTop: 0
  },
  {
    title: 'Тарифы',
    href: 'tariffs',
    offsetTop: 70,
    mobileOffsetTop: 0
  },
  {
    title: 'Доп. услуги',
    href: 'security',
    offsetTop: 90,
    mobileOffsetTop: 0
  }
]

const scrolledDown: Ref<boolean> = ref(false)
const scrolledUp: Ref<boolean> = ref(false)
const lastScrollPosition: Ref<number> = ref(window.scrollY)

const isMenuMobileOpen: Ref<boolean> = ref(false)
const isButtonPressed: Ref<boolean> = ref(false)

const handleScroll = (): void => {
  const scrollPosition = window.scrollY

  if (scrollPosition > lastScrollPosition.value && scrollPosition > 117) {
      scrolledDown.value = true
      scrolledUp.value = false
  } else {
      scrolledDown.value = false
      scrolledUp.value = true
  }

  lastScrollPosition.value = scrollPosition
}

const toggleMenu = () => {
    isMenuMobileOpen.value = !isMenuMobileOpen.value

    scrollLock(isMenuMobileOpen.value)
}

const scrollToElement = (elementId: string, offset: number, device: string = 'desktop') => {
  if (device === 'mobile' || isMenuMobileOpen.value) {
    toggleMenu()
  }

  isButtonPressed.value = true

  const element = document.getElementById(elementId);

  if (element) {
    if (device === 'mobile') {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }

  setTimeout(() => {
    isButtonPressed.value = false
  }, 500)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header-section {
  width: 100%;
  box-sizing: border-box;
  padding: 0 80px;
  position: sticky;
  top: 28px;
  z-index: 2;
  left: 0;
  right: 0;
  transition: transform .35s;

  @media screen and (max-width: 649px) {
    top: 0;
    padding: 0;
  }

  &.header-hidden {
    transform: translateY(-117px);
  }

  &.header-visible {
    transform: translateY(0);
  }

  &--opened {
    position: fixed;
    top: 0;
    padding: 0;
    width: 100vw;
    z-index: 21;

    .header-section {
      &__container {
        background-color: #fff;
        height: 100vh;
        border-radius: 0;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 0 0 16px 16px;
      }

      &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        row-gap: 28px;
        margin-top: 68px;
      }

      &__link {
        font-size: 16px;
        line-height: 140%;
      }

      &__contacts {
        flex-direction: column-reverse;
        row-gap: 32px;
        width: 100%;
        margin-top: inherit;
        margin-bottom: 100px;
        margin-top: 64px;
      }

      &__button {
        display: flex;
        max-width: initial;
      }

      &__telegram {
        display: flex;
        align-items: center;
        column-gap: 14px;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        color: #8424DE;

        &:hover {
          text-decoration: underline;
        }
      }

      &__burger-icon {
        position: absolute;
        top: 26px;
        right: 16px;
      }
    }
  }

  &__container {
    border-radius: 16px;
    background-color: #FFF;
    box-shadow: 0px 8px 28px 4px rgba(0, 15, 43, 0.05);
    height: 89px;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;

    @media screen and (max-width: 649px) {
      padding: 16px;
      height: 68px;
      border-radius: 0;
    }
  }

  &__logo {
    object-fit: cover;

    @media screen and (max-width: 1024px) {
      max-width: 150px;
    }

    @media screen and (max-width: 649px) {
      width: 100%;
      max-width: 125px;
    }
  }

  &__list {
    display: none;

    @media screen and (min-width: 1280px) {
      display: flex;

      display: flex;
      align-items: center;
      column-gap: 32px;
    }
  }

  &__link {
    color: #868686;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    column-gap: 28px;
  }

  &__telegram {
    display: none;

    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      column-gap: 14px;
      color: #8424DE;
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__button {
    display: none;

    @media screen and (min-width: 1024px) {
      display: flex;
      max-width: 210px;
    }
  }

  &__burger-icon {
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }
}
</style>
