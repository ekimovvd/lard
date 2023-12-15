<script setup lang="ts">
import { navElement } from '../types'

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
        offsetTop: 200,
        mobileOffsetTop: 0
    },
    {
        title: 'Доп. услуги',
        link: 'solutions',
        offsetTop: 60,
        mobileOffsetTop: 0
    },
]

const scrollToElement = (elementId: string, offset: number) => {
    const element = document.getElementById(elementId);
    console.log(elementId)
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer-header">
                <div class="footer-header__contacts">
                    <span class="email">it@lard.team</span>
                    <span class="phone-number">+7 812 302 99 90</span>
                </div>
                <img src="../assets/logo-footer.svg" alt="logo" class="logo-wrapper">
            </div>
            <div class="utils">
                <ul class="utils-left__list">
                    <li  v-for='item in navbar' @click="scrollToElement(item.link, item.offsetTop)" class="utils__list-item">{{item.title}}</li>
                </ul>
                <ul class="utils-right__list">
                    <a href='https://lard.team/directions/autsorsing' class="utils__list-item">IT - аутсорсинг</a>
                    <a href='https://lard.team/directions/it-infrastruktura' class="utils__list-item">IT - инфраструктура</a>
                    <a href='https://lard.team/directions/bezopasnost-sistem-i-dannyh' class="utils__list-item">Информационная безопасность</a>
                </ul>
            </div>
            <div class="logo-wrapper_mobile">
                <img src="../assets/logo-footer.svg" alt="logo" class="logo_mobile">
            </div>
            <div class="footer-footer">
                <div class="link-wrapper">
                    <div class="tg-wrapper">
                        <img src="../assets/tg-footer.svg" alt="tg" class="tg-img">
                        <a href="https://t.me/lard_digital" class="tg-link">Наш канал Telegram</a>
                    </div>
                    <div class="site-wrapper">
                        <img src="../assets/world-footer.svg" alt="world" class="site-img">
                        <a href="https://lard.team/integrator/" class="site-link">Наш сайт</a>
                    </div>
                </div>
                <div class="data-wrapper">
                    <p class="data-text">
                        ©2023 ООО «ЛАРД»
                    </p>
                    <p class="data-text">
                        ИНН 7842184337 | КПП 784201001
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 44px 0;
}

.footer__container {
    width: 1360px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    border-radius: 16px;
    background: url(../assets/footer-bg.png) center no-repeat;
    background-size: cover;
    flex-wrap: wrap;
    padding-left: 40px;
    box-sizing: border-box;
}

.footer-header {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    align-items: center;
    margin-top: 37px;
}

.footer-header__contacts {
    width: 557px;
    display: flex;
    justify-content: space-between;
}

.email {
    color: white;
    font-size: 36px;
    font-family: Inter;
    font-weight: 400;
    margin: 0;
}

.phone-number {
    color: white;
    font-size: 36px;
    font-family: Inter;
    font-weight: 400;
    margin: 0;
}

.logo-wrapper {
    width: 183px;
}
.logo-wrapper_mobile {
    display: none;
}

.logo-img {
    width: 51px;
    height: 53px;
}

.utils {
    display: flex;
    justify-content: space-between;
    width: 368px;
    margin-top: 33px;
    margin-left: 252px;
}

.utils-left__list {
    margin: 0;
    list-style-type: none;
    width: 152px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 0;
}

.utils-right__list {
    margin: 0;
    list-style-type: none;
    width: 181px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 0;
    height: 120px;
}

.utils-right__list .utils__list-item:first-child {
    margin-top: 0;
}

.utils__list-item {
    color: #EBEBEB;
    font-size: 18px;
    font-family: Inter;
    font-weight: 300;
    margin-top: 19px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
}
.utils__list-item:hover {
    box-shadow: 0px 1px 0px 0px #EBEBEB;
}
.utils__list-item:first-child {
    margin-top: 0px;
}

.footer-footer {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
    border-top: 1px solid rgba(245, 245, 245, 0.2);
    padding-top: 28px;
    padding-bottom: 39px;
}

.link-wrapper {
    width: 353px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 17px;
}

.tg-wrapper {
    width: 194px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tg-img {
    width: 20px;
    height: 17px;
}

.tg-link {
    color: #EBEBEB;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    text-decoration: none;
}
.tg-link:hover {
    box-shadow: 0px 1px 0px 0px #EBEBEB;
}

.site-wrapper {
    width: 109px;
    display: flex;
    justify-content: space-between;
}

.site-img {
    width: 20px;
    height: 20px;
}

.site-link {
    color: #EBEBEB;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    text-decoration: none;
}
.site-link:hover {
    box-shadow: 0px 1px 0px 0px #EBEBEB;
}
.data-wrapper {
    width: 462px;
    display: flex;
    justify-content: space-between;
    height: 17px;
}

.data-text {
    color: #EBEBEB;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    line-height: 22.40px;
    margin-top: 0;
    margin-bottom: 0;
}

@media screen and (max-width: 576px) {
    .footer {
        box-sizing: border-box;
        background: url(../assets/footer-bg_mobile.png) center no-repeat;
        background-size: 100% 100%;
        padding-top: 0;
        width: calc(100vw - 32px);
        margin: 50px auto 0 auto;
        box-sizing: border-box;
        border-radius: 16px;
        padding-bottom: 33px;
    }

    .footer__container {
        width: 100%;
        padding-top: 0px;
        padding-left: 16px;
        background: none;
        box-sizing: border-box;
    }

    .footer-header {
        margin-top: 0;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
    }

    .footer-header__contacts {
        width: 220px;
        display: block;
    }

    .email {
        font-family: Inter;
        font-size: 26px;
        font-weight: 500;
        line-height: 70px;
        letter-spacing: 0px;
        text-align: left;
        display: block;
    }

    .phone-number {
        font-family: Inter;
        font-size: 26px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.1px;
        text-align: left;
        display: block;
    }

    .logo-wrapper {
        display: none;
    }
    .logo-wrapper_mobile {
       width: 100%;
       display: block;
    }
    .logo_mobile {
        width: 131px;
        height: 36px;
        margin-top: 25px;
    }

    .utils {
        width: 160px;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 21px;
        margin-left: 0;
    }

    .utils__list-item {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        letter-spacing: 0.1px;
        text-align: left;
        width: 100%;
        margin-top: 14px;
    }

    .utils__list-item:first-child {
        margin-top: 0px;
    }

    .utils-left__list {
        width: 160px;
    }

    .utils-right__list {
        width: 160px;
        margin-top: 14px;
    }

    .footer-footer {
        width: 95%;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-bottom: 0;
        margin-top: 31px;
        padding-top: 10px;
    }

    .link-wrapper {
        width: 182px;
        justify-content: flex-start;
        flex-wrap: wrap;
        height: initial;
    }

    .tg-img {
        width: 18px;
        height: 16px;
    }

    .tg-link {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 43px;
        letter-spacing: 0.1px;
        text-align: center;
        align-items: center;
    }

    .site-wrapper {
        width: 102px;
        align-items: center;
    }

    .site-img {
        width: 20px;
        height: 20px;
    }

    .site-link {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 43px;
        letter-spacing: 0.1px;
        text-align: center;
    }

    .data-wrapper {
        width: 255px;
        height: 50px;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .data-text {
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 4px;
        letter-spacing: 0.1px;
        text-align: right;
        margin-top: 28px;
    }

    .data-text:first-child {
        margin-top: 0;
    }
}
</style>
