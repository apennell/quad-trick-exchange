'use client';

import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import type { ThemeType } from 'grommet';

export const theme: ThemeType = deepMerge(grommet, {
  global: {
    font: {
      /** Requires setting roboto_flex.variable as className on layout's html element */
      family: 'var(--font-roboto_flex)',
      size: '16px',
    },
  },
});
