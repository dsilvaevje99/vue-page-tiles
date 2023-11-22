import type { Tile } from "./interfaces";

import {
  HEADING_TEMPLATE,
  PARAGRAPH_TEMPLATE,
  VERTICAL_SPACER_TEMPLATE,
  COLUMNS_TEMPLATE,
  BANNER_TEMPLATE,
  ACCORDION_TEMPLATE,
} from "./tile-templates";

import { Bars3BottomLeftIcon, ArrowsUpDownIcon } from "@heroicons/vue/20/solid";
import {
  ViewColumnsIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import { HeaderIcon } from "./assets/custom-icons";

export const HEADING_VARIANTS = [
  { type: "h1", size: "4xl" },
  { type: "h2", size: "2xl" },
  { type: "h3", size: "xl" },
  { type: "h4", size: "lg" },
  { type: "h5", size: "base" },
  { type: "h6", size: "sm" },
];

export const COLUMNS_VARIANTS = [
  { columns: [[], []] },
  { columns: [[], [], []] },
  { columns: [[], [], [], []] },
];

export const BANNER_VARIANTS = [
  { bannerType: "info" },
  { bannerType: "warning" },
];

export default <Tile[]>[
  {
    title: "Heading",
    icon: HeaderIcon,
    template: HEADING_TEMPLATE,
    variants: HEADING_VARIANTS.map((variant) => ({
      ...HEADING_TEMPLATE,
      attrs: {
        headerType: variant.type,
        fontSize: variant.size,
      },
    })),
  },
  {
    title: "Paragraph",
    icon: Bars3BottomLeftIcon,
    template: PARAGRAPH_TEMPLATE,
  },
  {
    title: "Spacer",
    icon: ArrowsUpDownIcon,
    template: VERTICAL_SPACER_TEMPLATE,
  },
  {
    title: "Columns",
    icon: ViewColumnsIcon,
    template: COLUMNS_TEMPLATE,
    variants: COLUMNS_VARIANTS.map(({ columns }) => ({
      ...COLUMNS_TEMPLATE,
      data: {
        columns,
      },
    })),
  },
  {
    title: "Banner",
    icon: ExclamationTriangleIcon,
    template: BANNER_TEMPLATE,
    variants: BANNER_VARIANTS.map(({ bannerType }) => ({
      ...BANNER_TEMPLATE,
      attrs: {
        bannerType,
      },
    })),
  },
  {
    title: "Accordion",
    icon: ChevronDownIcon,
    template: ACCORDION_TEMPLATE,
  },
];
