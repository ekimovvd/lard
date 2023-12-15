<script setup lang="ts">
import { Ref, ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const isPopupOpen: Ref<boolean> = ref(false)

const form = reactive({
    email: '',
    fio: '',
    description: ''
})

const formRules = {
    email: { required, email },
    fio: { required },
}

const v$ = useVuelidate(formRules, form)

const clearForm = (): void => {
    form.email = ''
    form.fio = ''
    form.description = ''
}

const handleButton = (action: string) => {
    switch (action) {
        case 'open':
            isPopupOpen.value = true
            break;
        case 'close':
            clearForm()

            isPopupOpen.value = false
            break;
    }
}
</script>

<template>
    <section id="callback" class="callback">
        <div class="callback__container">
            <p class="subtitle">Помогли более чем 50 компаниям настроить и обезопасить свой бизнес</p>
            <h2 class="title">Оставьте заявку на заказ пакета услуг Lard Defender</h2>
            <form class="form">
                <input
                    v-model="form.email"
                    type="email"
                    class="input-email"
                    placeholder="Почта*"
                >

                <input
                    v-model="form.fio"
                    type="text"
                    class="input-fio"
                    placeholder="ФИО*"
                >

                <textarea
                    v-model="form.description"
                    cols="30"
                    rows="10"
                    class="input-description"
                    placeholder="Дополнительное описание"
                />

                <button
                    class="button"
                    :disabled="v$.$invalid"
                    @click.prevent="handleButton('open')"
                >
                    <div class="button-wrapper">
                        <span class="button-text">Отправить</span>
                        <img src="../assets/arrow.svg" alt="arrow" class="button-img">
                    </div>
                </button>
            </form>
        </div>

        <div v-show="isPopupOpen" @click.capture="handleButton('close')" class="popup-overlay" />

        <div v-show="isPopupOpen" class="popup" @click.stop>
            <div class="popup__container">
                <p class="popup__subtitle">
                    Спасибо!
                </p>
                <div class="popup__title-wrapper">
                    <p class="popup__title">
                        Ваша заявка успешно отправлена!
                    </p>
                </div>
                <button class="popup__button" @click="handleButton('close')">
                    Вернуться на сайт
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.callback {
    background-color: rgba(245, 245, 245, 1);
}

.callback__container {
    padding: 99px 0 100px 0;
    width: 758px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.subtitle {
    width: 685px;
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
    text-align: center;
    margin-top: 11px;
}

.form {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 552px;
}

.input-email {
    padding-left: 20px;
    background-color: #fff;
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    border: none;
    border-radius: 12px;
    height: 48px;
    width: 100%;
}

.input-email::placeholder {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
}

.input-fio {
    padding-left: 20px;
    background-color: #fff;
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    border: none;
    border-radius: 12px;
    height: 48px;
    margin-top: 12px;
    width: 100%;
}

.input-fio::placeholder {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
}

.input-description {
    padding-top: 11px;
    padding-left: 20px;
    background-color: #fff;
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
    border: none;
    border-radius: 12px;
    height: 172px;
    margin-top: 12px;
    width: 100%;
    resize: none;
}

.input-description::placeholder {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    line-height: 22.40px;
}

.button {
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 52px;
    background-color: rgba(132, 36, 222, 1);
    display: flex;
    justify-content: space-between;
    padding-left: 210px;
    padding-right: 206px;
    margin-top: 12px;
    align-items: center;
    cursor: pointer;
    transition: .3s
}

.button:active {
    border: 5px solid rgba(215, 215, 215, 1);
}

.button:hover {
    background-color: rgba(140, 55, 220, 1);
    transition: .3s;
}

.button:disabled, .button:hover, .button:active {
    background-color: gray;
    border: none;
    cursor: initial;
}

.button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 136px;
}

.button-text {
    color: white;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 1.7px;
}

.button-img {
    width: 24px;
    height: 24px;
}

.popup-overlay {
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 15;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 649px;
    height: 438px;
    margin-top: -219px;
    margin-left: -324.5px;
    border: 0.697px solid #EBEBEB;
    border-radius: 16px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 96px;
    padding-bottom: 95.5px;
    z-index: 20;
    border: 1px solid #EBEBEB;
}

.popup__container {
    width: 416px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
}

.popup__subtitle {
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: rgba(132, 36, 222, 1);
    background-color: rgba(132, 36, 222, 0.1);
    border-radius: 8px;
    padding: 12px;
    margin-top: 0;
    margin-bottom: 0;
}

.popup__title {
    margin-top: 29px;
    width: 265px;
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    width: 100%;
    margin-bottom: 0;
}

.popup__button {
    width: 209px;
    height: 52px;
    border: none;
    border-radius: 9px;
    font-family: Inter;
    font-size: 14.521px;
    font-style: normal;
    font-weight: 500;
    background-color: rgba(132, 36, 222, 1);
    border-radius: 12px;
    color: #fff;
    margin-top: 59px;
    cursor: pointer;
}

@media screen and (max-width: 576px) {
    .callback__container {
        width: calc(100vw - 32px);
        padding: 50px 0 50px 0;
    }

    .subtitle {
        width: 259px;
        height: 44px;
        border-radius: 6px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0.1px;
        text-align: center;
    }

    .title {
        font-family: Inter;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 7px;

    }

    .form {
        margin-top: 0px;
        width: calc(100vw - 32px);
    }

    .input-email {
        height: 44px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        padding-left: 18px;
    }

    .input-fio {
        font-family: Inter;
        font-size: 12px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: -1px;
        text-align: left;
        padding-left: 18px;
    }

    .input-description {
        font-family: Inter;
        font-size: 12px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: -1.2px;
        text-align: left;
        padding-left: 18px;
        padding-top: 17px;
        height: 117px;
    }

    .button {
        border-radius: 10px;
        width: 288px;
        height: 44px;
        padding-left: 88px;
        padding-right: 85px;
        margin-top: 36px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-text {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0.1px;
        text-align: center;
    }

    .button-wrapper {
        width: 113px;
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .popup {
        width: calc(100vw - 32px);
        margin-left: calc((-100vw + 32px) / 2);
        height: 222px;
        margin-top: -111px;
        padding-bottom: 20px;
        padding-top: 0;
    }

    .popup__container {
        width: 100%;
        margin-top: 40px;
    }

    .popup__subtitle {
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: left;
        padding: 8px;

    }

    .popup__title {
        font-family: Inter;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        margin-top: 11px;
        width: 265px;
    }
    .popup__title-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup__button {
        margin-top: 35px;
        height: 39px;
        width: calc(100% - 31px);
    }
}</style>
