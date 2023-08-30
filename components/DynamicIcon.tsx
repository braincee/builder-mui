import * as FeatherIcon from 'react-feather'
import * as React from 'react'

const component: React.ElementType = (props: any) => {
    if (!props.name) {
        return <>Icon Name</>
    }

    const Icon = FeatherIcon[props.name as never] as React.ElementType

    if (!Icon) {
        return <>Wrong Name</>
    }

    return <Icon {...props} />
}

const config: any = {
    name: 'Icon',
    canHaveChildren: true,
    inputs: [
        {
            name: 'name',
            type: 'string',
        },
    ],
}

export default { component, ...config }
