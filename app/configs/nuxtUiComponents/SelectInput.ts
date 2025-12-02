export const SelectInputUIConfig = {
  slots: {
    root: "w-full",
    base: "w-full h-12 rounded-lg bg-white",
    placeholder: "text-[#474747] text-xs md:text-sm",
    item: [
      "hover:bg-brand-100 data-highlighted:not-data-disabled:before:bg-brand-100",
    ],
    menu: "z-[9999] shadow-lg",
    content: "z-[9999]",
  },
  variants: {
    variant: {
      outline: "ring-0 border border-[#EBEBEB]",
      subtle: "ring-0 border border-[#EBEBEB]",
    },
    color: {
      error: "ring-0 border border-red-500",
    },
  },
  compoundVariants: [
    {
      color: "error",
      variant: ["outline", "subtle"],
      class:
        "ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent",
    },
    {
      color: "primary",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent",
    },
    {
      color: "primary",
      highlight: true,
      class: "ring-0 ring-offset-0 ring-transparent",
    },
  ],
};
