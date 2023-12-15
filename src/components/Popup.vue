<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits()

const handleButton = () => {
    emit('button-clicked');
}

</script>

<template>
    <div class="popup">
        <div class="popup__container">
            <p class="subtitle">
                Спасибо!
            </p>
            <p class="title">
                Ваша заявка успешно отправлена!
            </p>
            <button class="button" @click="handleButton">
                Вернуться на сайт
            </button>
        </div>
    </div>
</template>

<style scoped>
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

.subtitle {
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

.title {
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

.button {
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
</style>
