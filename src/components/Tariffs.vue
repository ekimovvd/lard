<script setup lang="ts">
import { Ref, ref } from 'vue'
const isFirstButtonPressed: Ref<boolean> = ref(false)
const isSecondButtonPressed: Ref<boolean> = ref(false)
const isThirdButtonPressed: Ref<boolean> = ref(false)

const scrollToElement = (elementId: string, offset: number, id: number) => {
    if (id === 1) {
        isFirstButtonPressed.value = true
    } else if (id === 2) {
        isSecondButtonPressed.value = true
    } else if (id === 3) {
        isThirdButtonPressed.value = true
    }

    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
    setTimeout(() => {
        if (id === 1) {
            isFirstButtonPressed.value = false
        } else if (id === 2) {
            isSecondButtonPressed.value = false
        } else if (id === 3) {
            isThirdButtonPressed.value = false
        }
    }, 500)
}

</script>

<template>
    <section id='tariffs' class="tariffs">
        <div class="tariffs__container">
            <p class="subtitle">Стоимость для бизнеса</p>
            <div class="title-wrapper">
                <h2 class="title">Тарифы на 1 год поддержки Lard Defender</h2>
            </div>
            <p class="description">Переходите с тарифа на тариф в любой момент, оплачивайте — потом!</p>
            <div class="block-list">
                <div class="block-item">
                    <div class="block__img-wrapper">
                        <img src="../assets/shield.svg" alt="shield" class="block__img">
                    </div>
                    <p class="block__title">
                        Standard
                    </p>
                    <p class="block__text">
                        Базовое решение для обеспечения безопасности данных с размещением на серверах лучших дата-центров
                        мира.
                    </p>
                    <div @click="scrollToElement('callback', 50, 1)" :class="isFirstButtonPressed ? 'button_active' : ''"
                        class="block__price">
                        от 240 000 рублей
                    </div>
                </div>
                <div class="block-item">
                    <div class="block__img-wrapper">
                        <img src="../assets/shield-plus.svg" alt="shield-plus" class="block__img">
                    </div>
                    <p class="block__title">
                        Premium
                    </p>
                    <p class="block__text">
                        Все, что входит в Standard, а также управление доступом в реальном времени: ограничивайте, удаляйте
                        или выдавайте разрешения пользователям в любой момент.
                    </p>
                    <div @click="scrollToElement('callback', 50, 2)" :class="isSecondButtonPressed ? 'button_active' : ''"
                        class="block__price">
                        от 360 000 рублей
                    </div>
                </div>
                <div class="block-item">
                    <div class="block__img-wrapper">
                        <img src="../assets/shield-zap.svg" alt="shield-zap" class="block__img">
                    </div>
                    <p class="block__title">
                        Exclusive
                    </p>
                    <p class="block__text">
                        Свой VPN, предотвращение утечек данных, защищенные почта и мессенджер, полный контроль за
                        пользователями и многое другое — подберем пакет решений, подходящих именно вам.
                    </p>
                    <div @click="scrollToElement('callback', 50, 3)" :class="isThirdButtonPressed ? 'button_active' : ''"
                        class="block__price">
                        Цена по запросу
                    </div>
                </div>
            </div>
            <p class="note">*Цены указаны из расчета на 10 сотрудников в системе</p>
        </div>
    </section>
</template>

<style scoped>
.button_active {
    transition: .1s;
    box-shadow: 0 0 0 5px #8424DE;
}

.block__price:active {
    transition: .1s;
    box-shadow: 0 0 0 5px #8424DE;
}

.tariffs {
    margin-top: 100px;
    padding-top: 99px;
    padding-bottom: 100px;
    background-color: rgba(245, 245, 245, 1);
}

.tariffs__container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1280px;
    margin: 0 auto;
}

