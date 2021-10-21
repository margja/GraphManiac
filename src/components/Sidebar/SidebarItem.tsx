import React, { useState } from 'react'
const { v4: uuidv4 } = require('uuid')

interface Props {
    icon: string,
    text: string,
    uri: string,
    menu?: {
        sections: Array<{
            heading: string, 
            items: Array<{ text: string, href: string }>
        }>            
    }
}

const SidebarItem: React.FC<Props> = ({ icon, text, uri, menu }) => {
    const [collapsed, setMenu] = useState(true);
    const toggleMenu = () => setMenu(collapsed => !collapsed);
    const menuid = uuidv4();
    return (
        <>
            <li className="nav-item">
                {
                    menu ?
                    <>
                        <a className={collapsed ? "nav-link collapsed" : "nav-link"} href={uri ? uri : '#' } data-toggle="collapse" data-target={menuid} aria-expanded="false" aria-controls={menuid} onClick={() => toggleMenu()} >
                            { icon ? <i className={icon}></i> : null }
                            { text ? <span>{text}</span> : null }
                        </a>
                        <div id={menuid} className={collapsed ? "collapse" : "collapse show" } aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        {
                            <div className="bg-white py-2 collapse-inner rounded">
                                {
                                    menu.sections.map((section) => (
                                        <h6 key={uuidv4()} className="collapse-header">{section.heading}
                                            {
                                                section.items.map((item) => (
                                                    <a key={uuidv4()} className="collapse-item" href={item.href}>{item.text}</a>
                                                ))
                                            }
                                        </h6>
                                    ))
                                }
                            </div>
                        }  
                        </div>
                    </> : 
                    <>                    
                        <a className="nav-link" href={uri ? uri : '#' } >
                            { icon ? <i className={icon}></i> : null }
                            { text ? <span>{text}</span> : null }
                        </a>
                    </>
                }
                
            </li>   
        </>
    )
}

export default SidebarItem
