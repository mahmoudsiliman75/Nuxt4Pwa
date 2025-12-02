export const AccordionUIConfig = {
  slots: {
    base: 'space-y-3',
    item: 'border border-dashed border-[#4885FF]/40 rounded-lg bg-white overflow-hidden transition-all duration-300',
    trigger: [
      'flex items-center justify-between w-full py-4 px-5 text-right text-[#0B3B63] font-bold text-lg',
      'hover:bg-[#F5FAFF] transition-colors duration-200'
    ],
    content: 'px-5 py-4 text-gray-700 text-base leading-relaxed bg-white',
    icon: 'text-[#4885FF] transition-transform duration-200 ui-open:rotate-180',
  },
}
