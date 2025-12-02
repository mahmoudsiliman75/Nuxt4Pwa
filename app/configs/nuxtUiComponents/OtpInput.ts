export const OtpUIConfig = {
  slots: {
    root: 'flex justify-center',
    base: 'size-12 md:size-15 rounded-2xl bg-[#FAFAFA] focus-visible:bg-brand-100',
  },
  variants: {
    variant: {
      outline: 'ring-0 border border-[#EBEBEB]',
    },
    color: {
      error: 'ring-0 border border-red-500'
    }
  },
  compoundVariants: [
    {
      color: 'error',
      variant: [
        'outline',
      ],
      class: 'ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:bg-red-100'
    },
    {
      color: 'primary',
      variant: [
        'outline',
      ],
      class: 'focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent'
    },
    {
      color: 'primary',
      highlight: true,
      class: 'ring-0 ring-offset-0 ring-transparent'
    },
  ],
}