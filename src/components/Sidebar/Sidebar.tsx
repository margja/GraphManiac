import React, { useState, useEffect } from 'react'
import SidebarSection from './SidebarSection'
import SidebarBrand from './SidebarBrand'

interface Props {
    id: string
}

const Sidebar: React.FC<Props> = (props: Props) => {
    const localStorageId = "sidebarToggled";

    const [isToggled, setSidebar] = useState(localStorage.getItem(localStorageId) ? (localStorage.getItem(localStorageId) == 'true') : false);

    useEffect(() => {
        localStorage.setItem(localStorageId, isToggled.toString())
    }, [isToggled])

    return (
        <>
            <ul id={props.id} className={isToggled ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" }>
                <>
                <SidebarBrand icon="fas fa-shapes" brandText="Hello" />
                <SidebarSection title="" items={[ 
                    { icon: "fas fa-fw fa-tachometer-alt", text: "Dashboard", url: "#" } 
                ]} />
                <SidebarSection title="Account" items={[ 
                    { icon: "fas fa-fw fa-wrench", text: "Details", url: "#" }, 
                    { icon: "fas fa-address-book", text: "Others", url: "#" } 
                ]} />
                <SidebarSection title="Analyses" items={[ 
                    { icon: "fas fa-chart-line", text: "Graphs", url: "#" },
                    { icon: "fas fa-table", text: "Tables", url: "#", menu: {
                        sections: [
                            { 
                                heading: "Manage tables", 
                                items: [ 
                                    { text: "Edit tables", href: "#" },
                                    { text: "New table", href: "#" }
                                ] 
                            }
                        ]
                    } },
                    { icon: "fas fa-paragraph", text: "Text", url: "#" }
                ]} />
                <hr className="d-none d-md-block" />
                </>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => setSidebar(!isToggled)}></button>
                </div>
            </ul>
        </>
    )
}

export default Sidebar

