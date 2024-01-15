"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { useJoinRoom } from "@/features/rooms/api/join-room";

export default function Room() {
  const { id } = useParams();
  const joinRoom = useJoinRoom();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await joinRoom.mutateAsync(id);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div>{id} Room</div>
      </div>
    </>
  );
}
