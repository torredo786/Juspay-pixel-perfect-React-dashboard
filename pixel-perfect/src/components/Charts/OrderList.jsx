import React, { useState } from "react";
import "./OrderList.css";
import Avatar6 from "../../assets/Avatar6.svg"
import Avatar7 from "../../assets/Avatar7.svg"
import Avatar8 from "../../assets/Avatar8.svg"
import Avatar9 from "../../assets/Avatar9.svg"
import Avatar10 from "../../assets/Avatar10.svg"
import { useTheme } from '../../App';
import PlusIcon from "../../assets/PlusIcon";
import StackIcon from "../../assets/StackIcon";
import SortIcon from "../../assets/SortIcon";

const allOrders = [
    { id: "#CM9801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9806", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9807", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9808", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9809", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9810", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9811", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9812", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9813", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9814", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9815", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9816", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9817", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9818", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9819", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9820", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9806", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9807", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9808", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9809", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9810", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9811", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9812", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9813", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9814", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9815", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },
    { id: "#CM9816", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", avatar: Avatar6 },
    { id: "#CM9817", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", avatar: Avatar10 },
    { id: "#CM9818", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", avatar: Avatar7 },
    { id: "#CM9819", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", avatar: Avatar8 },
    { id: "#CM9820", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", avatar: Avatar9 },


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
  const [sortOrder, setSortOrder] = useState("none"); // NEW
  const rowsPerPage = 10;
  const { isDarkMode } = useTheme();

  // Search filter
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

  // Sorting
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.user.localeCompare(b.user);
    } else if (sortOrder === "desc") {
      return b.user.localeCompare(a.user);
    }
    return 0; // no sorting
  });

  // Pagination
  const totalPages = Math.ceil(sortedOrders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, startIndex + rowsPerPage);

  // Handlers
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSortByName = () => {
    setSortOrder((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
    setCurrentPage(1);
  };

  return (
    <div className={`order-list`}>
      <span className="list-title">Order List</span>

      <div className="toolbar" style={{ background: isDarkMode ? "#FFFFFF0D" : "#F7F9FB" }}>
        <div>
          <span className="btn"><PlusIcon /></span>
          <span className="btn"><StackIcon /></span>
          <span className="btn" onClick={handleSortByName}>
            <SortIcon /> 
            {sortOrder !== "none" && (
              <span style={{ fontSize: "12px", marginLeft: "4px" }}>
                {sortOrder === "asc" ? "↑" : "↓"}
              </span>
            )}
          </span>
        </div>

        <div className="search-container">
          <input
            type="text"
            className={`search-input ${isDarkMode ? "lightmode-text" : "darkmode-text"}`}
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            style={{ background: isDarkMode ? "#1C1C1C66" : "#FFFFFF66", border: "1px solid var(--black-10, #1C1C1C1A)" }}
          />
          <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
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

      {sortedOrders.length > rowsPerPage && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className={`${isDarkMode ? "lightmode-text" : "darkmode-text"}`}
          >
            {"<"}
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${currentPage === i + 1 ? "active" : ""} ${isDarkMode ? "lightmode-text" : "darkmode-text"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className={`${isDarkMode ? "lightmode-text" : "darkmode-text"}`}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}
