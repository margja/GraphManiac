import React from 'react'
import SidebarItem from './SidebarItem'
const { v4: uuidv4 } = require('uuid')

interface Props {
    title: string,
    items: Array<{
        icon: string, 
        text: string, 
        url: string, 
        menu?: {
            sections: Array<{
                heading: string, 
                items: Array<{ text: string, href: string }> 
            }>            
        } 
    }>
}

const SidebarSection: React.FC<Props> = ({ title, items }) => {
    const sidebarItems = items.map((item) => (
        item.menu ? 
        <SidebarItem key={uuidv4()} icon={item.icon} text={item.text} uri={item.url} menu={item.menu} /> :
        <SidebarItem key={uuidv4()} icon={item.icon} text={item.text} uri={item.url} />
    ))
    return (
        <>
            {title ? <div className="sidebar-heading" style={{marginTop: 16}}>{title}</div> : null }
            { sidebarItems }
            <hr className="sidebar-divider my-0" />
        </>
    )
}

export default SidebarSection
