import { useNavigate, useParams } from "react-router-dom";
import Db from "../../db.json";
import CommonLink from "../components/comman/Button";
export default function ProductDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    if (!id) {
        return null;
    }
    const productId = parseInt(id);
    const product = Db.find((product) => product.id === productId);
    return (
        <div className="w-1/2 mx-auto flex flex-col gap-5 items-start">
            <div className="">
                <CommonLink
                    to=""
                    onClick={() => navigate(-1)}
                    variant="primary"
                >
                    Go Back
                </CommonLink>
            </div>
            <div className="text-5xl text-blue-400">
                {product && product.Name}
            </div>
            <div className="flex gap-5 items-center">
                <img
                    src={product && product.Image}
                    alt=""
                    className="h-[400px] rounded ring-4 ring-amber-200"
                />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold text-xl">
                            Name:
                        </label>
                        <span>{product && product.Name}</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold text-xl">
                            Category:
                        </label>
                        <span>{product && product.Category}</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold text-xl">
                            Info:
                        </label>
                        <span>{product && product.Info}</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold text-xl">
                            Instructions:
                        </label>
                        <span>{product && product.Instructions}</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-bold text-xl">
                            Ingredients:
                        </label>
                        <span>{product && product.Ingredients}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
