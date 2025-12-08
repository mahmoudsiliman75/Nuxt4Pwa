<script setup lang="ts">
const { t } = useI18n()

const pwa = usePWA()
</script>

<template>
  <div>
    <ul class="flex justify-center gap-3">
      <li>
        <NuxtLinkLocale to="/">
          Home
        </NuxtLinkLocale>
      </li>
      <li>
        <NuxtLinkLocale to="/about">
          About
        </NuxtLinkLocale>
      </li>
    </ul>

    <h1 class="text-center text-3xl font-bold my-8">
      HOME
    </h1>

    <!-- PWA Install Prompt -->
    <PwaInstallPrompt />

    <!-- Debug information (for development) -->
    <ClientOnly>
      <details
        dir="ltr"
        open
        class="max-w-2xl mx-auto mt-8 p-4 bg-gray-100 rounded-lg"
      >
        <summary class="cursor-pointer font-semibold text-gray-700">
          PWA Debug Info
        </summary>
        <pre dir="ltr" class="mt-4 text-xs overflow-auto">{{ pwa }}</pre>
      </details>
    </ClientOnly>
  </div>
</template>
