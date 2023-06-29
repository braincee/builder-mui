import '../styles/globals.css';
import '@fontsource/public-sans';

import type { AppProps } from 'next/app';
import { builder, Builder, withChildren } from '@builder.io/react';
import { Header } from '../components/Header';
import { Button, Checkbox, Input, Radio, Slider, Switch, Textarea, Select, Autocomplete } from '@mui/joy';

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

//! Register MUI components so they're available in the drag-and-drop tool

Builder.registerComponent(withChildren(Button), {
  //! keep the same MuiELEMENT name convention for all MUI components
  name: 'MuiButton',
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
      enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info']
    },
    {
      name: 'loadingPosition',
      type: 'text',
      enum: ['center', 'start', 'end']
    },
    {
      name: 'loadingIndicator',
      type: 'text'
    },
    {
      name: 'disabled',
      type: 'boolean'
    },
    {
      name: 'content',
      type: 'uiBlocks',
      defaultValue: [],
    },
    {
      name: 'loading',
      type: 'boolean'
    },
    {
      name: 'aria-label',
      type: 'string'
    }
  ],
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'I am child text block!' } }
    },
  ]
});

Builder.registerComponent(withChildren(Checkbox), {
  name: 'Checkbox',
  inputs: [
    {
      name: 'label',
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
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Label' } },
    },
  ],
});

Builder.registerComponent(withChildren(Input), {
  name: 'Input',
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
      name: 'value',
      type: 'string',
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
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Label' } },
    },
  ],
});

Builder.registerComponent(withChildren(Radio), {
  name: 'Radio',
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
      name: 'value',
      type: 'string',
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
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Label' } },
    },
  ],
});

Builder.registerComponent(withChildren(Slider), {
  name: 'Slider',
  inputs: [
    {
      name: 'type',
      type: 'slider',
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

  ],
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Value' } }
    },
  ]
});

Builder.registerComponent(withChildren(Switch), {
  name: 'Switch',
  inputs: [
    {
      name: 'type',
      type: 'switch',
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

  ],
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Value' } }
    },
  ]
});

Builder.registerComponent(Textarea, {
  name: 'Textarea',
  inputs: [
    {
      name: 'type',
      type: 'longText',
      defaultValue: 'Type anything…',
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
      name: 'required',
      type: 'boolean',
      defaultValue: "false"
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: "false"
    },
    {
      name: 'error',
      type: 'boolean',
      defaultValue: "false"
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
  defaultChildren: [
    { 
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Value' } }
    },
  ]
});

Builder.registerComponent(withChildren(Select), {
  name: 'Select',
  inputs: [
    {
      name: 'type',
      type: 'text'
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Choose one…',
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
    
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Default Label' } },
    },
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
