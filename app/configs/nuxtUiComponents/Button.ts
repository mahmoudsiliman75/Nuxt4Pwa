export const ButtonUIConfig = {
  slots: {
    base: 'justify-center rounded-lg text-lg cursor-pointer'
  },
  variants: {
    size: {
      md: {
        base: 'py-3.5 text-sm md:text-base'
      },
    },
  },
  compoundVariants: [
    {
      color: 'brand',
      variant: 'solid',
      class: ''
    },
    {
      color: 'secondary',
      variant: 'solid',
      class: 'bg-[#45C6FF] hover:bg-[#2ca4d8]'
    },
  ]
}