import React from "react";

interface Props {
    icon: string,
    brandText: string
}

const SidebarBrand: React.FC<Props> = ({ icon, brandText }) => {
    return (
        <>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="localhost:3000">
                <div className="sidebar-brand-icon">
                    <i className={icon}></i>
                </div>
                <div className="sidebar-brand-text mx-3">{brandText}</div>
            </a>
            <hr className="sidebar-divider my-0" />
        </>
    )
}

export default SidebarBrand
