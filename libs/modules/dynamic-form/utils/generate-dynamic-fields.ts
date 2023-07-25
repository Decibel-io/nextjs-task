import { IField } from '../types'

// This interface is kept here because it will only be used here
interface IUpdateItem {
  name: string
  value?: any
  disabled?: boolean
  options?: {
    label: string
    value: any
  }[]
}

/**
 * WRAPPER FUNCTION THAT UPDATE FIELDS ON RUNTIME
 * A recursive function that takes an array of form fields and an array of fields to update.
 * It loops through the fields to update and updates the form fields.
 * @param {IField[]} formFields main form fields that we will update and return
 * @param {IUpdateItem[]} updateItems contains the data to be merged in formFields
 */
export const generateDynamicFields = (formFields: IField[], updateItems: IUpdateItem[]): IField[] => {
  updateItems.forEach((updateItem) => {
    formFields = formFields.map((formField) => {
      // Handle card field updates
      if (formField.card) {
        formField.card.fields = generateDynamicFields(formField.card.fields, [updateItem])
        return formField
      }

      // Handle inline field updates
      if (formField?.inline?.length) {
        formField.inline.map((inlineField) => {
          if (inlineField.name === updateItem.name) {
            return updateField(inlineField, updateItem)
          }
        })
        return formField
      }

      // Handle mono field updates
      if (formField.name === updateItem.name) {
        return updateField(formField, updateItem)
      }

      // If the update item name does not match with any of the form fields then return original field
      return formField
    })
  })

  return formFields
}

/**
 * It takes a form field and an object containing the properties to update, and returns the updated
 * form field
 *
 * Updates value || disabled || options
 *
 * @param {IField} formField - IField - this is the field that we are updating
 * @param {IUpdateItem} updateItem - IFieldsToUpdate
 * @returns A new object with the updated values.
 */
const updateField = (formField: IField, updateItem: IUpdateItem): IField => {
  if (updateItem.value !== undefined) {
    formField.value = updateItem.value
  }
  if (updateItem.disabled !== undefined) {
    formField.disabled = updateItem.disabled
  }
  if (updateItem.options !== undefined) {
    formField.options = updateItem.options
  }
  return formField
}
