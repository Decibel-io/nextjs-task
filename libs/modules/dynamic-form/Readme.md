# Dynamic forms (antd)

Dynamic forms are generated through JavaScript from a JSON scheme.

## Usage

```
const  SIGN_IN_FORM:  IField[]  =  [
{
	label:  'Email',
	name:  'email',
	placeholder:  'Enter Email',
	rules:  [{required:  true}],
	type:  EDynamicFormField.EMAIL,
},
{
	label:  'Password',
	name:  'password',
	placeholder:  'Enter Password',
	rules:  [{required:  true}],
	type:  EDynamicFormField.PASSWORD,
},
{
	name:  'button',
	placeholder:  'Log In',
	rules:  [{required:  true}],
	title:  'Log In',
	type:  EDynamicFormField.PRIMARY_BUTTON,
	},
]

const  handleFormSubmit  =  async (type?:  string) => {
	const  data  =  await  form.validateFields()
	// Write code here
}

<DynamicForm  fields={SIGN_IN_FORM}  form={form}  onSubmit={handleFormSubmit}  />
```

## Dynamic form fields

If state is true then field `fieldname` value becomes 1 and if state is false then value becomes 2
We can also disable fields and change select options

```
<DynamicForm
    fields={generateDynamicFields(REGISTER_ACCOUNT_FORM, [
        { name: 'fieldname', value: state ? 1 : 2 }
    ])}
    form={form}
    onSubmit={handleFormSubmit}
/>
```
