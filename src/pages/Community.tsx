import { useState, useEffect, useRef } from "react";
import { Send, Users, MessageSquare, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

interface Discussion {
  id: string;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  category: string;
}

const DEMO_DISCUSSIONS: Discussion[] = [
  {
    id: "1",
    title: "Exploring Wittgenstein's Language Games in Modern AI",
    author: "PhilosophyEnthusiast",
    replies: 12,
    lastActivity: "2 hours ago",
    category: "Philosophy & AI"
  },
  {
    id: "2",
    title: "Practical Applications of Aristotelian Ethics",
    author: "EthicsScholar",
    replies: 8,
    lastActivity: "5 hours ago",
    category: "Ethics"
  },
  {
    id: "3",
    title: "Self-Mastery Techniques: Share Your Journey",
    author: "MindfulThinker",
    replies: 24,
    lastActivity: "1 day ago",
    category: "Self-Mastery"
  }
];

export default function Community() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem("lifeexe_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    // Load username
    const savedUsername = localStorage.getItem("lifeexe_username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsUsernameSet(true);
    }
  }, []);

  useEffect(() => {
    // Save messages to localStorage
    if (messages.length > 0) {
      localStorage.setItem("lifeexe_messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    // Auto-scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSetUsername = () => {
    if (username.trim()) {
      localStorage.setItem("lifeexe_username", username);
      setIsUsernameSet(true);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && isUsernameSet) {
      const message: Message = {
        id: Date.now().toString(),
        user: username,
        text: newMessage,
        timestamp: Date.now()
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isUsernameSet) {
        handleSetUsername();
      } else {
        handleSendMessage();
      }
    }
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl font-serif font-bold mb-4">Community</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow thinkers, share insights, and collaborate on exploring philosophy, 
              AI, and self-mastery together.
            </p>
            <Badge variant="secondary" className="mt-4">
              Demo Mode - Data stored locally in your browser
            </Badge>
          </div>

          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Live Chat
              </TabsTrigger>
              <TabsTrigger value="discussions" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="members" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Members
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Community Chat</CardTitle>
                  <CardDescription>
                    Share thoughts, ask questions, and connect in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isUsernameSet ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <User className="w-12 h-12 text-muted-foreground" />
                      <h3 className="text-lg font-semibold">Set Your Display Name</h3>
                      <div className="flex gap-2 w-full max-w-sm">
                        <Input
                          placeholder="Enter your name..."
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          onKeyPress={handleKeyPress}
                        />
                        <Button onClick={handleSetUsername}>Join Chat</Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ScrollArea className="h-[400px] mb-4 border rounded-lg p-4">
                        {messages.length === 0 ? (
                          <div className="text-center text-muted-foreground py-12">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>No messages yet. Start the conversation!</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {messages.map((msg) => (
                              <div key={msg.id} className="flex gap-3 animate-fade-in">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback className="text-xs">
                                    {msg.user.slice(0, 2).toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-semibold text-sm">{msg.user}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {formatTime(msg.timestamp)}
                                    </span>
                                  </div>
                                  <p className="text-sm">{msg.text}</p>
                                </div>
                              </div>
                            ))}
                            <div ref={messagesEndRef} />
                          </div>
                        )}
                      </ScrollArea>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                        />
                        <Button onClick={handleSendMessage} size="icon">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Chatting as <strong>{username}</strong>
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Boards</CardTitle>
                  <CardDescription>
                    Dive deep into topics with the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {DEMO_DISCUSSIONS.map((discussion) => (
                      <div
                        key={discussion.id}
                        className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{discussion.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {discussion.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {discussion.replies} replies
                              </span>
                              <span>Last activity: {discussion.lastActivity}</span>
                            </div>
                          </div>
                          <Badge variant="outline">{discussion.category}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">View All Discussions</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="members" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Community Members</CardTitle>
                  <CardDescription>
                    Connect with fellow philosophy and AI enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["PhilosophyEnthusiast", "EthicsScholar", "MindfulThinker", "AIResearcher", "WisdomSeeker", "LogicMaster"].map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Avatar>
                          <AvatarFallback>{member.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold">{member}</p>
                          <p className="text-sm text-muted-foreground">Active contributor</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {Math.floor(Math.random() * 50) + 10} posts
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
