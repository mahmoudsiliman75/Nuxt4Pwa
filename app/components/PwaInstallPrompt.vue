<script setup lang="ts">
const { $pwa } = useNuxtApp()

// Check if PWA can be installed
const canInstall = computed(() => $pwa?.showInstallPrompt ?? false)
const isInstalled = computed(() => $pwa?.isPWAInstalled ?? false)

// Install state
const isInstalling = ref(false)

// Handle install click
const handleInstall = async () => {
  if (!$pwa?.install) return

  isInstalling.value = true
  try {
    await $pwa.install()
  } catch (error) {
    console.error('Failed to install PWA:', error)
  } finally {
    isInstalling.value = false
  }
}

// Handle cancel
const handleCancel = () => {
  if ($pwa?.cancelInstall) {
    $pwa.cancelInstall()
  }
}
</script>

<template>
  <div 
    v-if="canInstall && !isInstalled" 
    class="pwa-install-prompt"
  >
    <div class="prompt-card">
      <div class="prompt-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>

      <div class="prompt-content">
        <h3 class="prompt-title">Install App</h3>
        <p class="prompt-description">
          Install this app on your device for a better experience.
        </p>
      </div>

      <div class="prompt-actions">
        <button class="btn-install" :disabled="isInstalling" @click="handleInstall">
          <span v-if="!isInstalling">Install</span>
          <span v-else class="installing">
            <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
            </svg>
            Installing...
          </span>
        </button>

        <button class="btn-cancel" :disabled="isInstalling" @click="handleCancel">
          Not now
        </button>
      </div>
    </div>
  </div>

  <div
    v-else-if="isInstalled" 
    class="pwa-installed"
  >
    <div class="installed-card">
      <div class="installed-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <span class="installed-text">App Installed</span>
    </div>
  </div>
</template>

<style scoped>
.pwa-install-prompt {
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.prompt-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  color: white;
  position: relative;
  overflow: hidden;
}

.prompt-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.prompt-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  backdrop-filter: blur(10px);
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.prompt-content {
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.prompt-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.prompt-description {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.5;
  margin: 0;
}

.prompt-actions {
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.btn-install,
.btn-cancel {
  flex: 1;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-install {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-install:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn-install:active:not(:disabled) {
  transform: translateY(0);
}

.btn-install:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.btn-cancel:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
}

.installing {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Installed state */
.pwa-installed {
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
}

.installed-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.3);
  animation: slideUp 0.3s ease-out;
}

.installed-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.installed-text {
  font-size: 1rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 640px) {

  .pwa-install-prompt,
  .pwa-installed {
    margin: 1rem;
  }

  .prompt-card {
    padding: 1.5rem;
  }

  .prompt-actions {
    flex-direction: column;
  }

  .btn-install,
  .btn-cancel {
    width: 100%;
  }
}
</style>
