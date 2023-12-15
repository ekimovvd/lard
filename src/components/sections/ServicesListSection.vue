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
            <component :is="item.icon" />
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
import ServerIcon from '../icons/ServerIcon.vue'
import FileIcon from '../icons/FileIcon.vue'
import UserIcon from '../icons/UserIcon.vue'
import DataflowIcon from '../icons/DataflowIcon.vue'

interface ServiceCardParams {
  icon: any
  title: string
}

const serviceCards: ServiceCardParams[] = [
  {
    icon: ServerIcon,
    title: 'Предоставим удалённый сервер'
  },
  {
    icon: FileIcon,
    title: 'Перенесём IT-инфраструктуру и данные в безопасное место'
  },
  {
    icon: UserIcon,
    title: 'Возьмём на контроль учётные записи сотрудников'
  },
  {
    icon: DataflowIcon,
    title: 'Зашифруем каналы передачи данных'
  }
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

    &:hover {
      .services-list-section {
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
