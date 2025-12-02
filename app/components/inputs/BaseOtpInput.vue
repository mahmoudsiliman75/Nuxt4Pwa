<script setup lang="ts">
// Props
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  placeholder: {
    type: String as PropType<string>,
    required: false,
  },
  required: {
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
})

// Input Value
const model = defineModel<string[]>();
</script>

<template>
  <FormField 
    :name="name"
    :required="required"
    :error="error"
    :ui="{
      error: 'text-center mt-2'
    }"
  >
    <PinInput
      dir="ltr"
      :name="name"
      :length="4"
      v-model="model"
      placeholder="-"
      color="brand"
      variant="outline"
      :disabled="disabled"
    />
  </FormField>
</template>