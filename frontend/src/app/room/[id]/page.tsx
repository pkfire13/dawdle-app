"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { api } from "@/lib/api";

export default function Room() {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/");
        console.log(response);
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
