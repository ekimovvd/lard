<script setup lang="ts">
import { navElement } from '../types'
import { Ref, ref, onMounted, onBeforeUnmount } from 'vue'

import { scrollLock } from '../utils/scroll-lock'

const isButtonPressed: Ref<boolean> = ref(false)

const navbar: navElement[] = [
    {
        title: 'Проблема',
        link: 'slider',
        offsetTop: 145,
        mobileOffsetTop: 0
    },
    {
        title: 'Как это работает',
        link: 'features',
        offsetTop: 65,
        mobileOffsetTop: 0
    },
    {
        title: 'Тарифы',
        link: 'tariffs',
        offsetTop: 70,
        mobileOffsetTop: 0
    },
    {
        title: 'Доп. услуги',
        link: 'security',
        offsetTop: 90,
        mobileOffsetTop: 0
    },
]
const scrollToElement = (elementId: string, offset: number, device: string = 'desktop') => {
    if (device === 'mobile') {
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
        }else {
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

const isMenuMobileOpen: Ref<boolean> = ref(false)

const toggleMenu = () => {
    isMenuMobileOpen.value = !isMenuMobileOpen.value

    scrollLock(isMenuMobileOpen.value)
}
const scrolledDown: Ref<boolean> = ref(false)
const scrolledUp: Ref<boolean> = ref(false)
const lastScrollPosition: Ref<number> = ref(window.scrollY)

const handleScroll = () => {
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

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header :class="{ 'header-hidden': scrolledDown, 'header-visible': scrolledUp }" class="header">
        <div class="header__container">
            <img src="../assets/logo.svg" alt="logo" class="logo">

            <nav class="nav">
                <span v-for="item in navbar" class="nav-link" @click="scrollToElement(item.link, item.offsetTop)">
                    {{ item.title }}
                </span>
            </nav>

            <div class="contacts-wrapper">
                <div class="tg-wrapper">
                    <img src="../assets/tg.svg" alt="tg" class="tg-img">
                    <a href="https://t.me/lard_digital" target="_blank" class="tg-link">Telegram</a>
                </div>
                <a @click="scrollToElement('callback', 50)" :class="isButtonPressed ? 'button_active' : ''" class="button">Оставить заявку</a>
            </div>

            <img v-show="!isMenuMobileOpen" @click='toggleMenu' src="../assets/burger_mobile.svg" alt="burger"
                class="burger_mobile">

            <img v-show="isMenuMobileOpen" @click='toggleMenu' src="../assets/close-menu_mobile.svg" alt="close"
                class="close-burger_mobile">

            <div v-show="isMenuMobileOpen" class="nav-wrapper_mobile">
                <nav class="nav_mobile">
                    <div v-for="item in navbar" class="nav-link_mobile" @click="scrollToElement(item.link, item.mobileOffsetTop, 'mobile')">
                        {{ item.title }}
                    </div>
                </nav>
                <div v-show="isMenuMobileOpen" class="contacts-wrapper_mobile">
                    <a @click="scrollToElement('callback', 50, 'mobile')" :class="isButtonPressed ? 'button_active' : ''" class="button">Оставить заявку</a>
                    <div class="tg-wrapper">
                        <img src="../assets/tg.svg" alt="tg" class="tg-img">
                        <a href="https://t.me/lard_digital" target="_blank" class="tg-link">Наш Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 28px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 8px 28px 4px rgba(0, 15, 43, 0.05);
    z-index: 20;
    transition: transform .7s;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    left: 0;
    right: 0;
}

.header__container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 183px;
    height: 50px;
}

.nav {
    width: 511px;
    display: flex;
    justify-content: space-between;
}

.header-hidden {
    transform: translateY(-117px);
}

.header-visible {
    transform: translateY(0);
}

.nav-link {
    color: #868686;
    font-size: 18px;
    font-family: Inter;
    font-weight: 300;
    line-height: 25.20px;
    text-decoration: none;
    cursor: pointer;
}
.nav-link:hover {
    box-shadow: 0px 1px 0px 0px #868686;
}

.contacts-wrapper {
    width: 331px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tg-wrapper {
    width: 106px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tg-link:hover {
    box-shadow: 0px 1px 0px 0px rgba(132, 36, 222, 1)
}

.tg-img {
    width: 20px;
    height: 17px;
}

.tg-link {
    color: rgba(132, 36, 222, 1);
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    text-decoration: none;
}

.button {
    text-decoration: none;
    color: rgba(132, 36, 222, 1);
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    width: 197px;
    height: 48px;
    background-color: rgba(132, 36, 222, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
}
.button_active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(132, 36, 222, 1);
}
.button:active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(132, 36, 222, 1);
}

.burger_mobile {
    display: none;
}

.nav_mobile {
    display: none;
}

.close-burger_mobile {
    display: none;
}

.contacts-wrapper_mobile {
    display: none;
}

@media screen and (max-width: 1023px) {
    .header {
        width: 100vw;
        top: 0;
        left: 0;
        margin: 0;
    }

    .header__container {
        width: 90vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .logo {
        width: 124px;
        height: 34px;
    }

    .nav {
        display: none;
    }

    .contacts-wrapper {
        display: none;
    }

    .burger_mobile {
        display: block;
    }

    .nav-wrapper_mobile {
        width: 100vw;
        z-index: 21;
        display: block;
        position: fixed;
        background-color: #fff;
        top: 75px;
        left: 0;
        height: 100vh;
    }

    .nav_mobile {
        display: block;
        position: fixed;
        top: 116px;
        left: 50vw;
        margin-left: -67.5px;
        width: 135px;
        background-color: #fff;
    }

    .close-burger_mobile {
        display: block;
    }

    .contacts-wrapper_mobile {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        top: 352px;
        position: fixed;
        left: 50vw;
        margin-left: -144px;
        width: 288px;
    }

    .tg-wrapper {
        margin-top: 34px;
        width: 144px;
    }

    .nav-link_mobile {
        color: #868686;
        font-size: 16px;
        font-family: Inter;
        font-weight: 300;
        line-height: 25.20px;
        text-decoration: none;
        cursor: pointer;
        text-align: center;
        margin-top: 28px;
    }

    .nav-link_mobile:first-child {
        margin-top: 0;
    }
}
</style>
