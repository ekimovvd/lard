<script setup lang="ts">
import { Ref, ref } from 'vue'

const isButtonPressed: Ref<boolean> = ref(false)

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
    <section class="anchor">
        <div class="anchor__container">
            <h2 class="title">Обезопасьте свой бизнес сейчас!</h2>

            <img src="../assets/shield-big.svg" alt="shield-big" class="img">

            <button @click="scrollToElement('callback', 50)" :class="isButtonPressed ? 'button_active' : ''" class="button">
                <div class="button-wrapper">
                    <span class="button__text">Оставить заявку</span>
                    <img src="../assets/arrow_purple.svg" alt="arrow" class="button__img">
                </div>
            </button>
        </div>
    </section>
</template>

<style scoped>
.anchor {
    margin: 210px auto 116px auto;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 125px;
    align-items: center;
    background-color: rgba(132, 36, 222, 1);
    border-radius: 16px;
    box-sizing: border-box;
}

.anchor__container {
    width: 1280px;
    color: white;
    font-size: 48px;
    font-family: Inter;
    font-weight: 700;
    line-height: 57.60px;
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    width: 819px;
    color: white;
    font-size: 48px;
    font-family: Inter;
    font-weight: 700;
    line-height: 57.60px;
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.img {
    margin-bottom: 15px;
    width: 150.99px;
    height: 176.1px;
}

.button {
    width: 233px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: #fff;
    border-radius: 12px;
    padding: 0 20px 0 24px;
    cursor: pointer;
    border: none;
}
.button:hover {
    background-color: #EBEBEB;
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
    width: 189px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button__text {
    color: rgba(132, 36, 222, 1);
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    word-wrap: break-word;
}

.button__img {
    width: 16px;
    height: 20px;
}

@media screen and (max-width: 576px) {
    .anchor {
        width: 100vw;
        height: 170px;
        margin: 121px auto 0 auto;
    }

    .anchor__container {
        width: calc(100vw - 32px);
        flex-wrap: wrap;
        margin: 0 auto;
        align-content: space-between;
    }

    .title {
        font-family: Inter;
        font-size: 22px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.1px;
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 28px;
        margin-bottom: 28px;
    }

    .img {
        display: none;
    }

    .button {
        width: 100%;
        height: 44px;
        padding: 0px 63px 0 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 28px;
    }
    .button__text {
        font-family: Inter;
        font-size: 15px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0.1px;
        text-align: center;
    }
    .button-wrapper {
        display: flex;
        justify-content: space-between;
        width: 157px;
        align-items: center;
    }
}</style>
