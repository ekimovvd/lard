<script setup lang="ts">

import { ref, Ref, onMounted } from 'vue'


import image1 from '../assets/Server-rafiki.svg'
import image2 from '../assets/growth.svg'
import image3 from '../assets/goout.svg'
import image4 from '../assets/meditation.svg'

const slides = [
    {
        image: image1,
        alt: 'Slide 1',
        title: 'Уже столкнулись с проблемой кибербезопасности?',
        subtitle: 'Кому подойдет Lard Defender?',
        text: 'Срочно проанализируем вашу систему и подберем необходимое защитное ПО: закройте все уязвимости и отслеживайте возможные угрозы.',
    },
    {
        image: image2,
        alt: 'Slide 2',
        title: 'Взрывной рост бизнеса привлекает внимание злоумышленников?',
        subtitle: 'Кому подойдет Lard Defender?',
        text: 'Не дадим ценной информации попасть в руки недоброжелателей: мгновенно стирайте ее с носителей и восстанавливайте за пару кликов.',
    },
    {
        image: image3,
        alt: 'Slide 3',
        title: 'Лояльность сотрудников вызывает сомнения?',
        subtitle: 'Кому подойдет Lard Defender?',
        text: 'Внедрим ПО для защиты от утечек. Больше не беспокойтесь о безопасности ваших данных — попытки выкрасть информацию будут предотвращены.',
    },
    {
        image: image4,
        alt: 'Slide 4',
        title: 'IT-отдел не справляется?Внедрять сервисы киберзащиты сложно?',
        subtitle: 'Кому подойдет Lard Defender?',
        text: 'Интегрируем самые передовые решения без привлечения ваших кадровых ресурсов.',
    }
]

const currentSlide: Ref<number> = ref(0)
const slideStatus: Ref<string> = ref('static')
const prevSlide: Ref<number | null> = ref(null)
const nextSlide: Ref<number | null> = ref(null)
const touchStartX: Ref<number> = ref(0);
const touchEndX: Ref<number> = ref(0);

onMounted(() => {
    setInterval(() => {
        moveSlide('right')
    }, 7000)
})

const moveSlide = (action: string) => {
    if (action === 'left') {
        slideStatus.value = 'moving right'
        if (currentSlide.value === 0) {
            prevSlide.value = 3
            nextSlide.value = 1
        } else {
            prevSlide.value = currentSlide.value - 1
            nextSlide.value = currentSlide.value + 1
        }
        setTimeout(() => {
            if (currentSlide.value === 0) {
                currentSlide.value = 3
            } else {
                currentSlide.value = currentSlide.value - 1
            }
            slideStatus.value = 'static'
        }, 200)
    } else if (action === 'right') {
        slideStatus.value = 'moving left'
        if (currentSlide.value === 3) {
            nextSlide.value = 0
            prevSlide.value = 2
        } else {
            nextSlide.value = currentSlide.value + 1
            prevSlide.value = currentSlide.value - 1
        }
        setTimeout(() => {
            if (currentSlide.value === 3) {
                currentSlide.value = 0
            } else {
                currentSlide.value = currentSlide.value + 1
            }
            slideStatus.value = 'static'
        }, 200)
    }
}

const handleTouchStart = (event: TouchEvent) => {
    touchStartX.value = event.touches[0].clientX;
}
const handleTouchMove = (event: TouchEvent) => {
    touchEndX.value = event.touches[0].clientX;
}
const handleTouchEnd = () => {
    const touchDiff = touchEndX.value - touchStartX.value;
    if (touchDiff < -50) {
        moveSlide('right');
    } else if (touchDiff > 50) {
        moveSlide('left');
    }
    touchStartX.value = 0;
    touchEndX.value = 0;
}

</script>

<template>
    <section id='slider' class="slider-section">
        <div class="slider__container">
            <button @click="moveSlide('left')" class="slider-button-prev">
                <img src="../assets/slider-arrow.svg" alt="arrow" class="button-arrow">
            </button>
            <div class="slider">
                <div 
                    v-for='slide in slides' 
                    class="slider-element" 
                    @touchstart="handleTouchStart"
                    @touchmove="handleTouchMove"
                    @touchend="handleTouchEnd"
                >
                    <li :class="[
                        slideStatus === 'moving left' ? 'moving-left' : slideStatus === 'moving right' ? 'moving-right' : '',
                        currentSlide === slides.indexOf(slide) ? 'slide-element_showed' : 'slide-element_hidden',
                        prevSlide === slides.indexOf(slide) ? 'slide-element_prev' : '',
                        nextSlide === slides.indexOf(slide) ? 'slide-element_next' : ''
                    ]" class="slider__item">
                        <img :src="slide.image" :alt="slide.alt" class="slider__image">
                        <div class="info-wrapper">
                            <div class="text-wrapper">
                                <p class="slider__subtitle">{{ slide.subtitle }}</p>
                            </div>
                            <div class="text-wrapper">
                                <p class="slider__title">{{ slide.title }}</p>
                            </div>
                            <div class="text-wrapper">
                                <p class="slider__text">{{ slide.text }}</p>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
            <button @click="moveSlide('right')" class="slider-button-next">
                <img src="../assets/slider-arrow.svg" alt="arrow" class="button-arrow">
            </button>
            <div class="pagination">
                <div class="pagination-wrapper">
                    <svg :class="currentSlide === 0 ? 'slider-point_active' : 'slider-point'" width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" />
                    </svg>
                    <svg :class="currentSlide === 1 ? 'slider-point_active' : 'slider-point'" width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" />
                    </svg>
                    <svg :class="currentSlide === 2 ? 'slider-point_active' : 'slider-point'" width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" />
                    </svg>
                    <svg :class="currentSlide === 3 ? 'slider-point_active' : 'slider-point'" width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes slideLeft {
    0% {
        opacity: 1;
        transform: translateX(0);

    }

    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
}

