import { FormLabel } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <FormLabel {...rest}>{children}</FormLabel>
}

const config: ComponentInfo = {
    name: 'FormLabel',
    noWrap: true,
    canHaveChildren: true,
	inputs: [
		{
		  name: 'component',
		  type: 'string',
		},
		{
			name: 'required',
			type: 'boolean',
		},
		{
			name: 'slotProps',
			type: 'object',
			defaultValue: {},
		}
	  ],
	  defaultChildren: [
		{
		  '@type': '@builder.io/sdk:Element',
		  component: { name: 'Text', options: { text: 'Add text'} },
		},
	  ],
}

export default {
    component,
    ...config,
}