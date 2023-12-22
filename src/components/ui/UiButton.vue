<template>
  <button
    class="ui-button"
    :class="{
      [`ui-button--view-${view}`]: view,
      [`ui-button--size-${size}`]: size,
      ['ui-button--disabled']: isDisabled,
      ['ui-button--expanded']: isExpanded,
    }"
    :disabled="isDisabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

enum UiButtonView {
  default = 'default',
  extra = 'extra',
  primary = 'primary'
}

enum UiButtonSize {
  large = 'large',
}

interface Props {
  view?: string
  size?: string
  isDisabled?: boolean
  isExpanded?: boolean
}

withDefaults(defineProps<Props>(), {
  view: UiButtonView.default,
  size: UiButtonSize.large,
  isDisabled: false,
  isExpanded: false,
})
</script>

<style lang="scss" scoped>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: all 0.35s ease-in-out;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  gap: 16px;
  white-space: nowrap;

  &--view {
    &-default {
      color: #fff;
      background-color: #8424DE;

      &:hover {
        background-color: #8C37DC;
      }

      &:focus, &:active {
        background-color: #8C37DD;
      }
    }

    &-extra {
      color: #8424DE;
      background-color: #fff;

      &:hover {
        background-color: #EBEBEB;
      }

      &:focus, &:active {
        border: 5px solid #8424DE;
        background-color: #EBEBEB;
      }
    }

    &-primary {
      color: #8424DE;
      background-color: rgba(132, 36, 222, 0.10);

      &:hover {
        background-color: rgba(141, 47, 228, 0.1);
      }

      &:focus, &:active {
        background-color: rgba(132, 36, 222, 0.10);
      }
    }
  }

  &--size {
    &-large {
      border-radius: 12px;
      padding: 0 20px 0 24px;
      height: 52px;
      border: 5px solid transparent;
    }
  }

  &--disabled {
    background-color: #BEBEBE;
    border-color: #BEBEBE;
    cursor: initial;

    &:hover {
      background-color: #BEBEBE;
    }

    &:focus, &:active {
      background-color: #BEBEBE;
    }
  }

  &--expanded {
    width: 100%;
  }
}
</style>
