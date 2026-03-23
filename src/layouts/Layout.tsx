import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ConsentModal from "@/components/ConsentModal";
import { ReactNode } from "react";

const Layout = ({children}: {children: ReactNode}) => {

    return(
        <div className="min-h-screen flex flex-col">
            <ConsentModal />
            <Header/>
            <div className="flex-grow">{children}</div>
            <Footer/>
        </div>
        
    )
}

export default Layout
