import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null)
  const { id } = useParams();
  const getData = async function () {
    try {
      const response = await request.get("products/" + id);

      if(response.status !== 200) {
        throw new Error("Ma'lumot to'g'ri kelmadi!")
      }
      setProduct(response.data.data)
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {product && (
        <div className="flex border-gray gap-4 p-4 rounded-md border">
          <div>
          <img
            className="h-[200px] w-[150px] object-contain rounded-md"
            src={product.image}
            alt={product.title}
            width={150}
            height={200}
          />
        </div>
        <div className="py-7 flex flex-col justify-between">
          <h2 className="font-medium ">{product.description}</h2>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-gray font-semibold ">
                Kelib chiqishi:{" "}
              </span>
              <span>{product.origin}</span>
            </p>
          </div>

        </div>
        <div className="flex flex-col justify-between items-end ml-auto py-7">
            <p className="text-xl text-primary font-medium">
              {product.price} so'm</p>
        </div>
      </div>
      )
      }
    </div>
  );
}

export default Product;
