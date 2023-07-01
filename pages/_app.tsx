import '../styles/globals.css';
import '@fontsource/public-sans';

import type { AppProps } from 'next/app';
import { builder, Builder, withChildren } from '@builder.io/react';
import { Header } from '../components/Header';
import { Button, 
        Checkbox, 
        Input, 
        Radio, 
        Slider, 
        Switch, 
        Textarea, 
        Select, 
        ButtonGroup, 
        CircularProgress, 
        LinearProgress,
        Alert,
        Link,
        Typography,
        Tooltip,
        Divider,
        Sheet,
        ChipDelete,
        Stack,
        Grid,
        IconButton,
        FormControl,
        FormHelperText,
        FormLabel,
        RadioGroup,
        AspectRatio,
        Avatar,
        AvatarGroup,
        SvgIcon,
        Badge,
        Chip
      } from '@mui/joy';

// Initialize builder with your apiKey
builder.init('29e2b58dd1f648f48966fef7096634b2');

// Register Header component so it's available in the drag-and-drop tool
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
  ],
});

// future links for child blocks
// https://www.builder.io/c/docs/custom-components-children
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/material-table.tsx
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/material-tabs.tsx
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/tooltip.tsx
// https://forum.builder.io/t/custom-builder-react-component-that-needs-redux-data/38/2
// https://mui.com/material-ui/guides/composition/#wrapping-components
// https://forum.builder.io/t/cant-use-flex-grid-with-slots/2892/9
// https://github.com/BuilderIO/builder/blob/dc43381077239c2cdc9c9af8e949796ddf0bf2ac/packages/react/src/blocks/Symbol.tsx#L88-L90
// https://forum.builder.io/t/creating-a-symbol-with-a-react-component-inside/897/2
// https://ideas.builder.io/ideas/PROD-I-61
// Register MUI components so they're available in the drag-and-drop tool
//need to find the right type for these
// eslint-disable-next-line react/display-name
const buildify = (Component: any) => (props: any) => {
  let customProps = {...props};
  delete customProps.builderBlock;
  delete customProps.builderState;
  delete customProps.attributes;

  const sxStyle = {...props.builderBlock.responsiveStyles?.[props?.builderState?.state?.deviceSize ?? 'large']};

  return (<Component 
      sx={sxStyle}
      {...customProps}
      // https://forum.builder.io/t/custom-component-with-nowrap-true-cause-focus-issue/817/5
      ref={
        (el: HTMLElement | null) => {
          props.attributes &&
          Object.entries(props.attributes).forEach(([attributeName, attributeValue]) => {
            if (attributeName.startsWith("builder-")) {
              el?.setAttribute(attributeName, attributeValue as string); // Here i set the "builder-*" attributes on the element
            }
          });
        }
      }
      // {...props.attributes}
   />)
  }

const MuiButton = buildify(Button);
const MuiCheckbox = buildify(Checkbox);
const MuiInput = buildify(Input);
const MuiRadio = buildify(Radio);
const MuiSlider = buildify(Slider);
const MuiSwitch = buildify(Switch);
const MuiTextarea = buildify(Textarea);
const MuiSelect = buildify(Select);
const MuiButtonGroup = buildify(ButtonGroup);
const MuiCircularProgress = buildify(CircularProgress);
const MuiLinearProgress = buildify(LinearProgress);
const MuiAlert = buildify(Alert);
const MuiLink = buildify(Link);
const MuiTypography = buildify(Typography);
const MuiTooltip = buildify(Tooltip);
const MuiDivider = buildify(Divider);
const MuiSheet = buildify(Sheet);
const MuiChipDelete = buildify(ChipDelete);
const MuiStack = buildify(Stack);
const MuiGrid = buildify(Grid);
const MuiIconButton = buildify(IconButton);
const MuiFormControl = buildify(FormControl);
const MuiFormHelperText = buildify(FormHelperText);
const MuiFormLabel = buildify(FormLabel);
const MuiRadioGroup = buildify(RadioGroup);
const MuiAspectRatio = buildify(AspectRatio);
const MuiAvatar = buildify(Avatar);
const MuiAvatarGroup = buildify(AvatarGroup);
const MuiSvgIcon = buildify(SvgIcon);
const MuiBadge = buildify(Badge);
const MuiChip = buildify(Chip);





