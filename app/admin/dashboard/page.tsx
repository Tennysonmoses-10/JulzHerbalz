"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Package, ShoppingCart, DollarSign, Clock, CheckCircle2, Truck, AlertCircle, RefreshCw } from "lucide-react";

export const dynamic = 'force-dynamic';

interface OrderItem {
  productName: string;
  variantLabel: string;
  quantity: number;
  unitPrice: number;
  itemTotal: number;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  totalAmount: number;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  createdAt: string;
  items: OrderItem[];
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (e) {
      console.error("Failed to fetch orders", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    setUpdatingId(orderId);
    try {
      const res = await fetch("/api/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: newStatus }),
      });
      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, status: newStatus as any } : o))
        );
      }
    } catch (e) {
      console.error("Failed to update status", e);
    } finally {
      setUpdatingId(null);
    }
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length;
  const deliveredOrders = orders.filter((o) => o.status === "DELIVERED").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-herbal-900 text-white rounded-3xl shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-herbal-800 flex items-center justify-center text-herbal-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold">Julz Herbals Admin Panel</h1>
            <p className="text-xs text-herbal-200">Order Dispatch & Store Performance Dashboard</p>
          </div>
        </div>

        <button
          onClick={fetchOrders}
          className="inline-flex items-center gap-2 bg-herbal-800 hover:bg-herbal-700 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all border border-herbal-700"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh Orders
        </button>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-herbal-100 herbal-card-shadow flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total Sales Revenue</p>
            <p className="font-serif text-2xl font-bold text-gray-900">₹{totalRevenue}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-herbal-100 herbal-card-shadow flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Pending Orders</p>
            <p className="font-serif text-2xl font-bold text-gray-900">{pendingOrders}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-herbal-100 herbal-card-shadow flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-herbal-100 text-herbal-800 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Delivered Orders</p>
            <p className="font-serif text-2xl font-bold text-gray-900">{deliveredOrders}</p>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white border border-herbal-100 rounded-3xl overflow-hidden herbal-card-shadow space-y-4">
        <div className="p-6 border-b border-herbal-100 bg-herbal-50 flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="w-5 h-5 text-herbal-700" /> Customer Orders Management
          </h2>
          <span className="text-xs font-semibold text-herbal-800 bg-white px-3 py-1 rounded-full border border-herbal-200">
            {orders.length} Total Orders
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16 text-gray-500 space-y-2">
            <ShoppingCart className="w-10 h-10 text-gray-300 mx-auto" />
            <p className="text-sm font-medium">No orders recorded yet.</p>
            <p className="text-xs text-gray-400">Customer orders placed on the storefront will appear here instantly.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-100">
                <tr>
                  <th className="p-4">Order ID & Date</th>
                  <th className="p-4">Customer Details</th>
                  <th className="p-4">Items Ordered</th>
                  <th className="p-4">Total Amount</th>
                  <th className="p-4">Order Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-herbal-50/50 transition-colors">
                    
                    <td className="p-4 align-top space-y-1">
                      <span className="font-mono font-bold text-gray-900 block">{order.id}</span>
                      <span className="text-[11px] text-gray-400">
                        {new Date(order.createdAt).toLocaleString()}
                      </span>
                    </td>

                    <td className="p-4 align-top space-y-1">
                      <p className="font-bold text-gray-900">{order.customerName}</p>
                      <p className="text-gray-500">{order.customerEmail}</p>
                      <p className="text-gray-500">{order.customerPhone}</p>
                      <p className="text-[11px] text-gray-400 max-w-xs truncate">{order.shippingAddress}</p>
                    </td>

                    <td className="p-4 align-top space-y-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="text-gray-700">
                          <span className="font-medium">{item.productName}</span> ({item.variantLabel}) ×{" "}
                          <span className="font-bold">{item.quantity}</span>
                        </div>
                      ))}
                    </td>

                    <td className="p-4 align-top">
                      <span className="font-serif font-bold text-sm text-herbal-900">
                        ₹{order.totalAmount}
                      </span>
                    </td>

                    <td className="p-4 align-top">
                      <select
                        value={order.status}
                        disabled={updatingId === order.id}
                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                        className="text-xs font-semibold p-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-herbal-600"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="PROCESSING">PROCESSING</option>
                        <option value="SHIPPED">SHIPPED</option>
                        <option value="DELIVERED">DELIVERED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </select>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
