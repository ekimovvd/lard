<script setup lang="ts">
import HeaderSection from './components/sections/HeaderSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesListSection from './components/sections/ServicesListSection.vue'
import SliderSection from './components/sections/SliderSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import AnchorSection from './components/sections/AnchorSection.vue'
import TariffsSection from './components/sections/TariffsSection.vue'
import SecuritySection from './components/sections/SecuritySection.vue'
import ContactsSection from './components/sections/ContactsSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
</script>

<template>
  <div class="app-page">
    <HeaderSection />
    <AboutSection />
    <ServicesListSection />
    <SliderSection />
    <FeaturesSection />
    <AnchorSection />
    <TariffsSection />
    <SecuritySection />
    <ContactsSection />
    <FooterSection />
  </div>
</template>

<style lang="scss">
.app-page {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
</style>
