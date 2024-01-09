import Link from "next/link";

import { Card, CardHeader, CardTitle } from "./ui/card";

interface RoomCardProps {
  name: string;
}

export function RoomCard({ name }: RoomCardProps) {
  return (
    <Link href={`/room/${name}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
