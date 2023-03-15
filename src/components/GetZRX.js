import { useState } from "react";
import Orders from "./Orders";
function GetZRX() {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  async function getZRX() {
    let response = await fetch(
      "https://polygon.api.0x.org/orderbook/v1/orders?makerToken=0x02649C1Ff4296038De4b9bA8F491b42b940A8252"
    );
    let data = await response.json();

    if (response.ok) {
      console.log("DATA:", data);
      setOrders(data.records);
      setTotalOrders(data.total);
    } else {
      console.log("Order error");
    }
  }
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">Total Orders: {totalOrders}</p>
      <Orders orders={orders} />

      <button
        className="text w-40 h-14 bg-stone-500 text-white my-3"
        onClick={getZRX}
      >
        Get Orders
      </button>
    </div>
  );
}

export default GetZRX;
