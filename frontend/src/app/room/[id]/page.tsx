"use client";

import { useParams } from "next/navigation";

export default function Room() {
  const { id } = useParams();

  return (
    <>
      <div className="container mx-auto">
        <div>{id} Room</div>
      </div>
    </>
  );
}
