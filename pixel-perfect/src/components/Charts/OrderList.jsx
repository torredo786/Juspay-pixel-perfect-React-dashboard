import React, { useState } from "react";
import "./OrderList.css";

const allOrders = [
  { id: "#CM9801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: "#CM9802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: "#CM9803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: "#CM9804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: "https://i.pravatar.cc/40?img=4" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: "https://i.pravatar.cc/40?img=5" },
  { id: "#CM9806", user: "James Carter", project: "Finance App", address: "Downtown New York", date: "Feb 5, 2023", status: "Complete", avatar: "https://i.pravatar.cc/40?img=6" },
  { id: "#CM9807", user: "Lora Smith", project: "HR Dashboard", address: "Main St Chicago", date: "Feb 6, 2023", status: "Pending", avatar: "https://i.pravatar.cc/40?img=7" },
  { id: "#CM9808", user: "Michael Lee", project: "E-commerce", address: "Sunset Blvd LA", date: "Feb 7, 2023", status: "Approved", avatar: "https://i.pravatar.cc/40?img=8" },
  { id: "#CM9809", user: "Sophie Turner", project: "Portfolio Site", address: "Baker St London", date: "Feb 8, 2023", status: "In Progress", avatar: "https://i.pravatar.cc/40?img=9" },
  { id: "#CM9810", user: "Daniel Craig", project: "Marketing Page", address: "King Rd Toronto", date: "Feb 9, 2023", status: "Rejected", avatar: "https://i.pravatar.cc/40?img=10" },
];

const statusColors = {
  "In Progress": "status inprogress",
  "Complete": "status complete",
  "Pending": "status pending",
  "Approved": "status approved",
  "Rejected": "status rejected",
};

export default function OrderList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const rowsPerPage = 5;

  // 🔍 Filter orders based on search query
  const filteredOrders = allOrders.filter((o) => {
    const q = searchQuery.toLowerCase();
    return (
      o.id.toLowerCase().includes(q) ||
      o.user.toLowerCase().includes(q) ||
      o.project.toLowerCase().includes(q) ||
      o.address.toLowerCase().includes(q) ||
      o.status.toLowerCase().includes(q)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + rowsPerPage);

  // Reset to page 1 when search changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="order-list">
      <h2>Order List</h2>
      <div className="toolbar">
        <button className="btn">+</button>
        <button className="btn">≡</button>
        <button className="btn">⇅</button>
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchQuery}
          onChange={handleSearch}
        />
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
          {paginatedOrders.length > 0 ? (
            paginatedOrders.map((o, index) => (
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
                <td>
                  <span className={statusColors[o.status]}>
                    <span className="dot"></span>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredOrders.length > rowsPerPage && (
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>{"<"}</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>{">"}</button>
        </div>
      )}
    </div>
  );
}
