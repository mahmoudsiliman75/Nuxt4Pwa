<script setup lang="ts">
// Handel app locale and direction
const { t, locale, locales } = useI18n()
const currentLocale = computed(() => locales.value.find(l => l.code === locale.value))
const dir = computed(() => currentLocale.value?.dir as 'rtl' | 'ltr')

// Set App Title Template
useSeoMeta({
  titleTemplate: titleChunk => {
    return titleChunk ? `${t('COMMON.APP_NAME')} - ${titleChunk}` : t('COMMON.APP_NAME')
  },
  description: t('COMMON.APP_DESC'),
  ogTitle: t('COMMON.APP_NAME'),
  ogDescription: t('COMMON.APP_DESC'),
  ogImage: '/og.png',
  ogImageAlt: t('COMMON.APP_NAME'),
  ogUrl: 'https://nuxt.com/',
  twitterTitle: t('COMMON.APP_NAME'),
  twitterDescription: t('COMMON.APP_DESC'),
  twitterImage: '/og.png',
  twitterImageAlt: t('COMMON.APP_NAME'),
  twitterCard: 'summary',
  // themeColor: '#016b53',
  // author: 'Nuxt4Project',
})
</script>

<template>
  <Html :lang="locale" :dir="dir">
  <App :locale="{
    code: locale,
    dir: dir,
  }" :toaster="{
        position: 'top-right' as const,
        expand: true,
        duration: 4000,
      }">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPwaManifest />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </App>

  </Html>
</template>
