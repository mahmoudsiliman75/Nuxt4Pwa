export const BreadcrumbUIConfig = {
  slots: {
    link: 'text-lg',
    separatorIcon: 'text-[#212121]/60',
  },
  variants: {
    active: {
      true: {
        link: 'text-[#212121]/60 font-normal'
      },
      false: {
        link: 'text-[#212121]/60 font-normal'
      }
    },
  },
  compoundVariants: {
  }
}