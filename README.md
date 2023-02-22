# AlertButton Vue Component

A simple vue component library for Alert and Button.

### [Demo](https://alertbutton.bagusgandhi.dev/)

This was made for a coding test in Mind Lens

## Alert

It is suggested to put the alert component on the top of html tree

```vue
<script lang="ts">
import { ref } from 'vue';
let visible = ref(true);
const AlertClicked = (s: string) => {
  s == 'primary'
    ? console.log('button clicked in alert primary')
    : console.log('button clicked in alert secondary');
};
</script>

<template>
  <Alert
    :show="visible"
    @onClose="visible = false"
    @onClickSecondary="AlertClicked('secondary')"
    @onClickPrimary="AlertClicked('primary')"
    buttonTextPrimary="Click One"
    buttonTextSecondary="Click Two"
  >
    <template #title>A short descriptive header </template>
    <template #description>
      This is a paragraph of information with additional supporting detail or
      links to help the user understand what they should do.
    </template>
  </Alert>
</template>
```

### Parameters

```typescript
interface Props {
  show: boolean;
  type?: 'info' | 'error' | 'warning' | 'success';
  pos?: 'top' | 'top-right' | 'top-left';
  buttonTextPrimary?: string;
  buttonTextSecondary?: string;
  title?: string;
  description?: string;
}
```

### Events

- `@onClose`: Triggered when clicking the close icon
- `@onClickSecondary`: Triggered when clicking the secondary button (The left one)
- `@onClickPrimary`: Triggered when clicking the primary button (The right one)

## Button

```vue
<script lang="ts">
import { ref } from 'vue';
let visible = ref(false);
</script>

<template>
  <SpecialButton
    type="secondary"
    variant="icon-text"
    direction="left"
    @onClick="visible = true"
  >
    Show
  </SpecialButton>
</template>
```

### Parameters

```typescript
interface Props {
  variant?: 'icon-text' | 'text-icon' | 'text' | 'icon';
  direction?: 'left' | 'right';
  type?: 'primary' | 'secondary';
  color?: string;
  disabled?: boolean;
}
```

### Events

- `@onClick`: Triggered when the button is clicked