.subtitle {
    width: 250px;
    height: 37px;
    color: rgba(132, 36, 222, 1);
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 18px;
    background-color: rgba(132, 36, 222, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 8px;

}

.title {
    color: #333333;
    font-size: 52px;
    font-family: Inter;
    font-weight: 700;
    line-height: 62.40px;
    word-wrap: break-word;
    text-align: left;
    margin-top: 11px;
    margin-bottom: 0;
}

.title-wrapper {
    width: 100%;
}

.description {
    color: #868686;
    font-size: 24px;
    font-family: Inter;
    font-weight: 300;
    line-height: 33.60px;
    margin-top: 16px;
    margin-bottom: 0;
    letter-spacing: 0.1px;
}

.block-list {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 1280px;
}

.block-item {
    padding-top: 25px;
    padding-left: 28px;
    padding-bottom: 28px;
    border-radius: 16px;
    background-color: #fff;
    border: 1px solid rgba(235, 235, 235, 1);
    width: 414px;
    box-sizing: border-box;
}

.block__img-wrapper {
    width: 129px;
    height: 89px;
    border-radius: 12px;
    background-color: rgba(132, 36, 222, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}

.block__img {
    width: 50px;
    height: 50px;
}

.block__title {
    color: #333333;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
    margin-bottom: 0;
    width: 100%;
}

.block-item:nth-child(2) .block__title {
    margin-top: 24px;
}

.block-item:nth-child(2) .block__text {
    margin-top: 15px;
}

.block-item:nth-child(2) .block__price {
    margin-top: 40px;
}

.block-item:nth-child(3) .block__title {
    margin-top: 21px;
}

.block-item:nth-child(3) .block__text {
    margin-top: 15px;
}

.block-item:nth-child(3) .block__price {
    margin-top: 20px;
}

.block-item:nth-child(1) .block__title {
    margin-bottom: 0px;
    margin-top: 29px;
}

.block-item:nth-child(1) .block__text {
    margin-bottom: 0px;
    margin-top: 10px;
}

.block-item:nth-child(1) .block__price {
    margin-top: 66px;
}

.block__text {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    line-height: 22px;
    word-wrap: break-word;
    margin-bottom: 0;
    max-width: 356px;
}


.block__price {
    border-radius: 12px;
    color: rgba(132, 36, 222, 1);
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    width: 357px;
    height: 48px;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.block__price:hover {
    background-color: rgba(235, 235, 235, 1);
}

.note {
    margin-top: 19px;
    margin-bottom: 0;
    color: #606060;
    font-size: 18px;
    font-family: Inter;
    font-weight: 300;
    line-height: 25.20px;
    letter-spacing: 0.1px;
}

.block-item:last-child {
    background-color: rgba(0, 15, 43, 1);
}
.block-item:last-child .block__price:hover {
    background-color: rgba(235, 235, 235, 1);
}

.block-item:last-child .block__title {
    color: #fff
}

.block-item:last-child .block__text {
    color: #E1E1E1;
}

.block-item:last-child .block__price {
    background-color: #fff;
}

.block-item:last-child .block__img-wrapper {
    background-color: #fff;
}

@media screen and (max-width: 576px) {
    .tariffs {
        margin-top: 50px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .tariffs__container {
        width: calc(100% - 32px)
    }

    .subtitle {
        width: 163px;
        height: 33px;
        border-radius: 6px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0.1px;
        text-align: left;
    }

    .title {
        font-family: Inter;
        font-size: 22px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.2px;
        text-align: left;
        width: 288px;
    }

    .title-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .description {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-top: 6px;
    }

    .block-list {
        width: calc(100vw - 32px);
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
    }

    .block-item {
        width: calc(100vw - 32px);
        padding-top: 16px;
        padding-left: 19px;
        padding-right: 19px;
        border-radius: 11px;
        margin-top: 16px;
        padding-bottom: 14px;
    }

    .block-item:first-child {
        margin-top: 0;
    }

    .block__img {
        width: 39px;
        height: 39px;
    }

    .block__img-wrapper {
        width: 90px;
        height: 61px;
        border-radius: 8px;
    }

    .block__title {
        font-family: Inter;
        font-size: 15px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-top: 16px !important;
    }

    .block__text {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        width: 100%;
        margin-top: 8px !important;
    }

    .block__price {
        width: 100%;
        height: 39px;
        border-radius: 9px;
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 39px;
        letter-spacing: 0.1px;
        text-align: center;
        margin-top: 23px !important;
    }

    .note {
        margin-top: 16px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 300;
        line-height: 17px;
        letter-spacing: 0.1px;
        text-align: left;

    }
}</style>
