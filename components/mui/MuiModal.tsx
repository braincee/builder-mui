import { Modal } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Modal {...props}/>
}

const config: ComponentInfo = {
    name: 'Modal',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'open',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'disableAutoFocus',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableEnforceFocus',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableEscapeKeyDown',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disablePortal',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableRestoreFocus',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'disableScrollLock',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'hideBackdrop',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'keepMounted',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Modal' },
        },
    ],
}

export default {
    component,
    ...config,
}
