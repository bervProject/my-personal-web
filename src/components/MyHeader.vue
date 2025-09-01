<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/my-logo.png" alt="Logo" style="max-height: 3rem;" />
      </router-link>

      <!-- Mobile toggle button (optional) -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{ 'navbar-menu': true, 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item has-text-weight-semibold">
          {{ $t('common.home') }}
        </router-link>
        <router-link to="/certification" class="navbar-item has-text-weight-semibold">
          {{ $t('common.certification') }}
        </router-link>
        <router-link to="/songs" class="navbar-item has-text-weight-semibold">
          {{ $t('navigation.favoritesong') }}
        </router-link>
      </div>
      <div class="navbar-end is-flex is-align-items-center" style="flex-wrap: wrap; gap: 0.5rem;">
        <div class="navbar-item">
          <o-button
            size="small"
            @click="toggleTheme"
          >
            <o-icon pack="fas" :icon="isDark ? 'moon' : 'sun'" /><span>{{ isDark ? 'Dark' : 'Light' }}</span>
          </o-button>
        </div>
        <div class="navbar-item">
          <o-dropdown
            position="auto"
            :max-height="'200px'"
            :auto-close="true"
          >
            <template #trigger>
              <o-button
                size="small"
              >
                🌐 {{ currentLocale.toUpperCase() }}
              </o-button>
            </template>
            <o-dropdown-item
              v-for="lang in availableLocales"
              :key="lang"
              @click="switchLanguage(lang)"
            >
              {{ lang.toUpperCase() }}
            </o-dropdown-item>
          </o-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./MyHeader.ts">
</script>
