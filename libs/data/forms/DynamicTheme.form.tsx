import { EDynamicFormField, IField } from '@app/modules'

export const DYNAMIC_THEME_FORM: IField[] = [
  {
    label: 'Company Startup Name',
    name: 'companyName',
    type: EDynamicFormField.INPUT,
    placeholder: 'Google Inc.',
  },
  {
    inline: [
      {
        label: 'Primary Theme Color',
        name: 'primaryColor',
        type: EDynamicFormField.COLOR_PICKER,
      },
      {
        label: 'Secondary Theme Color',
        name: 'secondaryColor',
        type: EDynamicFormField.COLOR_PICKER,
      },
    ],
  },
  {
    label: 'Compact Theme',
    name: 'isCompact',
    type: EDynamicFormField.CHECKBOX,
    title: 'Enable Compact Theme',
  },
  {
    label: 'Font Family',
    name: 'fontFamily',
    placeholder: 'Change Font Family',
    type: EDynamicFormField.SELECT,
    options: [
      { label: 'Avenir', value: 'Avenir' },
      { label: 'Apercu Pro', value: 'Apercu Pro' },
      { label: 'Axiforma', value: 'Axiforma' },
      { label: 'Hellix', value: 'Hellix' },
      { label: 'LexendDeca', value: 'LexendDeca' },
      { label: 'UberMove', value: 'UberMove' },
      { label: 'TTNorms', value: 'TTNorms' },
      { label: 'Gotham', value: 'Gotham' },
      { label: 'Garnett', value: 'Garnett' },
      { label: 'Inter', value: 'Inter' },
      { label: 'Outfit', value: 'Outfit' },
      { label: 'Calibre', value: 'Calibre' },
      { label: 'Inter', value: 'Inter' },
      { label: 'GDSherpa', value: 'GDSherpa' },
      { label: 'Gordita', value: 'Gordita' },
      { label: 'Lora', value: 'Lora' },
      { label: 'Alpino', value: 'Alpino' },
    ],
  },
  {
    label: 'Font Size',
    name: 'fontSize',
    placeholder: 'Change Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Heading 1',
    name: 'fontSizeHeading1',
    placeholder: 'Set Heading 1 Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Heading 2',
    name: 'fontSizeHeading2',
    placeholder: 'Set Heading 2 Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Heading 3',
    name: 'fontSizeHeading3',
    placeholder: 'Set Heading 3 Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Heading 4',
    name: 'fontSizeHeading4',
    placeholder: 'Set Heading 4 Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Heading 5',
    name: 'fontSizeHeading5',
    placeholder: 'Set Heading 5 Font Size',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Control Height',
    name: 'controlHeight',
    placeholder: 'Set Control Height',
    type: EDynamicFormField.NUMBER,
  },
  {
    label: 'Border Radius',
    name: 'borderRadius',
    placeholder: 'Set Border Radius',
    type: EDynamicFormField.NUMBER,
  },
]
