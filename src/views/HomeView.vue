<script setup>
import Navbar from '../components/organisms/Navbar.vue'
import Hero from '../components/organisms/Hero.vue'
import MarketEvolution from '../components/organisms/MarketEvolution.vue'
import ImpactOurMarket from '../components/organisms/ImpactOurMarket.vue'
import EscapeOut from '../components/organisms/EscapeOut.vue'
import BecauseYouCan from '../components/organisms/BecauseYouCan.vue'
import AboutEsc from '../components/organisms/AboutEsc.vue'
import ExploreOurApp from '../components/organisms/ExploreOurApp.vue'
import FutureUpdates from '../components/organisms/FutureUpdates.vue'
import Doubts from '../components/organisms/Doubts.vue'
import Footer from '../components/organisms/Footer.vue'
</script>

<template>
  <main class="body">
    <Navbar />
    <Hero />
    <MarketEvolution />
    <ImpactOurMarket />
    <EscapeOut />
    <BecauseYouCan />
    <AboutEsc />
    <ExploreOurApp />
    <FutureUpdates />
    <Doubts />
    <Footer />
  </main>
</template>

<style scoped>
.body {
  background:
    url('/bg.png') no-repeat,
    url('/circle-green.png') no-repeat #12111f;
  background-size: 100%;
}
</style>
