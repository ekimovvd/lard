<template>
  <section
    id="contacts"
    class="contacts-section"
  >
    <div class="contacts-section__container container-small">
      <div class="contacts-section__header">
        <UiTag class="contacts-section__tag">
          Помогли более чем 50 компаниям настроить и обезопасить свой бизнес
        </UiTag>

        <h2 class="contacts-section__title">
          Оставьте заявку на заказ пакета услуг Lard Defender
        </h2>
      </div>

      <form
        class="contacts-section__form"
        @submit.prevent.stop=""
      >
        <div class="contacts-section__fields">
          <div class="contacts-section__field">
            <input
              v-model="form.email"
              type="email"
              class="contacts-section__input-email"
              placeholder="Почта*"
            >

            <span
              v-if="v$.email.$error"
              class="contacts-section__error"
            >
              {{ displayedEmailError }}
            </span>
          </div>

          <div class="contacts-section__field">
            <input
              v-model="form.fio"
              type="text"
              class="contacts-section__input-fio"
              placeholder="ФИО*"
            >

            <span
              v-if="v$.fio.$error"
              class="contacts-section__error"
            >
              Обязательное поле
            </span>
          </div>

          <textarea
            v-model="form.description"
            cols="30"
            rows="10"
            class="contacts-section__input-description"
            placeholder="Дополнительное описание"
          />
        </div>

        <UiButton
          view="default"
          size="large"
          type="submit"
          :is-expanded="true"
          @click="submitForm"
        >
          <span class="contacts-section__text">
            Отправить
          </span>

          <img
            src="../../assets/arrow.svg"
            alt="arrow"
            class="contacts-section__icon"
          >
        </UiButton>
      </form>
    </div>

    <ModalsContainer />
  </section>
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import UiButton from '../ui/UiButton.vue'
import UiTag from '../ui/UiTag.vue'
import UiModal from '../ui/UiModal.vue'

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

const displayedEmailError = computed(() => {
  if (v$.value.email.$model.length)
    return 'Неверный формат email'

  return 'Обязательное поле'
})

const clearForm = (): void => {
  form.email = ''
  form.fio = ''
  form.description = ''
}

const { open, close } = useModal({
  component: UiModal,
  attrs: {
    onConfirm() {
      close()
      clearForm()
    },
  },
})

const submitForm = () => {
  v$.value.$validate()

  if (v$.value.$invalid)
    return

  open()
}
</script>

<style lang="scss" scoped>
.contacts-section {
  width: 100%;
  box-sizing: border-box;
  padding: 100px 80px 106px 80px;
  background-color: rgba(245, 245, 245, 1);

  @media screen and (max-width: 649px) {
    padding: 50px 16px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 56px;

    @media screen and (max-width: 649px) {
      row-gap: 28px;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;

    @media screen and (max-width: 649px) {
      row-gap: 12px;
    }
  }

  &__tag {
    @media screen and (max-width: 649px) {
      max-width: 260px;
    }
  }

  &__title {
    color: #333333;
    font-size: 52px;
    font-family: Inter;
    font-weight: 700;
    line-height: 62.40px;
    text-align: center;
    max-width: 784px;

    @media screen and (max-width: 649px) {
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
      max-width: 286px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 28px;
    max-width: 552px;
    width: 100%;

    @media screen and (max-width: 649px) {
      row-gap: 32px;
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  &__input-email {
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

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }

    &::placeholder {
      color: #868686;
      font-size: 16px;
      font-family: Inter;
      font-weight: 400;
      line-height: 22.40px;

      @media screen and (max-width: 649px) {
        font-size: 14px;
      }
    }
  }

  &__input-fio {
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

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }

    &::placeholder {
      color: #868686;
      font-size: 16px;
      font-family: Inter;
      font-weight: 400;
      line-height: 22.40px;

      @media screen and (max-width: 649px) {
        font-size: 14px;
      }
    }
  }

  &__input-description {
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
    width: 100%;
    resize: none;

    @media screen and (max-width: 649px) {
      font-size: 14px;
    }

    &::placeholder {
      color: #868686;
      font-size: 16px;
      font-family: Inter;
      font-weight: 400;
      line-height: 22.40px;

      @media screen and (max-width: 649px) {
        font-size: 14px;
      }
    }
  }

  &__text {
    color: white;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 1.7px;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__error {
    display: block;
    margin-top: 8px;
    color: red;
    font-size: 14px;
    font-family: Inter;
    font-weight: 400;
    line-height: 16px;
  }
}
</style>
