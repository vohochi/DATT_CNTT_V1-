const Dashboard = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: "1px dashed #ccc" }}>
        Dashboard
      </h3>
      <p className="mt-6 text-gray-600">
        Hello, <span className="text-red-600">Alex Tuntuni</span>! If not{" "}
        <span className="text-red-600">Tuntuni</span>,{" "}
        <a href="#" className="text-blue-500">
          Logout
        </a>
      </p>
      <p className="mt-2 text-gray-600">
        From your account dashboard, you can easily check & view your recent
        orders, manage your shipping and billing addresses, and edit your
        password and account details.
      </p>
    </div>
  );
};

export default Dashboard;
