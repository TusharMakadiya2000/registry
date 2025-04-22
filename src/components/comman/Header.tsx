import { Link } from "react-router-dom";
import CommonLink from "./Button";
export default function Header() {
    return (
        <div className="flex justify-around items-center bg-white py-3">
            <Link to="/" className="text-2xl text-blue-400 font-bold">
                COCKTAILS
            </Link>
            <div className="flex gap-3 font-semibold">
                <CommonLink to="/" variant="white">
                    Home
                </CommonLink>
                <CommonLink to="/about" variant="white">
                    About
                </CommonLink>
                <CommonLink to="/products" variant="white">
                    Products
                </CommonLink>
            </div>
        </div>
    );
}