Builder.registerComponent(withChildren(MuiButton), {
  name: 'Button',
  noWrap: true,
  canHaveChildren: true, 
  childRequirements: {
    message: 'Only Text components are accepted.',
    component: 'Text',
  },
  inputs: [
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'loadingPosition',
      type: 'text',
      enum: ['center', 'start', 'end'],
    },
    {
      name: 'disabled',
      type: 'boolean',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
    },
    {
      name: 'loading',
      type: 'boolean',
    },
    {
      name: 'aria-label',
      type: 'string',
    },
  ],
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'I am child text block!' } }
    },
  ]
});

Builder.registerComponent(MuiCheckbox, {
  name: 'Checkbox',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'overlay',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'className',
      type: 'string',
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info']
    },
    {
      name: 'disabled',
      type: 'boolean'
    },
    {
      name: 'defaultChecked',
      type: 'boolean'
    },
    {
      name: 'disableIcon',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'readOnly',
      type: 'boolean',
    },
    {
      name: 'required',
      type: 'boolean',
    },
    {
      name: 'value',
      type: 'string',
    },
  ],
});

Builder.registerComponent(MuiInput, {
  name: 'Input',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'type',
      type: 'text',
      defaultValue: 'text',
    },
    {
      name: 'className',
      type: 'string',
    },
    {
      name: 'placeholder',
      type: 'string',
    },
    {
      name: 'value',
      type: 'string',
    },
    {
      name: 'error',
      type: 'boolean',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info']
    },
    
  ],
});

Builder.registerComponent(MuiRadio, {
  name: 'Radio',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'checked',
      type: 'boolean',
    },
    {
      name: 'value',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'className',
      type: 'string',
    },
    {
      name: 'defaultChecked',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disableIcon',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'overlay',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
  ],
});

Builder.registerComponent(MuiSlider, {
  name: 'Slider',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'type',
      type: 'slider',
      defaultValue: 'text',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'aria-label',
      type: 'string',
    },
    {
      name: 'aria-valuetext',
      type: 'string',
    },
    {
      name: 'defaultValue',
      type: 'number',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disableSwap',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'isRtl',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'isRtl',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
    },
    {
      name: 'min',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 1,
    },
    {
      name: 'tabIndex',
      type: 'number',
    },
    {
      name: 'value',
      type: 'number',
    },
    {
      name: 'track',
      type: 'text',
      enum: ['inverted', 'normal', 'false'],
    },
    {
      name: 'valueLabelDisplay',
      type: 'text',
      enum: ['auto', 'off', 'on'],
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },

  ],
});

Builder.registerComponent(MuiSwitch, {
  name: 'Switch',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'type',
      type: 'text',
      defaultValue: 'text',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info']
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: 'false'
    },
    {
      name: 'defaultChecked',
      type: 'boolean',
    },
    {
      name: 'disabled',
      type: 'boolean',
    },
    {
      name: 'readOnly',
      type: 'boolean',
    },
    {
      name: 'required',
      type: 'boolean',
    },
    {
      name: 'component',
      type: 'string',
    }
  ],
});

Builder.registerComponent(MuiTextarea, {
  name: 'Textarea',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'placeholder',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: "false",
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: "false",
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: "false",
    },
    {
      name: 'minRows',
      type: 'number',
    },
    {
      name: 'maxRows',
      type: 'number',
    },
  ],
});

