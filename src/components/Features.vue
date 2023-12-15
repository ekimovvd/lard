<template>
    <section id='features' class="features">
        <div class="features__container">
            <p class="subtitle">
                Почему именно Lard Defender?
            </p>

            <div class="title-wrapper">
                <h2 class="title">
                    Все для полной защиты в&nbsp;одном пакете услуг
                </h2>
            </div>

            <p class="description">
                50+ клиентов уже&nbsp;уверены в&nbsp;их&nbsp;качестве
            </p>

            <div class="block-list">
                <div class="block-item">
                    <div class="block__img-wrapper">
                        <img src="../assets/check-verified.svg" alt="check-verified" class="block__img">
                    </div>

                    <div class="block__text-wrapper">
                        <div class="block__title">
                            10+ лет опыта в&nbsp;сфере кибербезопасности
                        </div>

                        <div class="block__text">
                            Обеспечиваем сохранность данных и&nbsp;оптимизируем работу в&nbsp;50+ компаниях-представителях крупного и&nbsp;среднего бизнеса в&nbsp;сферах от&nbsp;медицины до&nbsp;промышленности.
                        </div>

                        <div class="block__text">
                            Среди наших партнеров ИТМО, Linx, XCOM-SHOP и&nbsp;другие крупные компании.
                        </div>
                    </div>
                </div>

                <div class="block-item">
                    <div class="block__img-wrapper">
                        <img src="../assets/file-verified.svg" alt="file-verified" class="block__img">
                    </div>

                    <div class="block__text-wrapper">
                        <div class="block__title">
                            Делаем срочно, в&nbsp;том числе <br> под 1С
                        </div>

                        <div class="block__text">
                            Подбираем оптимальные решения именно под&nbsp;вашу корпоративную систему и&nbsp;уже&nbsp;установленное ПО,
                            выполняем работу в&nbsp;сжатые сроки и&nbsp;учитываем все дополнительные пожелания, чтобы защита данных
                            была
                            максимально комфортной.
                        </div>
                    </div>
                </div>

                <div class="block-item">
                    <div class="block__title">
                        Что вы получаете, заказав пакет услуг Lard Defender?
                    </div>

                    <ul class="block__list">
                        <li class="block__list-item">Полный контроль: быстрое стирание и&nbsp;восстановление данных с&nbsp;помощью
                            удаленного доступа
                        </li>

                        <li class="block__list-item">
                            Экономию на&nbsp;обновлении рабочей техники: все мощности находятся на&nbsp;сервере
                        </li>

                        <li class="block__list-item">
                            Сокращение нагрузки на&nbsp;собственный <nobr>IT-отдел:</nobr> меньше задач по&nbsp;кибербезопасности, больше по&nbsp;непосредственной работе
                        </li>

                        <li class="block__list-item">
                            Работу без&nbsp;перебоев: вашим данным больше не&nbsp;страшны отключение
                            электричества и неисправность техники
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.block__text {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    line-height: 22px;
    word-wrap: break-word;
    height: 79px;
    margin-top: 17px;
    width: 364px;
}

.block__text:nth-child(3) {
    margin-top: 32px;
}
.block__text-wrapper {
    margin-top: 28px;
}

.block-item {
    padding-top: 28px;
    padding-left: 28px;
    background-color: rgba(245, 245, 245, 1);
    box-sizing: border-box;
    width: 414px;
    border-radius: 16px;
}

.block-item:last-child {
    background-color: #fff;
    border: 1px solid rgba(245, 245, 245, 1);
    padding-top: 23px;
    padding-left: 25px;
}

.block__title {
    color: #333333;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 26px;
    word-wrap: break-word;
    max-width: 351px;
    height: 50px;
}

.block-list {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin-top: 48px;
}

.features {
    width: 1280px;
    margin: 0 auto;
    padding-top: 107px;
}

.features__container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.subtitle {
    width: 310px;
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
    margin-top: -13px;
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
    margin-top: 13px;
    margin-bottom: 0;
}

.description {
    color: #868686;
    font-size: 24px;
    font-family: Inter;
    font-weight: 300;
    line-height: 33.60px;
    margin-top: 13px;
    margin-bottom: 0;
    letter-spacing: 0.1px;
}



.block__img-wrapper {
    width: 129px;
    height: 89px;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block__img {
    width: 50px;
    height: 50px;
}

.block__list {
    list-style-type: none;
    padding-left: 28px;
    margin: 0;
    width: 350px;
}

.block__list-item:nth-child(3) {
    width: 330px;
}

.block__list-item::before {
    content: "";
    background: url("../assets/marker.svg") center no-repeat;
    position: absolute;
    left: -29px;
    top: 3px;
    width: 17.5px;
    height: 18px;
}

.block__list-item {
    color: #868686;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    line-height: 22.40px;
    word-wrap: break-word;
    position: relative;
    margin-top: 9px;
    letter-spacing: 0.2px;
}

.block__list-item:first-child {
    margin-top: 11px;
}

.block__list-item::marker {
    margin-top: 10px;
}

@media screen and (max-width: 576px) {
    .block__text {
        width: calc(100vw - 60px);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        margin-top: 0;
        height: auto!important;
    }

    .block-item:nth-child(2) .block__text {
        height: 150px;
    }

    .block-item:last-child {
        padding-top: 36px;
        padding-left: 19px;
    }

    .block__text-wrapper {
        margin-top: 11px;
    }

    .block-item {
        width: 100%;
        padding-top: 16px;
        padding-left: 16px;
        padding-bottom: 20px;
        margin-top: 16px;
    }
    .block-item:last-child {
        padding-top: 10px;
    }

    .block__title {
        width: 243px;
        font-family: Inter;
        font-size: 15px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0.1px;
        text-align: left;
        height: 44px;

    }

    .block-list {
        width: 100%;
        flex-wrap: wrap;
        margin-top: 4px;
    }

    .features {
        width: 100vw;
        padding-top: 63px;
        overflow-x: hidden;
    }

    .features__container {
        width: calc(100vw - 32px);
        margin: 0 auto;
    }

    .subtitle {
        width: 207px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0px;
        text-align: left;
        height: 28px;
    }

    .title {
        font-family: Inter;
        font-size: 22px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.4px;
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
        letter-spacing: 0px;
        text-align: left;
        margin-top: 7px;
    }

    .block__img-wrapper {
        width: 100px;
        height: 62px;
    }

    .block__img {
        width: 32.5px;
        height: 32.5px;
    }

    .block__list {
        width: calc(100vw - 60px);
    }

    .block__list-item {
        width: calc(100vw - 90px)!important;
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
    }
    .block__text:nth-child(3) {
        margin-top: 0;
    }
}
</style>
