<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

import UiTag from './UiTag.vue'
import UiButton from './UiButton.vue'

const emit = defineEmits(['confirm'])

const getInitialValues = {
  modelValue: false,
  hideOverlay: false,
  overlayTransition: 'vfm-fade',
  contentTransition: 'vfm-fade',
  clickToClose: false,
  escToClose: false,
  lockScroll: true,
  reserveScrollBarGap: true,
}
</script>

<template>
  <VueFinalModal
    v-bind="getInitialValues"
    class="ui-modal"
    content-class="ui-modal__wrapper"
  >
    <div class="ui-modal__content">
      <UiTag>
        Спасибо!
      </UiTag>

      <h4 class="ui-modal__title">
        Ваша заявка успешно отправлена!
      </h4>
    </div>

    <UiButton
      class="ui-modal__button"
      view="default"
      size="large"
      :is-expanded="true"
      @click="emit('confirm')"
    >
      Вернуться на сайт
    </UiButton>
  </VueFinalModal>
</template>

<style lang="scss">
.ui-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 59px;
    background-color: #fff;
    border-radius: 16px;
    padding: 96px 0;
    width: 100%;
    max-width: 650px;

    @media screen and (max-width: 649px) {
      border-radius: 12px;
      max-width: 80%;
      padding: 40px 16px;
      row-gap: 40px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;

    @media screen and (max-width: 649px) {
      row-gap: 16px;
    }
  }

  &__title {
    color: #000F2B;
    text-align: center;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43.166px;
    max-width: 415px;

    @media screen and (max-width: 650px) {
      font-size: 20px;
      line-height: 120%;
    }
  }

  &__button {
    @media screen and (min-width: 650px) {
      max-width: 210px;
    }
  }
}
</style>
