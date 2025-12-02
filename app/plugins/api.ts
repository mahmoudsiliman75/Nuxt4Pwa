import type { Composer } from 'vue-i18n';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const user = useCookie('nuxt4_app_user');
  const token = useCookie('nuxt4_app_token');

  
  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl || '',
    
    onRequest({ options }) {
      const i18n = (nuxtApp.$i18n || nuxtApp.runWithContext(() => useI18n())) as Composer;

      const lang = i18n?.locale?.value || useCookie('i18n_locale').value || 'ar';

      if (token.value) {
        options.headers.set('Authorization', `Bearer ${token.value}`);
      }

      options.headers.set('Accept', 'application/json');
      options.headers.set('Accept-Language', lang);
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        user.value = null;
        token.value = null;
        const i18n = (nuxtApp.$i18n || nuxtApp.runWithContext(() => useI18n())) as Composer;
        const lang = i18n?.locale?.value || useCookie('i18n_locale').value || 'ar';
        await nuxtApp.runWithContext(() => navigateTo(`/${lang}/login`));
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});