import * as React from 'react'

export interface HeaderProps {
    title: string
    subtitle: string
}

function Header(props: HeaderProps) {
    return (
        <div className='Header'>
            <header>{props.title}</header>
            <footer>{props.subtitle}</footer>
        </div>
    )
}

export default Header
