import { useSelector } from "react-redux";
import { PurchaseItem } from "../../components";

function Purchase() {
  const { productsList } = useSelector((state) => state.product);

  return (
    <div>
      <div className="container">
        <ul className="flex flex-col gap-4">
          {productsList.map((item) => (
            <PurchaseItem product={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Purchase;
