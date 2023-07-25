import { EDynamicFormField, IField } from '@app/modules'

export const DYNAMIC_FILTERS_FORM: IField[] = [
  {
    name: 'multiSelectText',
    title: 'Multi Select Text',
    tooltipText: 'Cannot publish your course without a cover photo.',
    type: EDynamicFormField.TITLE,
  },
  {
    name: 'checkboxGroup',
    type: EDynamicFormField.CHECKBOX_GROUP,
    placeholder: '',
    options: [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
      {
        label: 'Option 4',
        value: 'option4',
      },
    ],
  },
  {
    name: 'dateFilter',
    title: 'Date Filter',
    type: EDynamicFormField.TITLE,
  },
  {
    inline: [
      {
        name: 'startDate',
        label: 'Select Start Date',
        placeholder: 'Select Start Date',
        type: EDynamicFormField.DATE,
      },
      {
        name: 'endDate',
        label: 'Select Start Date',
        placeholder: 'Select End Date',
        type: EDynamicFormField.DATE,
      },
    ],
  },
]
