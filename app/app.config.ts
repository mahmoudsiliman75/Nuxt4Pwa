import { FormFieldUIConfig } from '@/configs/nuxtUiComponents/FormField';
import { InputUIConfig } from '@/configs/nuxtUiComponents/Inputs';
import { TextareaUIConfig } from '@/configs/nuxtUiComponents/Textarea';
import { OtpUIConfig } from '@/configs/nuxtUiComponents/OtpInput';
import { SelectInputUIConfig } from '@/configs/nuxtUiComponents/SelectInput';
import { ButtonUIConfig } from '@/configs/nuxtUiComponents/Button';
import { CarouselUIConfig } from '@/configs/nuxtUiComponents/Carousel';
import { PaginationUIConfig } from '@/configs/nuxtUiComponents/Pagination';
import { TimelineUIConfig } from '@/configs/nuxtUiComponents/Timeline';
import { BreadcrumbUIConfig } from '@/configs/nuxtUiComponents/Breadcrumb';
import { AccordionUIConfig } from '@/configs/nuxtUiComponents/Accordion';

export default defineAppConfig({
  ui: {
    formField: FormFieldUIConfig as any,
    input: InputUIConfig as any,
    textarea: TextareaUIConfig as any,
    pinInput: OtpUIConfig as any,
    selectMenu: SelectInputUIConfig as any,
    button: ButtonUIConfig as any,
    carousel: CarouselUIConfig as any,
    pagination: PaginationUIConfig as any,
    timeline: TimelineUIConfig as any,
    breadcrumb: BreadcrumbUIConfig as any,
    accordion: AccordionUIConfig as any,
  },
});