import React from "react"
import GlobalStyle from "./global-style"
import Header from "./header"
import Main from "./main"

import Aside from "./aside"
import Footer from "./footer"

const Layout = ({children, sideContent}) => (
    <div className={"wrap"}>
        <GlobalStyle/>
        <Header className="header_wrap header_mb"></Header>
        <Main className="main">{children}</Main>
        <Aside className="sidebar_wrap">{sideContent}</Aside>
        <Footer className="footer_wrap footer_mt"></Footer>
    </div>
)

export default Layout