@keyframes slideRight {
    0% {
        opacity: 1;
        transform: translateX(0);

    }

    100% {
        opacity: 0;
        transform: translateX(100%);
    }
}

@keyframes slideAppearRight {
    0% {
        opacity: 0;
        transform: translateX(100%);

    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideAppearLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);

    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.moving-left {
    animation: slideLeft .5s forwards;
}

.moving-right {
    animation: slideRight .5s forwards;
}

.slide-element_prev {
    display: block;
    animation: slideAppearLeft .5s forwards;
}

.slide-element_next {
    display: block;
    animation: slideAppearRight .5s forwards;
}

.slide-element_showed {
    display: block;
}

.slide-element_hidden {
    display: none !important;
}

.slider-section {
    background-color: rgba(245, 245, 245, 1);
}

.slider__container {
    width: 1360px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 76px;
    padding-top: 7px;
}

.slider-button-prev {
    width: 48px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid rgba(228, 227, 227, 1);
    background-color: transparent;
    transform: rotateZ(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    z-index: 10;
}

.slider-button-next {
    width: 48px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid rgba(228, 227, 227, 1);
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    z-index: 10;
}

.slider {
    width: 1256px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slider__content {
    width: 1280px;
    padding-top: 0;
}

.transition {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
}

.slider__item {
    display: flex;
    justify-content: space-between;
    width: 1280px;
}

.slider__image {
    width: 500px;
    height: 500px;
}

.info-wrapper {
    width: 684px;
}

.slider__subtitle {
    border-radius: 8px;
    width: 306px;
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
    margin-bottom: 0;
    margin-top: 74px;
}

.slider__title {
    width: 667px;
    margin-top: 14px;
    margin-bottom: 0;
    color: #333333;
    font-size: 52px;
    font-family: Inter;
    font-weight: 700;
    line-height: 62.40px;
    word-wrap: break-word;
}

.slider__text {
    width: 652px;
    margin-top: 26px;
    margin-bottom: 0;
    color: #868686;
    font-size: 24px;
    font-family: Inter;
    font-weight: 300;
    line-height: 33.60px;
    word-wrap: break-word;
    letter-spacing: 0.1px;
}

.text-wrapper {
    width: 100%;
}

.slider-point_active {
    fill: #333333;
    margin-left: 6px;
}

.slider-point_active:first-child {
    margin-left: 0;
}

.slider-point {
    fill: #D9D9D9;
    margin-left: 6px;
}

.slider-point:first-child {
    margin-left: 0;
}

.pagination {
    width: 100%;
}

.pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 576px) {
    .slider-section {
        height: 560px;
    }

    .slider__container {
        width: calc(100vw - 32px);
        height: calc(100% - 46px);
        padding-bottom: 46px;
        overflow-x: hidden;
    }

    .slider {
        width: calc(100vw - 32px);
        overflow-x: hidden;
    }

    .slider__content {
        width: 100%;
        overflow-x: hidden;
    }

    .slider__item {
        width: 100%;
        flex-wrap: wrap-reverse;
        overflow-x: hidden;
    }

    .slider__image {
        width: 100%;
        height: 240px;
        margin-top: 8px;
    }

    .info-wrapper {
        width: 100%;
    }

    .slider__subtitle {
        width: 200px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: left;
        margin-top: 11px;
    }

    .slider__title {
        width: 286px;
        font-family: Inter;
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0.3px;
        text-align: left;
        margin-top: 7px;

    }

    .slider__text {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.25px;
        text-align: left;
        width: 288px;
        margin-top: 18px;
    }

    .slider-button-prev {
        display: none;
    }

    .slider-button-next {
        display: none;
    }

    .pagination {
        margin: auto auto 0 auto;
    }

    .slider-point {
        height: 8px;
        width: 8px;
    }

    .slider-point_active {
        height: 8px;
        width: 8px;
    }
}</style>
