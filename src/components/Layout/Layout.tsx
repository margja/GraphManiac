// Component imports
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"

interface Props { 
    sidebar: {
        id: string
    },
    header: {
        id: string
    }
}

const Layout: React.FC<Props> = ({ sidebar, header }) => {
    return (
        <>
            <div id="wrapper">
                <Sidebar id={sidebar.id} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header id={header.id} sidebarId={sidebar.id} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