Builder.registerComponent(withChildren(MuiSelect), {
  name: 'Select',
  noWrap: true,
  canHaveChildren: false,
  childRequirements: {
    message: 'You can only put Options',
    query: {
      'component.name': { $in: ['Option'] },
    },
  },
  inputs: [
    {
      name: 'type',
      type: 'text'
    },
    {
      name: 'placeholder',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'indicator',
      type: 'string'
    },
    {
      name: 'autoFocus',
      type: 'boolean',
    },
    {
      name: 'defaultListboxOpen',
      type: 'boolean',
    },
    {
      name: 'defaultValue',
      type: 'text',
    },
    {
      name: 'disabled',
      type: 'boolean',
    },
    {
      name: 'listboxId',
      type: 'string',
    },
    {
      name: 'listboxOpen',
      type: 'bool',
    },
    {
      name: 'value',
      type: 'text',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Option', options: { text: 'Option 1' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Option', options: { text: 'Option 2' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Option', options: { text: 'Option 3' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiButtonGroup), {
  name: 'ButtonGroup',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Buttons',
    query: {
      'component.name': { $in: ['Button'] },
    },
  },
  inputs: [
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'aria-label',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['outlined', 'soft', 'solid', 'plain'],
    },
    {
      name: 'indicator',
      type: 'string',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'spacing',
      type: 'text',
    },
    {
      name: 'orientation',
      type: 'text',
    },
    {
      name: 'buttonFlex',
      type: 'string',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Button 1' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Button 2' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Button 3' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiCircularProgress), {
  name: 'CircularProgress',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Icons and Text',
    query: {
      'component.name': { $in: ['Icon'] },
    },
  },

  inputs: [
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'thickness',
      type: 'number',
    },
    {
      name: 'determinate',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'value',
      type: 'number',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Icon' },
    },
  ],
});


Builder.registerComponent(MuiLinearProgress, {
  name: 'LinearProgress',
  noWrap: true,
  canHaveChildren: false,
  inputs: [
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'thickness',
      type: 'number',
    },
    {
      name: 'determinate',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'value',
      type: 'number',
    },
  ],
});

Builder.registerComponent(withChildren(MuiAlert), {
  name: 'Alert',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'role',
      type: 'string',
      defaultValue: 'alert',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'invertedColors',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Text' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiLink), {
  name: 'Link',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Link'] },
    },
  },
  inputs: [
    {
      name: 'underline',
      type: 'text',
      enum: ['always', 'hover', 'none'],
      defaultValue: 'hover',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'textColor',
      type: 'text',
    },
    {
      name: 'overlay',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'level',
      type: 'text',
      enum: ['body1', 'body2', 'body3', 'inherit', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'body1',
    },
    {
      name: 'component',
      type: 'string',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Link' },
    },
  ],
});

Builder.registerComponent(withChildren(MuiTypography), {
  name: 'Typography',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Typography'] },
    },
  },
  inputs: [
    {
      name: 'gutterBottom',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'noWrap',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'textColor',
      type: 'text',
    },
    {
      name: 'level',
      type: 'text',
      defaultValue: 'body1',
      enum: ['body1', 'body2', 'body3', 'inherit', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    {
      name: 'component',
      type: 'string',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Typography' },
    },
  ],
});

