<script setup lang="ts">
// I18n
const { t } = useI18n();

// Props
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  label: {
    type: String as PropType<string>,
    required: false,
  },
  placeholder: {
    type: String as PropType<string>,
    required: false,
  },
  items: {
    type: Array as PropType<{ id: string | number; label: string }[]>,
    required: true,
  },
  required: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  multiple: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  icon: {
    type: String as PropType<string>,
    required: false,
  },
  trailingIcon: {
    type: String as PropType<string>,
    required: false,
    default: "i-lucide-chevron-down",
  },
  loading: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  searchable: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  searchPlaceholder: {
    type: String as PropType<string>,
    required: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  error: {
    type: String as PropType<string>,
    required: false,
  },
});

// Input Value
const model = defineModel<string | number | string[] | number[] | undefined>();
</script>

<template>
  <FormField
    :ui="{
      label: `${!!error ? 'text-error' : ''}`,
    }"
    :name="name"
    :label="label"
    :required="required"
    :error="error"
  >
    <SelectMenu
      variant="outline"
      :name="name"
      value-key="id"
      :placeholder="placeholder"
      :icon="icon"
      :trailing-icon="trailingIcon"
      :multiple="multiple"
      :loading="loading"
      :disabled="disabled"
      :search-input="
        searchable
          ? {
              placeholder: !!searchPlaceholder
                ? searchPlaceholder
                : t('COMMON.INPUTS.Placeholders.search'),
              icon: 'i-lucide-search',
            }
          : false
      "
      :items="items"
      v-model="model"
    >
      <template #trailing>
        <slot name="arrow"></slot>
      </template>
    </SelectMenu>
  </FormField>
</template>

<style scoped>
/* Ensure dropdown appears above modals and other overlays */
:deep(.absolute) {
  z-index: 9999 !important;
}

:deep([data-radix-popper-content-wrapper]) {
  z-index: 9999 !important;
}

:deep([data-radix-select-content]) {
  z-index: 9999 !important;
}
</style>
