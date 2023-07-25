### `npm run storybook`

### Create a story

1. Create a new file inside `/storybook` with extension `.stories.tsx`
2. Create or import component
3. Add and default export arguments
4. Export the component

##### Example

```
import { Button as AppButton } from "@app/components";

export default {
  component: AppButton,
  title: "components/Button",
};

export const Button = (args: any) => <AppButton {...args}>Button</AppButton>;
```

- title: creates directory structure in storybook
- component: the base component

### Adding controls

Add `args` in `export default`. This will result in adding base controls like switch and text input

```
export default {
  args: {
    block: false,
    disabled: false,
    loading: false,
    size: "middle",
    type: "primary",
  },
  component: AppButton,
  title: "components/Button",
};
```

### [Adding advance controls](https://storybook.js.org/docs/react/essentials/controls)
