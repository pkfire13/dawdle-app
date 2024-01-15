import { useMutation } from "react-query";

import { api } from "@/lib/api";

export function joinRoom(roomId: string) {
  return api.post(`/rooms/${roomId}/join`);
}

export function useJoinRoom() {
  return useMutation({
    mutationFn: joinRoom,
  });
}