Builder.registerComponent(withChildren(MuiTooltip), {
  name: 'Tooltip',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Buttons',
    query: {
      'component.name': { $in: ['Button'] },
    },
  },

  inputs: [
    {
      name: 'arrow',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'id',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
    {
      name: 'describeChild',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'direction',
      type: 'text',
      defaultValue: 'ltr',
      enum: ['ltr', 'rtl'],
    },
    {
      name: 'disableFocusListener',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disableHoverListener',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disableInteractive',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disablePortal',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disableTouchListener',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'followCursor',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'keepMounted',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'open',
      type: 'boolean',
    },
    {
      name: 'enterDelay',
      type: 'number',
    },
    {
      name: 'enterNextDelay',
      type: 'number',
    },
    {
      name: 'enterTouchDelay',
      type: 'number',
    },
    {
      name: 'leaveDelay',
      type: 'number',
    },
    {
      name: 'leaveTouchDelay',
      type: 'number',
    },
    {
      name: 'placement',
      type: 'text',
      defaultValue: 'bottom',
      enum: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'],
    },
    
  ],
    defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Button 1' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiDivider), {
  name: 'Divider',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text and Chip',
    query: {
      'component.name': { $in: ['Text', 'Chip'] },
    },
  },
  inputs: [
    {
      name: 'inset',
      type: 'text',
      enum: ['none', 'context', 'string'],
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Value' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Chip', options: { text: 'Value' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiSheet), {
  name: 'Sheet',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put text',
    query: {
      'component.name': { $in: ['Sheet'] },
    },
  },
  inputs: [
    {
      name: 'invertedColors',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Sheet', options: { text: 'Value' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiChipDelete), {
  name: 'ChipDelete',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Icon',
    query: {
      'component.name': { $in: ['Icon'] },
    },
  },
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Icon', options: { text: 'Icon' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiStack), {
  name: 'Stack',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put any Element',
  },
  inputs: [
    {
      name: 'useFlexGap',
      type: 'boolean',
    },
    {
      name: 'direction',
      type: 'text',
      enum: ['column-reverse', 'column', 'row-reverse', 'row'],
    },
    {
      name: 'spacing',
      type: 'number',
      helperText: 'Space between immediate children',
    },
    {
      name: 'component',
      type: 'string',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Item', options: { text: 'item 1' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiGrid), {
  name: 'Grid',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put any Element',
  },

  inputs: [
    {
      name: 'xs',
      type: 'number',
      helperText: 'viewpoint width',
    },
    {
      name: 'md',
      type: 'number',
      helperText: 'viewpoint width',
    },
    {
      name: 'sm',
      type: 'number',
      helperText: 'viewpoint width',
    },
    {
      name: 'spacing',
      type: 'number',
      helperText: 'Space between children',
    },
    {
      name: 'rowSpacing',
      type: 'number',
      helperText: 'Gap between rows',
    },
    {
      name: 'columnSpacing',
      type: 'number',
      helperText: 'Gap between rows',
    },
    {
      name: 'columns',
      type: 'number',
    },
    {
      name: 'container',
      type: 'boolean',
    },
    {
      name: 'direction',
      type: 'text',
      enum: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Item', options: { text: 'item' } },
    },
  ],
});


Builder.registerComponent(withChildren(MuiIconButton), {
  name: 'IconButton',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Icons with no text content',
    query: {
      'component.name': { $in: ['Icon'] },
    },
  },

  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'focusVisibleClassName',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain'],
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
  ],
 
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Icon'},
    },
  ],
});

Builder.registerComponent(MuiFormControl, {
  name: 'FormControl',
  noWrap: true,
  canHaveChildren: false,
  childRequirements: {
    message: 'You can only put Form Inputs',
  },
  inputs: [
  {
    name: 'component',
    type: 'string,'
  },
  {
    name: 'color',
    type: 'text',
    enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'error',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'orientation',
    type: 'string',
    enum: ['horizontal', 'vertical'],
    defaultValue: 'horizontal',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'size',
    type: 'text',
    enum: ['sm', 'md', 'lg'],
  },
  ],
});


Builder.registerComponent(withChildren(MuiFormHelperText), {
  name: 'FormHelperText',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Text'] },
    },
  },
  inputs: [
    {
      name: 'component',
      type: 'string',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Add text'} },
    },
  ],
});

Builder.registerComponent(withChildren(MuiFormLabel), {
  name: 'FormLabel',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Text'] },
    },
  },
  inputs: [
    {
     name: 'component',
     type: 'string',
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Add text'} },
    },
  ],
});

