import type { IRoute } from "@/typings";
import chatIcon from "@/assets/icons/chat.png";
import heartIcon from "@/assets/icons/heart.png";
import { Home } from "@/views/Home/Home";
import { Chat } from "@/views/Chat/Chat";
import { App } from "@/components/App/App";

export const routes: IRoute[] = [
  { name: 'Home', path: '/', icon: heartIcon, component: App },
  { name: 'Chat', path: '/chat', icon: chatIcon, component: Chat },
];
