<script setup lang="ts">
import { Ref, ref} from 'vue'

const isButtonPressed: Ref<boolean> = ref(false) 

const scrollToElement = (elementId: string, offset: number) => {
    isButtonPressed.value = true
    const element = document.getElementById(elementId);
    console.log(elementId)
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
    <section id='solutions' class="solutions">
        <div class="solutions__container">
            <p class="subtitle">Дополнительные услуги</p>
            <div class="title-wrapper">
                <h2 class="title">Наши решения для вашей безопасности</h2>
            </div>
            <p class="description">Мы оказываем множество услуг по информационной безопасности <br>
                и проведем аудит вашего бизнеса, чтобы подобрать подходящие именно вам.</p>
            <div class="block-list">
                <div class="block-item">
                    <h3 class="block-title">VPN</h3>
                    <p class="block-text">Виртуальная
                        частная сеть</p>
                    <div class="tooltip_up">
                        <h4 class="tooltip__title">Защищенные сети любого масштаба</h4>
                        <p class="tooltip__text">Обеспечьте онлайн-безопасность своей компании с нашим VPN-сервисом и
                            забудьте о кибератаках и утечках данных.</p>
                    </div>
                </div>
                <div class="block-item">
                    <h3 class="block-title">MAIL</h3>
                    <p class="block-text block-text_big">Безопасная
                        корпоративная
                        почта</p>
                    <div class="tooltip_up">
                        <h4 class="tooltip__title">Безопасная почта с вашим доменом</h4>
                        <p class="tooltip__text">Гарантируйте сотрудникам и клиентам надежное шифрование переписки,
                            настраиваемый и отслеживаемый доступ и защиту от вирусов и спама.</p>
                    </div>
                </div>
                <div class="block-item">
                    <h3 class="block-title">Messenger</h3>
                    <p class="block-text">Непробиваемая
                        связь</p>
                    <div class="tooltip">
                        <h4 class="tooltip__title">Защищенные сообщения, звонки и передача файлов</h4>
                        <p class="tooltip__text">Обеспечьте непробиваемую корпоративную связь с нашим мессенджером на базе
                            приложения Element — с шифрованием, защитой от проникновения и безопасной передачей файлов.</p>
                    </div>
                </div>
                <div class="block-item">
                    <h3 class="block-title">MDM</h3>
                    <p class="block-text block-text_big">Управление
                        мобильными
                        устройствами</p>
                    <div class="tooltip">
                        <h4 class="tooltip__title">Полный контроль над мобильными устройствами компании</h4>
                        <p class="tooltip__text">Управляйте всеми мобильными устройствами организации: устанавливайте и
                            удаляйте приложения, отслеживайте активность и настраивайте доступ.</p>
                    </div>
                </div>
                <div class="block-item">
                    <h3 class="block-title">DLP</h3>
                    <p class="block-text">Защита от
                        внутренних угроз</p>
                    <div class="tooltip">
                        <h4 class="tooltip__title">Управление всеми корпоративными устройствами и системами</h4>
                        <p class="tooltip__text">Предотвращайте и блокируйте попытки передачи данных и анализируйте действия
                            пользователей, переписки и активность подключенных устройств.</p>
                    </div>
                </div>
                <div class="block-item">
                    <h3 class="block-title">Self-hosted Cloud </h3>
                    <p class="block-text">Личное облако
                        для работы
                        с данными</p>
                    <div class="tooltip">
                        <h4 class="tooltip__title">Личное облако для работы с данными</h4>
                        <p class="tooltip__text">Работайте с документами в браузере из любой точки мира и синхронизируйте
                            данные между разными устройствами, не сомневаясь в надежности шифрования информации.</p>
                    </div>
                </div>
            </div>
            <button @click="scrollToElement('callback', 50)" :class="isButtonPressed ? 'button_active' : ''" class="button">
                <div class="button-wrapper">
                    <span class="button__text">Оставить заявку</span>
                <img src="../assets/arrow.svg" alt="arrow" class="button__img">
                </div>
            </button>
        </div>
    </section>
</template>

<style scoped>
.solutions {
    padding-top: 94px;
    padding-bottom: 100px;
}

.solutions__container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1280px;
    margin: 0 auto;
}

.subtitle {
    width: 218px;
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
    padding-left: 16px;
    padding-right: 16px;
}

.title {
    color: #333333;
    font-size: 52px;
    font-family: Inter;
    font-weight: 700;
    line-height: 62.40px;
    word-wrap: break-word;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 0;
    width: 100%;
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
    margin-top: 17px;
    margin-bottom: 0;
    width: 930px;
    letter-spacing: 0.14px;
}

.block-list {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    width: 1280px;
}

.block-item {
    padding-left: 19px;
    border-radius: 16px;
    background-color: #F5F5F5;
    border: 1px solid rgba(235, 235, 235, 1);
    width: 197px;
    box-sizing: border-box;
    position: relative;
    height: 145px;
}

