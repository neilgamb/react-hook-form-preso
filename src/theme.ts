import { Checkbox, createTheme, Radio, RadioGroup } from '@mantine/core';

export const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({
      styles: () => ({
        input: {
          cursor: 'pointer',
        },
      }),
    }),
    Radio: Radio.extend({
      styles: () => ({
        radio: {
          cursor: 'pointer',
        },
      }),
    }),
    RadioGroup: RadioGroup.extend({
      styles: (theme) => ({
        error: {
          marginTop: theme.spacing.sm,
        },
      }),
    }),
  },
});
