<template>
  <div class="ui-tag">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ui-tag {
  color: rgba(132, 36, 222, 1);
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 18px;
  background-color: rgba(132, 36, 222, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  width: fit-content;
  padding: 12px 16px;
  text-align: center;

  @media screen and (max-width: 649px) {
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    padding: 10px 8px;
  }
}
</style>
