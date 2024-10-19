const orders = [
  {
    order: 1,
    date: "Aug 22, 2018",
    status: "Pending",
    total: "$3000",
    action: "View",
  },
  {
    order: 2,
    date: "July 22, 2018",
    status: "Approved",
    total: "$200",
    action: "View",
  },
  {
    order: 3,
    date: "June 12, 2017",
    status: "On Hold",
    total: "$990",
    action: "View",
  },
];
const Orders = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: "1px dashed #ccc" }}>
        Orders
      </h3>
      <table className="w-full border-collapse mt-6 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Order
            </th>
            <th className="px-4 py-2 font-bold border border-gray-300">Date</th>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Status
            </th>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Total
            </th>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order} className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {order.order}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {order.date}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {order.status}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {order.total}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                <a href="#">{order.action}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
