import '../styles/globals.css';
import '@fontsource/public-sans';

import type { AppProps } from 'next/app';
import { builder, Builder, withChildren } from '@builder.io/react';
import { Header } from '../components/Header';
import { Button, Checkbox, Input, Radio, Slider, Switch, Textarea, Select, ButtonGroup, CircularProgress, LinearProgress, Alert, Link, Typography, Tooltip, Divider, Sheet, ChipDelete, Stack, Grid } from '@mui/joy';

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

//! STEPHEN
//! Use the buildify function above to wrap each component
//! This will add the sx prop to each component
//! Keep the name convention the same, eg MuiButton, MuiCheckbox, etc
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

Builder.registerComponent(withChildren(MuiButton), {
  name: 'Button',
  //! STEPHEN
  //! Place this on all components, with value = true
  noWrap: true,
  //! STEPHEN
  //! Set this for each component based on your common sense of whether it can have children (e.g. a button can have children, but a switcher can't)
  canHaveChildren: true, 
  //! STEPHEN
  //! https://www.builder.io/c/docs/register-components-options#child-requirements
  //! Set the childRequirements property to an object with a message property to display a message when a user tries to add a child component that isn't supported.
  //! For example, a ButtonGroup can only have Button children.
  childRequirements: {
    message: 'Only Text components are accepted.',
    component: 'Text',
  },
  //! STEPHEN
  //! Set this field for components that can only be placed inside a specific parent, not by themselves
  //! https://www.builder.io/c/docs/register-components-options#requires-parent
  // requiresParent: {},
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
    
    //! STEPHEN
    //! List all the props that have NOT been added to the component
    //! All props of a components are available in its API page
    //! Do not list the `sx` prop. It is added automatically by the buildify function above.
    //! EXAMPLE below
    // Not added:
    // action (func)
    // component (elementType)
    // endDecorator (node)
    // slotProps (object)
    // slots (object)
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
  inputs: [
    {
      name: 'type',
      type: 'text',
      defaultValue: 'text',
    },
    {
      name: 'placeholder',
      type: 'string',
    },
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
    },
    {
      name: 'disabled',
      type: 'boolean',
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
    },
    {
      name: 'required',
      type: 'boolean',
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
  ],
});

Builder.registerComponent(MuiSlider, {
  name: 'Slider',
  noWrap: true,
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
      name: 'marks',
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

  ],
});

Builder.registerComponent(MuiSwitch, {
  name: 'Switch',
  noWrap: true,
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
    //! STEPHEN
    //! For example, the Switch is not working because `checked` is missing.
  ],
});

Builder.registerComponent(MuiTextarea, {
  name: 'Textarea',
  noWrap: true,
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
  canHaveChildren: true, 
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
  childRequirements: {
    message: 'You can only put Options',
    query: {
      'component.name': { $in: ['Option'] },
    },
  },

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Option', options: { text: 'Option 1' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiButtonGroup), {
  name: 'ButtonGroup',
  noWrap: true,
  canHaveChildren: true, 
  inputs: [
    {
      name: 'type',
      type: 'text'
    },
    {
      name: 'aria-label',
      type: 'string'
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['outlined', 'soft', 'solid', 'plain']
    },
    {
      name: 'indicator',
      type: 'string'
    },
    {
      name: 'size',
      type: 'text',
      enum: ['sm', 'md', 'lg']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
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
  childRequirements: {
    message: 'You can only put Buttons',
    query: {
      'component.name': { $in: ['Button'] },
    },
  },

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Button', options: { text: 'Button 1', type: 'outlined' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiCircularProgress), {
  name: 'CircularProgress',
  noWrap: true,
  canHaveChildren: true, 
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
  childRequirements: {
    message: 'You can only put Icons and Text',
    query: {
      'component.name': { $in: ['Icon', 'Text'] },
    },
  },

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Icon', options: { text: 'Icon' } },
    },
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Text' } },
    },
  ],
});

Builder.registerComponent(MuiLinearProgress, {
  name: 'LinearProgress',
  noWrap: true,
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
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Text'] },
    },
  },
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Value' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiTypography), {
  name: 'Typography',
  noWrap: true,
  canHaveChildren: true, 
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
  childRequirements: {
    message: 'You can only put Text',
    query: {
      'component.name': { $in: ['Text'] },
    },
  },

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Text' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiTooltip), {
  name: 'Tooltip',
  noWrap: true,
  canHaveChildren: true, 
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
  childRequirements: {
    message: 'You can only put Buttons',
    query: {
      'component.name': { $in: ['Button'] },
    },
  },

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
  childRequirements: {
    message: 'You can only put Text and Chip',
    query: {
      'component.name': { $in: ['Text', 'Chip'] },
    },
  },
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
  childRequirements: {
    message: 'You can only put text',
    query: {
      'component.name': { $in: ['Text'] },
    },
  },
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Value' } },
    },
  ],
});

Builder.registerComponent(withChildren(MuiChipDelete), {
  name: 'ChipDelete',
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
  ],
  childRequirements: {
    message: 'You can only put Icon',
    query: {
      'component.name': { $in: ['Icon'] },
    },
  },

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
  childRequirements: {
    message: 'You can only put any Element',
  },

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
  childRequirements: {
    message: 'You can only put any Element',
  },

  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Item', options: { text: 'item' } },
    },
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//! TODO
//! 0. Some props are missing from the current components. I'm not referring to `node` type props, I'm referring to props that should have been present. Like `fullWidth` for Button.
//! 1. See my comments above (tagged STEPHEN) and apply them to the components you've already built, where applicable
//! 2. Add IconButton
//! 3. Add FormControl
//! 4. Add FormHelperText
//! 5. Add FormLabel
//! 6. Add RadioGroup
//! 7. Add AspectRatio
//! 8. Add Avatar
//! 9. Add AvatarGroup
//! 10. Add SvgIcon
//! 11. Add Badge
//! 12. Add Chip
//! 13. Add ChipDelete          --done
//! 14. Add Divider             --done
//! 15. Add Tooltip             --done
//! 16. Add Typography          --done
//! 17. Add Alert               --done
//! 18. Add CircularProgress    --done
//! 19. Add LinearProgress      --done
//! 20. Add Sheet               --done
//! 21. Add Link                --done
//! 22. Add Grid                --done
//! 23. Add Stack               --done
//! DEADLINE: Satuday evening