<script setup lang="ts">
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
  rows: {
    type: Number as PropType<number>,
    required: false,
    default: 7,
  },
  required: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  icon: {
    type: String as PropType<string>,
    required: false,
  },
  iconClass: {
    type: String as PropType<string>,
    required: false,
  },
  loading: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
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
const model = defineModel<string>();
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
    <Textarea 
      variant="outline"
      :rows="rows"
      :name="name"
      :placeholder="placeholder"
      :loading="loading"
      :disabled="disabled"
      v-model="model"
    >
      <template #trailing v-if="icon">
        <Icon :name="icon" :class="iconClass || 'text-gray-400 text-xl'" />
      </template>
    </Textarea>
  </FormField>
</template>
