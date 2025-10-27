import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/productSlice";
import { CardAmountBtn } from "../../components";

function PurchaseItem({ product }) {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.product);
  const { image, title, productAmount, description, origin } = product;

  const removeIteam = (e)=> {
    e.preventDefault()

    dispatch(removeProduct(product.id))
  };
  return (
    <li>
      <Link className="flex gap-9 border border-gray-200 bg-gray-100 rounded-md pr-8" to="/product">
        <div>
          <img
            className="w-[150px] h-[200px] object-contain rounded-md"
            src={image}
            alt={title}
            width={150}
            height={200}
          />
        </div>
        <div className="py-7 flex flex-col justify-between">
          <h2 className="font-medium ">{description}</h2>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-gray font-semibold ">Kelib chiqishi: </span>
              <span>{origin}</span>
            </p>
           <div className="flex w-full max-w-[150px]">
             <CardAmountBtn product={product} productsList={productsList} />
           </div>
          </div>

        </div>
        <div className="flex flex-col justify-between items-end ml-auto py-7">
            <button onClick={removeIteam} type="button"
            className="btn bg-red-300 transition hover:bg-red-400"
              >O'chirish</button>
            <p className="text-xl text-primary font-medium">{product.price * product.productAmount} so'm</p>
        </div>
      </Link>
    </li>
  );
}

export default PurchaseItem;
