"use client";

import { RoomCard } from "@/components/room-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-8 space-y-8">
        <h1 className="text-4xl font-bold">Home</h1>
        <Card>
          <CardHeader>
            <CardTitle>Rooms</CardTitle>
            <CardDescription>Join a rooms and start dawdling here!</CardDescription>
            <CardContent className="flex flex-row space-x-2 py-8">
              <RoomCard name="Pre-University" />
              <RoomCard name="University" />
              <RoomCard name="Professional" />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
