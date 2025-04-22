import Db from "../../db.json";
import CommonLink from "../components/comman/Button";
export default function DetaillsPage() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <div>
                    <CommonLink to="/" variant="primary">
                        Go Back
                    </CommonLink>
                </div>
                <div className="text-6xl text-blue-400">CockTails</div>
                <div></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {Db.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded-md flex flex-col gap-3"
                    >
                        <img
                            src={product.Image}
                            alt=""
                            className="h-[300px] rounded"
                        />
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold">
                                    {product.Name}
                                </span>
                                <span className="truncate">{product.Info}</span>
                            </div>
                            <div className="flex items-end">
                                <CommonLink
                                    to={`/product/${product.id}`}
                                    variant="primary"
                                >
                                    View Details
                                </CommonLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
