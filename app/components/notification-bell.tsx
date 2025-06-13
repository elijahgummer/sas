"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Bell } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"

export function NotificationBell() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Resume Score Updated",
      message: "Your resume score increased by 12 points to 85/100.",
      time: "10 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "New Feature Available",
      message: "Try our new AI-powered resume comparison tool.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Weekly Report",
      message: "Your resume was viewed by 5 recruiters this week.",
      time: "1 day ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-purple-600 hover:text-purple-700 p-0 h-auto"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <p>No notifications</p>
            </div>
          ) : (
            <div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-purple-50" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between">
                    <h4 className={`text-sm font-medium ${!notification.read ? "text-purple-900" : "text-gray-900"}`}>
                      {notification.title}
                    </h4>
                    {!notification.read && <span className="w-2 h-2 bg-purple-500 rounded-full"></span>}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-2 border-t">
          <Button variant="ghost" size="sm" className="w-full text-purple-600 text-xs">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
