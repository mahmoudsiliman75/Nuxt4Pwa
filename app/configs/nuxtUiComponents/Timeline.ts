export const TimelineUIConfig = {
  slots: {
    root: 'gap-0',
    container: 'gap-0',
    title: 'mb-4 text-title-clr text-lg md:text-2xl',
    description: 'text-[#121212]/50 text-sm md:text-base'
  },

  variants: {
    orientation: {
      vertical: {
        separator: 'w-0.5 md:w-1'
      }
    },
    color: {
      brand: {
        indicator: 'group-data-[state=completed]:bg-linear-to-r group-data-[state=completed]:from-[#00D5FE] group-data-[state=completed]:to-[#0C3EC8] group-data-[state=active]:bg-linear-to-r group-data-[state=active]:from-[#00D5FE] group-data-[state=active]:to-[#0C3EC8]'
      },
    },
  },

  compoundVariants: [
    {
      color: 'brand',
      reverse: false,
      class: {
        separator: 'group-data-[state=completed]:bg-linear-to-b group-data-[state=completed]:from-[#00D5FE] group-data-[state=completed]:to-[#0C3EC8]'
      }
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: {
        wrapper: 'pb-6 md:pb-12',
        indicator: 'size-4 md:size-8'
      }
    },
  ]
}