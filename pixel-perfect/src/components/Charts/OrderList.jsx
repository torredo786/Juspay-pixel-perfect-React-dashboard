import React from "react";
import "./OrderList.css";

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const statusColors = {
  "In Progress": "status inprogress",
  "Complete": "status complete",
  "Pending": "status pending",
  "Approved": "status approved",
  "Rejected": "status rejected",
};

export default function OrderList() {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <div className="toolbar">
        <button className="btn">+</button>
        <button className="btn">≡</button>
        <button className="btn">⇅</button>
        <input type="text" placeholder="Search" className="search" />
      </div>

      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{o.id}</td>
              <td>
                <div className="user">
                  <img src={o.avatar} alt={o.user} />
                  <span>{o.user}</span>
                </div>
              </td>
              <td>{o.project}</td>
              <td>{o.address}</td>
              <td>{o.date}</td>
              <td><span className={statusColors[o.status]}>{o.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>{">"}</button>
      </div>
    </div>
  );
}
