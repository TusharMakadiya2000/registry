import { Outlet } from "react-router-dom";
import Header from "../components/comman/Header";
export default function Root() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <div className="flex-1 overflow-y-auto px-4 py-6">
                <Outlet />
            </div>
        </div>
    );
}
