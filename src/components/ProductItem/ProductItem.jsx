import { Link } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";
import toast from "react-hot-toast";
import { CardAmountBtn } from "../../components";
import orderedPrice from "../../utilities/orderedPrice"

function ProductItem({ product }) {
  const { title, rate, image, price } = product;
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.product);

  const addCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    toast.success("Mahsulot savatga qo'shildi");
  };

  return (
    <li>
      <Link
        className="relative group border-2 border-gray-100 shadow-lg w-full bg-[#f6f6f6]
       h-full rounded-lg flex flex-col"
        to={`/product/${product.id}`}
      >
        <div className="w-full h-[200px] overflow-hidden">
          <img
            className="h-full w-full group-hover:scale-105 transition duration-300 object-cover object-center rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-1 px-3 py-4">
          {price == 0 ? (
            <p className="text-red-600 font-medium">Bepul</p>
          ) : (
            <p className="font-bold text-primary">{orderedPrice(price)} so'm</p>
          )}

          <h2 className="relative whitespace-nowrap overflow-x-hidden">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </h2>
          <div className="flex items-center gap-2">
            <PiStarFill className="text-star" />
            <span className="text-gray">{rate / 2}</span>
          </div>

          {productsList.find((el) => el.id == product.id) ? (
            <CardAmountBtn product={product} productsList={productsList} />
          ) : (
            <button
              onClick={(e) => addCart(e)}
              type="button"
              className="btn w-full btn-primary flex items-center gap-2 text-center justify-center"
            >
              Qo'shish
              <IoCartSharp className="text-xl" />
            </button>
          )}
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
