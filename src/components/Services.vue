<script setup lang="ts">
import { blockList } from '../data'

</script>

<template>
    <section id="services" class="services">
        <div class="services__container">
            <div class="services__list">
                <div v-for='item in blockList' class="block-item">
                    <div class="block-img-wrapper">
                        <svg :width="item.svg.width" :height="item.svg.height" :viewBox="item.svg.viewBox"
                            :fill="item.svg.fill" :xmlns="item.svg.xmlns">
                            <g :id="item.svg.id">
                                <path id="Icon" :d="item.svg.d" :stroke-width="item.svg.strokeWidth"
                                    :stroke-linecap="item.svg.strokeLinecap" :stroke-linejoin="item.svg.strokeLinecap" />
                            </g>
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color: rgba(132, 36, 222, 1)" />
                                    <stop offset="50%" style="stop-color: rgba(91, 97, 228, 1)" />
                                    <stop offset="100%" style="stop-color: rgba(131, 217, 255, 1)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="text-wrapper">
                        <p :class="item.textClass">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay_bg-grey"></div>
    </section>
</template>

<style scoped>
.services {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 73px;
    position: relative;
}

.services__container {
    width: 1264px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    background-color: #fff;
    padding: 22px 0 26px 0;
    border: 1px solid rgba(245, 245, 245, 1);
    border-radius: 16px;
}

.services__list {
    display: flex;
    justify-content: space-between;
}

.overlay_bg-grey {
    z-index: 5;
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    top: 50%;
    background-color: rgba(245, 245, 245, 1);
}

.block-item {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 316px;
    border-right: 1px solid #E8E8E8;
    transition: .5s;
}

.block-item:hover .block-img-wrapper {
    transition: .5s;
    background-color: rgba(240, 244, 251, 1);
}

.block-item:hover .block-text {
    transition: .5s;
    color: #333;
    font-weight: 600;
    transform: scale(1.05)
}

.block-item:hover .block-text_first {
    transition: .5s;
    color: #333;
    font-weight: 600;
    transform: scale(1.05)
}

.block-item svg {
    stroke: #AEAEAE;
}

.block-item:hover svg path {
    stroke: url(#gradient);
}

.block-item:last-child {
    border-right: none;
}

.block-img-wrapper {
    width: 93px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8.63px;
    background-color: #F5F5F5;
    transition: .5s;

}

.block-img {
    width: 38px;
    height: 38px;
}

.block-text {
    margin-top: 28px;
    color: #868686;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 23.40px;
    word-wrap: break-word;
    width: 243px;
    text-align: center;
    transition: .5s;
}

.block-item:last-child .block-text {
    margin-top: -5px;
}

.block-text_first {
    width: 210px;
    padding: 0 10px 0 10px;
    text-align: center;
    margin-top: 0px;
    color: #868686;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 23.40px;
    word-wrap: break-word;
    transition: .5s
}

@media screen and (max-width: 576px) {
    .services {
        width: 100vw;
        margin-top: 30px;
    }

    .services__container {
        width: calc(100vw - 32px);
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 0px;
        padding: 17px 0 18px 0;
    }

    .block-item {
        width: calc(100vw - 45px)
    }
    .block-item:nth-child(2) .block-text{
        margin-top: 0;
    }
    .block-item:nth-child(2) .text-wrapper {
        margin-top: 20px;
    }
    .block-item:nth-child(3) .text-wrapper {
        margin-top: 20px;
    }
    .block-item:nth-child(3) .block-text{
        margin-top: 0;
    }
    .block-item:last-child .block-text{
        margin-top: -13px;
    }
    .block-item svg path {
        stroke: url(#gradient);
    }

    .block-img-wrapper {
        width: 78px;
        height: 60px;
    }

    .block-img-wrapper svg {
        width: 32px;
        height: 32px;
    }

    .block-text {
        width: 214px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: 0.1px;
        text-align: center;
        padding: 0;
    }
    .block-text_first {
        width: 214px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: 0.1px;
        text-align: center;
        padding: 0;
        margin-bottom: 28px;
    }
    .text-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
}</style>
