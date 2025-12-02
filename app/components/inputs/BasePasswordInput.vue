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
  required: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  icon: {
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
})

// Input Value
const model = defineModel<string>()

// Handel password toggling
const show = ref(false)
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
    <Input
      variant="outline"
      :ui="{ trailing: 'pe-1' }"
      :type="show ? 'text' : 'password'"
      :name="name"
      :placeholder="placeholder"
      :trailing-icon="icon"
      :loading="loading"
      :disabled="disabled"
      v-model="model"
    >
      <template #trailing>
        <Button
          color="neutral"
          variant="link"
          size="xl"
          :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :aria-label="show ? 'Hide password' : 'Show password'"
          :aria-pressed="show"
          aria-controls="password"
          @click="show = !show"
        />
      </template>
    </Input>
  </FormField>
</template>