"use client";

import { useState } from "react";
import Link from "next/link";
import { BellIcon, CheckIcon, XIcon, ArrowLeftIcon } from "@/components/icons/GeneralIcons";

interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "error";
  title: string;
  message: string;
  date: string;
  read: boolean;
  category?: "opportunity" | "analysis" | "document" | "system";
  relatedId?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Opportunity Analyzed",
    message: "Analysis of the luxury villa in Dubai Marina is complete",
    date: "2 hours ago",
    read: false,
    category: "analysis",
    relatedId: "OPP-001",
  },
  {
    id: "2",
    type: "info",
    title: "Documents Generated",
    message: "Legal documents for opportunity OPP-001 are ready",
    date: "5 hours ago",
    read: false,
    category: "document",
    relatedId: "OPP-001",
  },
  {
    id: "3",
    type: "warning",
    title: "Action Required",
    message: "KYC verification pending for opportunity OPP-002",
    date: "1 day ago",
    read: true,
    category: "opportunity",
    relatedId: "OPP-002",
  },
  {
    id: "4",
    type: "success",
    title: "Recommendation Available",
    message: "AdvisorBlock has generated a jurisdiction recommendation",
    date: "2 days ago",
    read: true,
    category: "analysis",
    relatedId: "OPP-003",
  },
  {
    id: "5",
    type: "info",
    title: "New Opportunity Submitted",
    message: "A new tokenization opportunity has been submitted for review",
    date: "3 days ago",
    read: true,
    category: "opportunity",
    relatedId: "OPP-004",
  },
  {
    id: "6",
    type: "error",
    title: "Document Upload Failed",
    message: "Failed to upload document for opportunity OPP-005. Please try again.",
    date: "4 days ago",
    read: true,
    category: "document",
    relatedId: "OPP-005",
  },
  {
    id: "7",
    type: "success",
    title: "SPV Structure Created",
    message: "SPV structure for opportunity OPP-001 has been successfully created",
    date: "5 days ago",
    read: true,
    category: "opportunity",
    relatedId: "OPP-001",
  },
  {
    id: "8",
    type: "info",
    title: "System Maintenance",
    message: "Scheduled maintenance will occur on Saturday from 2 AM to 4 AM UTC",
    date: "1 week ago",
    read: true,
    category: "system",
  },
];

const categoryLabels = {
  opportunity: "Opportunity",
  analysis: "Analysis",
  document: "Document",
  system: "System",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread" | Notification["type"] | Notification["category"]>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getTypeColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "warning":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "error":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300";
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "unread") return matchesSearch && !notification.read;
    if (filter === notification.type) return matchesSearch;
    if (filter === notification.category) return matchesSearch;
    
    return false;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
        <div className="mb-6 flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <BellIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Notifications
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {unreadCount > 0
                ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
                : "All caught up!"}
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Search */}
          <div className="relative">
            <BellIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border-2 border-violet-200 bg-white/80 pl-12 pr-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            />
          </div>

          {/* Filter and Actions */}
          <div className="flex items-center space-x-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="flex-1 rounded-xl border-2 border-violet-200 bg-white/80 px-4 py-3 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-800 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread Only</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="error">Error</option>
              <option value="opportunity">Opportunity</option>
              <option value="analysis">Analysis</option>
              <option value="document">Document</option>
              <option value="system">System</option>
            </select>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
              >
                Mark All Read
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-violet-200 bg-white/80 p-12 text-center dark:border-violet-800 dark:bg-slate-800/80">
            <BellIcon className="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600" />
            <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
              No notifications found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {searchQuery || filter !== "all"
                ? "Try adjusting your filters or search query"
                : "You're all caught up! No notifications at the moment."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`group relative rounded-xl border-2 bg-white/80 p-6 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-slate-800/80 ${
                notification.read
                  ? "border-slate-200 dark:border-slate-700"
                  : "border-violet-300 bg-violet-50/50 dark:border-violet-700 dark:bg-violet-900/20"
              }`}
            >
              {!notification.read && (
                <div className="absolute left-2 top-2 h-3 w-3 rounded-full bg-violet-600"></div>
              )}
              <div className="flex items-start space-x-4">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${getTypeColor(
                    notification.type
                  )}`}
                >
                  <BellIcon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {notification.title}
                        </h3>
                        {notification.category && (
                          <span className="rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300">
                            {categoryLabels[notification.category]}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {notification.message}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors"
                          title="Mark as read"
                        >
                          <CheckIcon className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="rounded-lg p-2 text-slate-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <XIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      {notification.date}
                    </p>
                    {notification.relatedId && (
                      <Link
                        href={`/legalblock/advisor?opportunity=${notification.relatedId}`}
                        className="text-xs font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
                      >
                        View Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      {filteredNotifications.length > 0 && (
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {notifications.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {notifications.filter((n) => n.type === "info").length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Info</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {notifications.filter((n) => n.type === "success").length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Success</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {notifications.filter((n) => n.type === "warning").length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Warnings</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
