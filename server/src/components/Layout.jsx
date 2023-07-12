import { Outlet } from "react-router-dom";
import Head from "./Head";
export default function Layout() {
    return (
        <main>
            <Head />
            <Outlet />
        </main>
    )
}