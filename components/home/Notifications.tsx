"use client";

import { useState } from "react";
import Link from "next/link";
import { BellIcon, CheckIcon, XIcon } from "@/components/icons/GeneralIcons";

interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "error";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Opportunity Analyzed",
    message: "Analysis of the luxury villa in Dubai Marina is complete",
    date: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "info",
    title: "Documents Generated",
    message: "Legal documents for opportunity OPP-001 are ready",
    date: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "warning",
    title: "Action Required",
    message: "KYC verification pending for opportunity OPP-002",
    date: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "success",
    title: "Recommendation Available",
    message: "AdvisorBlock has generated a jurisdiction recommendation",
    date: "2 days ago",
    read: true,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const displayedNotifications = isExpanded ? notifications : notifications.slice(0, 3);

  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 shadow-lg dark:from-violet-900/20 dark:to-purple-900/20">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
            <BellIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Notifications
            </h2>
            {unreadCount > 0 && (
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {unreadCount} unread notification{unreadCount > 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Mark All as Read
            </button>
          )}
          <Link
            href="/notifications"
            className="rounded-lg border-2 border-violet-300 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-slate-800/80 dark:text-violet-400 dark:hover:bg-violet-900/20"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {displayedNotifications.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white/80 p-8 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <BellIcon className="mx-auto mb-4 h-12 w-12 text-slate-400 dark:text-slate-600" />
            <p className="text-slate-600 dark:text-slate-400">
              No notifications
            </p>
          </div>
        ) : (
          <>
            {displayedNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`group relative rounded-xl border-2 bg-white/80 p-4 backdrop-blur-sm transition-all hover:shadow-md dark:bg-slate-800/80 ${
                  notification.read
                    ? "border-slate-200 dark:border-slate-700"
                    : "border-violet-300 bg-violet-50/50 dark:border-violet-700 dark:bg-violet-900/20"
                }`}
              >
                {!notification.read && (
                  <div className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-violet-600"></div>
                )}
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${getTypeColor(
                      notification.type
                    )}`}
                  >
                    <BellIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {notification.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                            title="Mark as read"
                          >
                            <CheckIcon className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="rounded-lg p-1 text-slate-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                          title="Delete"
                        >
                          <XIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <p className="mb-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      {notification.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {notifications.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full rounded-lg border-2 border-violet-300 bg-white/80 px-4 py-3 text-sm font-semibold text-violet-600 transition-all hover:bg-violet-50 dark:border-violet-700 dark:bg-slate-800/80 dark:text-violet-400 dark:hover:bg-violet-900/20"
              >
                {isExpanded ? "Show less" : `View ${notifications.length - 3} more notification${notifications.length - 3 > 1 ? "s" : ""}`}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

