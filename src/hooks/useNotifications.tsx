import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export type AppNotification = {
  id: string;
  title?: string | null;
  message: string;
  created_at: string;
  read: boolean;
};

type NotificationsContextType = {
  notifications: AppNotification[];
  unreadCount: number;
  markAllAsRead: () => Promise<void>;
  addNotification: (n: AppNotification) => void;
};

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const useNotifications = () => {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationsProvider");
  return ctx;
};

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  const unreadCount = useMemo(() => notifications.filter(n => !n.read).length, [notifications]);

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
      return;
    }

    let isMounted = true;

    const fetchInitial = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("id, title, message, created_at, read")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(50);
      if (!error && isMounted) {
        setNotifications((data || []) as AppNotification[]);
      }
    };

    fetchInitial();

    const channel = supabase
      .channel(`notifications:${user.id}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications", filter: `user_id=eq.${user.id}` },
        (payload: any) => {
          const row = payload.new as AppNotification & { user_id: string };
          setNotifications(prev => [{ id: row.id, title: row.title, message: row.message, created_at: row.created_at, read: row.read }, ...prev]);
        }
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      isMounted = false;
      if (channel) supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, [user]);

  const markAllAsRead = async () => {
    if (!user) return;
    const ids = notifications.filter(n => !n.read).map(n => n.id);
    if (ids.length === 0) return;
    await supabase.from("notifications").update({ read: true }).in("id", ids).eq("user_id", user.id);
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const addNotification = (n: AppNotification) => {
    setNotifications(prev => [n, ...prev]);
  };

  const value: NotificationsContextType = {
    notifications,
    unreadCount,
    markAllAsRead,
    addNotification,
  };

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
};



