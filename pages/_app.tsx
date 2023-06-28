import '../styles/globals.css';
import '@fontsource/public-sans';

import type { AppProps } from 'next/app';
import { builder, Builder, withChildren } from '@builder.io/react';
import { Header } from '../components/Header';
import { Button } from "@mui/joy";
import { TextField } from "@mui/joy";

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

Builder.registerComponent(withChildren(TextField), {
  name: 'MuiTextField',
  inputs: [
    {
      name: 'label',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'text',
      enum: ['standard', 'outlined', 'filled'],
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'MuiTypography', options: { variant: 'body1', content: 'Default Text' } },
    },
  ],
});


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
