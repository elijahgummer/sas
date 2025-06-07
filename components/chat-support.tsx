"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 How can I help you with your resume today?" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    setMessages([...messages, { sender: "user", text: newMessage }])
    setNewMessage("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your message! I'd be happy to help you with your resume. What specific area would you like assistance with?",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <Button
        className={`fixed z-20 bottom-8 right-8 rounded-full h-14 w-14 shadow-lg ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-purple-600 hover:bg-purple-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      <div
        className={`fixed z-10 bottom-8 right-8 w-80 sm:w-96 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-purple-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full relative pulse-dot" />
            <h3 className="font-medium">Resume Expert</h3>
          </div>
          <p className="text-sm text-purple-200 mt-1">We usually respond in a few minutes</p>
        </div>

        <div className="bg-white border-l border-r border-gray-200 h-80 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user" ? "bg-purple-100 text-gray-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === "bot" ? (
                      <Bot className="h-4 w-4 text-purple-500 mr-1" />
                    ) : (
                      <User className="h-4 w-4 text-gray-500 mr-1" />
                    )}
                    <span className="text-xs font-medium">{message.sender === "bot" ? "Resume Expert" : "You"}</span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-b-lg"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border-gray-300"
          />
          <Button type="submit" className="ml-2 bg-purple-600 hover:bg-purple-700" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  )
}

