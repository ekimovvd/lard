<template>
  <section
    id="services-list"
    class="services-list-section"
  >
    <div class="services-list-section__container container">
      <ul class="services-list-section__list">
        <li
          v-for="(item, index) in serviceCards"
          :key="index"
          class="services-list-section__item"
        >
          <div class="services-list-section__icon">
            <div class="services-list-section__image" />
          </div>

          <p class="services-list-section__text">
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ServiceCardParams {
  title: string
}

const serviceCards: ServiceCardParams[] = [
  { title: 'Предоставим удалённый сервер' },
  { title: 'Перенесём IT-инфраструктуру и данные в безопасное место' },
  { title: 'Возьмём на контроль учётные записи сотрудников' },
  { title: 'Зашифруем каналы передачи данных' }
]
</script>

<style lang="scss" scoped>
.services-list-section {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -100px;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 1280px) {
    padding: 0 16px;
    padding-right: 16px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__container {
    border-radius: 16px;
    border: 1px solid #EBEBEB;
    background-color: #fff;
    padding: 32px 44px;

    @media screen and (max-width: 1280px) {
      padding: 20px;
      width: fit-content;
      margin-right: none;
      margin-left: none;
    }
  }

  &__list {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-flow: row wrap;
    flex-wrap: wrap;
    row-gap: 32px;

    @media screen and (max-width: 1280px) {
      flex-wrap: nowrap;
      flex-flow: row nowrap;
      column-gap: 20px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 2;
    row-gap: 24px;
    border-right: 1px solid #E8E8E8;

    @media screen and (max-width: 1280px) {
      padding-right: 20px;
      min-width: 200px;
    }

    &:last-child {
      border-right: none;
    }

    &:nth-child(1) {
      .services-list-section {
        &__image {
          background-image: url('../../assets/icons/server.svg');
        }
      }

      &:hover {
        .services-list-section {
          &__image {
            background-image: url('../../assets/icons/server-gradient.svg');
          }
        }
      }
    }

    &:nth-of-type(2) {
      .services-list-section {
        &__image {
          background-image: url('../../assets/icons/user.svg');
        }
      }

      &:hover {
        .services-list-section {
          &__image {
            background-image: url('../../assets/icons/user-gradient.svg');
          }
        }
      }
    }

    &:nth-of-type(3) {
      .services-list-section {
        &__image {
          background-image: url('../../assets/icons/file.svg');
        }
      }

      &:hover {
        .services-list-section {
          &__image {
            background-image: url('../../assets/icons/file-gradient.svg');
          }
        }
      }
    }

    &:nth-of-type(4) {
      .services-list-section {
        &__image {
          background-image: url('../../assets/icons/data.svg');
        }
      }

      &:hover {
        .services-list-section {
          &__image {
            background-image: url('../../assets/icons/data-gradient.svg');
          }
        }
      }
    }

    &:hover {
      .services-list-section {
        &__icon {
          background-color: #F0F4FB;
        }

        &__text {
          color: #000F2B;
        }
      }
    }
  }

  &__icon {
    padding: 14px 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8.63px;
    background-color: #F5F5F5;
    transition: .5s;
    width: fit-content;

    @media screen and (max-width: 650px) {
      padding: 11px 23px;
    }
  }

  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    width: 38px;
    height: 38px;
  }

  &__text {
    color: #868686;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    max-width: 240px;

    @media screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
}
</style>
