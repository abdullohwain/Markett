import { useEffect } from "react";
import { request } from "../../utilities/request";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const getData = async function () {
    try {
      const response = await request.get("products/" + id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container">
        videoda 1:3:00 dan davom etamiz😉🤜🏻🤛🏻
      </div>
    </div>
  );
}

export default Product;