.block-title {
    background-image: linear-gradient(204deg, #8424DE 42.08%, #5B61E4 66.73%, #83D9FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 18px;
    font-family: Inter;
    font-weight: 700;
    word-wrap: break-word;
    margin: initial;
    margin-top: 13px;
}

.block-text {
    color: #868686;
    font-size: 18px;
    font-family: Inter;
    font-weight: 300;
    word-wrap: break-word;
    margin: initial;
    margin-top: 10px;
    line-height: 25.20px;
    width: 165px;
}

.block-text_big {
    margin-bottom: 25px;
}

.tooltip {
    position: absolute;
    display: none;
    bottom: -155px;
    width: 237px;
    left: -30px;
    background-color: rgba(132, 36, 222, 1);
    justify-content: flex-start;
    flex-wrap: wrap;
    z-index: 10;
    padding: 8.5px;
    padding-left: 12px;
    border-radius: 12px;
    z-index: 10;
}

.tooltip_up {
    top: -155px;
    position: absolute;
    display: none;
    width: 237px;
    left: 0;
    background-color: rgba(132, 36, 222, 1);
    justify-content: flex-start;
    flex-wrap: wrap;
    z-index: 10;
    padding: 8.5px;
    padding-left: 12px;
    border-radius: 12px;
    z-index: 10;
}

.tooltip_up::after {
    content: url('data:image/svg+xml;utf8,<svg width="40" height="20" xmlns="http://www.w3.org/2000/svg"><polygon points="20,0 40,20 0,20" fill="rgba(132, 36, 222, 1)"/><circle cx="20" cy="20" r="3" fill="rgba(132, 36, 222, 1)"/></svg>');
    position: absolute;
    bottom: -9px;
    left: 25px;
    z-index: 9;
    transform: rotateZ(180deg);
}

.tooltip::after {
    content: "";
    position: absolute;
    top: -9px;
    left: 32px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 18px solid rgba(132, 36, 222, 1);
    z-index: 9;
}

.tooltip__title {
    color: white;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
    word-wrap: break-word;
    margin: 0;
    width: 213px;
}

.tooltip__text {
    color: #ECF2FF;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 18px;
    word-wrap: break-word;
    margin: 4px 0 0 0;
    width: 213px;
}

.block-item:nth-child(2) .tooltip__text {
    width: 230px;
}

.block-item:nth-child(3) .tooltip {
    width: 272px;
    bottom: -174px;
}

.block-item:nth-child(3) .tooltip__text {
    width: 260px;
}

.block-item:nth-child(3) .tooltip__title {
    width: 260px;
}

.block-item:nth-child(4) .tooltip {
    width: 272px;
}

.block-item:nth-child(4) .tooltip__text {
    width: 260px;
}

.block-item:nth-child(4) .tooltip__title {
    width: 260px;
}

.block-item:nth-child(5) .tooltip {
    width: 284px;
}

.block-item:nth-child(5) .tooltip__text {
    width: 270px;
}

.block-item:nth-child(5) .tooltip__title {
    width: 260px;
}

.block-item:nth-child(6) .tooltip {
    width: 284px;
}

.block-item:nth-child(6) .tooltip__text {
    width: 270px;
}

.block-item:nth-child(6) .tooltip__title {
    width: 270px;
}

.block-item:hover .tooltip {
    display: flex;
}

.block-item:hover .tooltip_up {
    display: flex;
}

.button {
    width: 233px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: rgba(132, 36, 222, 1);
    border-radius: 12px;
    padding: 0 20px 0 24px;
    margin-top: 47px;
    cursor: pointer;
    border: none;
    transition: .3s;
}
.button:hover {
    background-color: rgba(140, 55, 220, 1);
    transition: .3s;
}
.button__text {
    color: #fff;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    word-wrap: break-word;
}
.button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 189px;
}
.button__img {
    width: 24px;
    height: 24px;
}
.button_active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(215, 215, 215, 1);
}
.button:active {
    transition: .1s;
    box-shadow: 0 0 0 5px rgba(215, 215, 215, 1);
}

@media screen and (max-width: 576px) {
    .solutions {
        padding-top: 44px;
        padding-bottom: 50px;
    }

    .solutions__container {
        width: calc(100vw - 32px);
        box-sizing: border-box;
    }

    .subtitle {
        width: 168px;
        height: 28px;
        border-radius: 6px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0.1px;
        text-align: left;
        box-sizing: border-box;
        padding-left: 11px;
        padding-right: 11px;
    }

    .title {
        font-family: Inter;
        font-size: 22px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.4px;
        text-align: left;
        width: 250px;
    }
    .title-wrapper {
        width: 100%;
    }

    .description {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-top: 9px;
    }

    .block-list {
        width: calc(100vw - 32px);
        flex-wrap: wrap;
        margin-top: 32px;
    }

    .block-item {
        width: 42.8vw;
        height: 109px;
        border-radius: 12px;
        margin-top: 14px;
        padding-left: 10px;
    }
    .block-item:first-child {
        margin-top: 0;
    }

    .block-item:nth-child(2) {
        margin-top: 0;
    }

    .block-title {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-top: 6px;
    }

    .block-text {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-align: left;
        margin-top: 5px !important;
        width: 113px;
        margin-bottom: 0;
    }
    .block-item:last-child .block-text {
        display: none;
    }

    .tooltip_up {
        display: none !important;
    }

    .tooltip {
        display: none !important;
    }

    .button {
        width: calc(100vw - 32px);
        height: 44px;
        padding: 0 66px 0 66px;
        margin-top: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .button__text {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0.1px;
        text-align: center;
    }
    .button-wrapper {
        width: 157px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}</style>
