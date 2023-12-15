<script setup lang="ts">
import { Ref, ref, computed } from 'vue'

const isButtonPressed: Ref<boolean> = ref(false)

const displayedTitle = computed<string>(() => {
    const currentQueryParams = getQueryParams();
    const currentQueryAttribute: string = currentQueryParams['landing']

    const titleAttributes: Record<string, string> = {
        businessprotection: 'Внедрим систему защиты информации вашего бизнеса',
        dataleak: 'Защитим бизнес от утечки информации',
        unauthorized: 'Защитим ваши информационные системы от несанкционированного доступа',
        cyberprotection: 'Внедрим решения по кибербезопасности вашего бизнеса',
        messenger: 'Внедрим защищенный месенджер на базе новейшего протокола MATRIX',
        vpn: 'Внедрим решения по защите данных с корпоративным VPN',
        email: 'Внедрим решения по защите данных с корпоративным email',
        services: 'Окажем услуги по информационной безопасности',
        audit: 'Проведем полный аудит информационной безопасности бизнеса',
        inspection: 'Оказываем техническую поддержку при проверках',
        removal: 'Спасём ваши данные данные при изъятии техники',
    }

    return currentQueryAttribute ? titleAttributes[currentQueryAttribute] : "Внедрим проверенные решения для защиты данных";
})

function getQueryParams(): Record<string, string> {
  const queryParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};

  for (const [key, value] of queryParams) {
    params[key] = value;
  }

  return params;
}

const scrollToElement = (elementId: string, offset: number) => {
    isButtonPressed.value = true
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
    setTimeout(() => {
        isButtonPressed.value = false
    }, 500)
}
</script>

<template>
    <section class="main">
        <div class="main__container">
            <div class="info">
                <h2 class="title">{{ displayedTitle }}</h2>
                <p class="text">
                    Профессиональное внедрение защиты от любых киберугроз, не требующее ваших внутренних ресурсов
                </p>
                <a @click="scrollToElement('callback', 50)" :class="isButtonPressed ? 'button_active' : ''" class="button">
                    <div class="button-wrapper">
                        <span class="button__text">Попробовать</span>
                        <img src="../assets/arrow.svg" alt="arrow" class="button__img">
                    </div>
                </a>
            </div>
            <img src="../assets/main.svg" alt="main" class="main__img">
        </div>
    </section>
</template>

<style scoped>
.main {
    width: 1279px;
    margin: 0 auto;
    margin-top: 158px;
}

.main__container {
    display: flex;
    justify-content: space-between;
}

.info {
    width: 818px;
    padding-top: 18px;
}

.title {
    color: #333333;
    font-size: 56px;
    font-family: Inter;
    font-weight: 700;
    line-height: 71.68px;
    word-wrap: break-word;
    width: 100%;
    margin-bottom: 8px;
}

.text {
    margin-top: 24px;
    letter-spacing: 0.1px;
    color: #868686;
    font-size: 24px;
    font-family: Inter;
    font-weight: 300;
    line-height: 33.60px;
    word-wrap: break-word;
    width: 738px;
}

.button {
    width: 158px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 24px;
    border-radius: 12px;
    background-color: rgba(132, 36, 222, 1);
    border: none;
    text-decoration: none;
    color: #fff;
    margin-top: 41px;
    cursor: pointer;
    transition: .3s;
}
.button:hover {
    background-color: rgba(140, 55, 220, 1);
    transition: .3s;
}

.button_active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(215, 215, 215, 1);
}
.button:active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(215, 215, 215, 1);
}

.button-wrapper {
    width: 158px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.button__text {
    color: white;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    word-wrap: break-word;
}

.button__img {
    width: 24px;
    height: 24px;
}

.main__img {
    width: 433px;
    height: 438px;
}

@media screen and (max-width: 576px) {
    .main {
        width: 100vw;
        margin: 65px auto 0 auto;
        display: flex;
        justify-content: center;
    }

    .main__container {
        width: calc(100vw - 32px);
        justify-content: center;
        flex-wrap: wrap;
        margin-left: 16px;
        margin-right: 16px;
    }

    .info {
        width: 100%;
    }

    .title {
        font-family: Inter;
        font-size: 23px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0.1px;
        text-align: left;
        width: 100%;
    }

    .text {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        width: 100%;
        margin-top: 12px;
    }

    .button {
        width: 100%;
        padding-left: 76px;
        padding-right: 73px;
        box-sizing: border-box;
        margin-top: 26px;
        letter-spacing: -1.1px;
        height: 47px;
        display: flex;
        justify-content: center;
    }
    .button-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 138px;
    }

    .main__img {
        width: 100vw;
        height: 86.8vw;
        margin-top: 20px;
    }
}</style>
