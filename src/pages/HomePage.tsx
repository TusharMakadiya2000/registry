import CommonLink from "../components/comman/Button";

export default function HomePage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white w-1/2 h-1/2 mx-auto flex flex-col items-center justify-around rounded">
                <div className="font-mono text-3xl">
                    It's Time for some Cocktails
                </div>
                <CommonLink to="/products" variant="primary">
                    View Cocktails
                </CommonLink>
            </div>
        </div>
    );
}
