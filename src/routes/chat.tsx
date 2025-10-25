import { createFileRoute } from '@tanstack/react-router';
import Chat from '@/views/Chat/Chat';

export const Route = createFileRoute('/chat')({
  component: Chat,
});
