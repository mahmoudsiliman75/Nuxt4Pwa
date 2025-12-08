/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

import { clientsClaim } from 'workbox-core'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

// self.__WB_MANIFEST is default injection point
// precacheAndRoute(self.__WB_MANIFEST)

// // clean old assets
// cleanupOutdatedCaches()

// self.skipWaiting()
// clientsClaim()



const cacheName = 'NUXT-PWA-APP-ASSETS-CACHE-V1';

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      // const urlsToCache = self.__WB_MANIFEST.map((entry) => typeof entry === 'string' ? entry : entry.url)
      
      const urlsToCache = [
        '/',
        '/about',
        '/manifest.webmanifest',
        '/favicon.svg',
        '/favicon.ico',
        '/icon-72.png',
        '/icon-96.png',
        '/icon-128.png',
        '/icon-192.png',
        '/icon-180.png',
        '/icon-256.png',
        '/icon-512.png',
      ]

      cache.addAll(urlsToCache)
      .then(() => {
        console.log('Assets installation completed successfully')
      })
      .catch((error) => {
        console.error('Assets installation failed:', error)
      })
    })
    .catch((error) => {
      console.error('Service Worker installation failed:', error)
    })
  )
})

self.addEventListener('activate', (activateEvent) => {
  activateEvent.waitUntil(
    caches.keys()
    .then((cacheKeys) => {
      return Promise.all(
        cacheKeys.map((cacheKey) => {
          if (cacheKey !== cacheName) {
            return caches.delete(cacheKey)
          }
        })
      )
    })
    .catch((error) => {
      console.error('Service Worker activation failed:', error)
    })
  )
})

// self.addEventListener('fetch', (fetchEvent) => {
//   // console.log('Service Worker fetching...', fetchEvent)
// })