Builder.registerComponent(withChildren(MuiRadioGroup), {
  name: 'RadioGroup',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Radio',
    query: {
      'component.name': { $in: ['Radio'] },
    },
  },

  inputs: [
    {
      name: 'name',
      type: 'string',
      required: true,
      defaultValue: 'radio-group',
    },
    {
      name: 'color',
      type: 'text',
      enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning']
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'orientation',
      type: 'text',
      enum: ['horizontal', 'vertical'],
    },
    {
      name: 'className',
      type: 'string',
    },
    {
      name: 'defaultValue',
      type: 'string',
    },
    {
      name: 'value',
      type: 'string',
    },
    {
      name: 'disableIcon',
      type: 'boolean',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain', 'outlined']
    },
    {
      name: 'overlay',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      type: 'string',
      defaultValue: 'false',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Radio', options: { text: 'RadioButton1', type: 'outlined' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiAspectRatio), {
 name: 'AspectRatio',
 noWrap: true,
 canHaveChildren: true,
 inputs: [
  {
    name: 'ratio',
    type: 'string',
    defaultValue: '16 / 9',
  },
  {
    name: 'objectFit',
    type: 'text',
    enum: ['contain', 'cover', 'fill', 'inherit', 'initial', 'none', 'revert-layer', 'revert', 'scale-down', 'unset']
  },
  {
    name: 'color',
    type: 'text',
    enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning']
  },
  {
    name: 'minHeight',
    type: 'number',
  },
  {
    name: 'maxHeight',
    type: 'number',
  },
  {
    name: 'variant',
    type: 'text',
    enum: ['outlined', 'plain', 'soft', 'solid']
  },
 ],

 defaultChildren: [
  {
    '@type': '@builder.io/sdk:Element',
    component: { name: 'Text', options: { text: 'Aspect Ratio', type: 'outlined' } },
  },
],
});

Builder.registerComponent(withChildren(MuiAvatar), {
  name: 'Avatar',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Avatar'] },
    },
  },
  inputs: [
   {
    name: 'alt',
    type: 'text',
   },
   {
    name: 'color',
    type: 'text',
    enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning']
   },
   {
    name: 'variant',
    type: 'text',
    enum: ['outlined', 'plain', 'soft', 'solid'],
   },
   {
    name: 'size',
    type: 'text',
    enum: ['sm', 'md', 'lg']
   },
   {
    name: 'src',
    type: 'string',
   },
   {
    name: 'srcSet',
    type: 'string',
   },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Avatar' },
    },
  ],
})


Builder.registerComponent(withChildren(MuiAvatarGroup), {
  name: 'AvatarGroup',
  noWrap: true,
  canHaveChildren: true,
  childRequirements: {
    message: 'You can only put Avatars',
    query: {
      'component.name': { $in: ['Avatar'] },
    },
  },
  inputs: [
    {
      name: 'alt',
      type: 'text',
     },
     {
      name: 'color',
      type: 'text',
      enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning']
     },
     {
      name: 'variant',
      type: 'text',
      enum: ['outlined', 'plain', 'soft', 'solid'],
     },
     {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
     },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Avatar' },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Avatar' },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Avatar' },
    },
  ],
})

Builder.registerComponent(withChildren(MuiSvgIcon), {
  name: 'SvgIcon',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info', 'inherit'],
    },
    {
      name: 'fontSize',
      type: 'text',
      enum: ['lg','md', 'sm', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6', 'xl7', 'xs', 'xs2', 'xs3']
    },
    {
      name: 'htmlColor',
      type: 'string',
    },
    {
      name: 'inheritViewBox',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'shapeRendering',
      type: 'string',
    },
    {
      name: 'titleAccess',
      type: 'string',
    },
    {
      name: 'viewBox',
      type: 'string',
    },
  ],

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'SvgIcon', type: 'outlined' } },
    },
  ],
})

Builder.registerComponent(withChildren(MuiBadge), {
  name: 'Badge',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'anchorOrigin',
      type: 'text',
    },
    {
      name: 'badgetInsert',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'invisible',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 99,
    },
    {
      name: 'showZero',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    }
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Icon', options: { text: 'Icon 1' } },
    },
  ],
})

Builder.registerComponent(withChildren(MuiChip), {
  name: 'Chip',
  noWrap: true,
  canHaveChildren: true,
  inputs: [
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['solid', 'soft', 'outlined', 'plain']
    },
    {
      name: 'color',
      type: 'text',
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
    },
    {
      name: 'component',
      type: 'string',
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Value' } },
    },
  ],
});



export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
