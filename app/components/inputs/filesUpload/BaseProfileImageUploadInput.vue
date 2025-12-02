<script setup>
import predictFileType from "@/utils/predictFileType.ts"

// Props
const props = defineProps({
  identifier: {
    required: true,
    type: String,
  },
  preSelectedImage: {
    required: false,
    type: String,
  },
  placeholder: {
    required: false,
    type: String,
  },
  inputError: {
    required: false,
    type: String,
  },
  required: {
    required: false,
    type: Boolean,
    default: false,
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
})

// Emits
const emits = defineEmits(['@selectDocument', '@clearErrors'])

// I18n 
const {t} = useI18n()

// File Data
const document = ref({
  path: null,
  file: null,
  name: null,
  uploadedPath: null,
})

// Select Document
const toast = useToast()
const selectDocumentToUpload = (e) => {
  if(e.target.files[0].size > 15000000) {
    toast.add({ 
      title: t('COMMON.STATUS.warning'),
      description: t('COMMON.MESSAGES.selectedFileSize', {size: 15}),
      icon: 'codicon:error',
      color: 'warning'
    })
  } else {
    if (predictFileType(e.target.files[0].name) !== "image_file") {
      toast.add({ 
        title: t('COMMON.STATUS.warning'),
        description: t('COMMON.MESSAGES.selectedFileMustBeImage'),
        icon: 'codicon:error',
        color: 'warning'
      })
      return
    } else {
      document.value.path = URL.createObjectURL(e.target.files[0])
      document.value.file = e.target.files[0]
      document.value.name = e.target.files[0].name
      emits("@selectDocument", {
        identifier: props.identifier,
        ...document.value,
      })
      emits("@clearErrors")
      // console.log("SELECTED =>", document)
    }
  }
}
</script>

<template>
  <div 
    :class="{
      disabled: disabled, 
      'has-error': inputError,
    }"
    class="group flex flex-col items-center justify-center"
  >
    <div>
      <input
        class="hidden"
        type="file"
        accept="image/*"
        :id="identifier"
        @change="selectDocumentToUpload"
        :disabled="disabled"
      />

      <label
        class="
          relative flex items-center justify-center gap-4 cursor-pointer
        "
        :for="identifier"
      > 
        <div>
          <div 
            v-if="!document.name && !preSelectedImage"
            class="
              size-25 md:size-30 flex items-center justify-center bg-[#F3F4F6] 
              rounded-full group-[.has-error]:border group-[.has-error]:!border-red-500
            "
          >
            <svg class="size-10 md:size-15">
              <use xlink:href="/spriteIcons/sprites.svg#user_image"></use>
            </svg>
          </div>

          <NuxtImg
            v-if="document.path"
            presets="default" 
            :src="document.path" 
            width="120" 
            height="120" 
            alt="user image"
            title="user image"
            class="w-[120px] md:h-[120px] object-cover object-center rounded-full group-[.has-error]:border group-[.has-error]:!border-red-500"
          />

          <NuxtImg
            v-else-if="!(!!document.name) && !!preSelectedImage"
            presets="default" 
            :src="preSelectedImage" 
            width="120" 
            height="120" 
            alt="user image"
            title="user image"
            class="w-[120px] md:h-[120px] object-cover object-center rounded-full group-[.has-error]:border group-[.has-error]:!border-red-500"
          />
        </div>

        <svg class="absolute bottom-0 left-0 size-7 md:size-10">
          <use xlink:href="/spriteIcons/sprites.svg#camera"></use>
        </svg>
      </label>
    </div>

    <p 
      v-if="!!inputError"
      class="my-1.5 text-center text-sm text-error"
    >
      {{inputError}}
    </p>
  </div>
</template>