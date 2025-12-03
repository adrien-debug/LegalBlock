"use client";

import { useState } from "react";
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
    title: "Opportunité analysée",
    message: "L'analyse de la villa de luxe à Dubai Marina est terminée",
    date: "Il y a 2 heures",
    read: false,
  },
  {
    id: "2",
    type: "info",
    title: "Documents générés",
    message: "Les documents juridiques pour l'opportunité OPP-001 sont prêts",
    date: "Il y a 5 heures",
    read: false,
  },
  {
    id: "3",
    type: "warning",
    title: "Action requise",
    message: "Vérification KYC en attente pour l'opportunité OPP-002",
    date: "Il y a 1 jour",
    read: true,
  },
  {
    id: "4",
    type: "success",
    title: "Recommandation disponible",
    message: "AdvisorBlock a généré une recommandation de juridiction",
    date: "Il y a 2 jours",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

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

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

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

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg">
              <BellIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Notifications
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {unreadCount} notification{unreadCount > 1 ? "s" : ""} non lue{unreadCount > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Tout marquer comme lu
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            Toutes ({notifications.length})
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              filter === "unread"
                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            Non lues ({unreadCount})
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <BellIcon className="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600" />
            <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
              Aucune notification
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {filter === "unread"
                ? "Toutes vos notifications ont été lues"
                : "Vous n'avez pas encore de notifications"}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`group relative rounded-xl border-2 bg-white/80 p-5 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-slate-800/80 ${
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
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${getTypeColor(
                    notification.type
                  )}`}
                >
                  <BellIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {notification.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
                          title="Marquer comme lu"
                        >
                          <CheckIcon className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                        title="Supprimer"
                      >
                        <XIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                    {notification.message}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

