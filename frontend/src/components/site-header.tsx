"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <>
      <div className="w-full border-b">
        <div className="container mx-auto px-4 py-2 space-x-2">
          <div className="flex flex-row justify-between items-center">
            <Link className="flex flex-row space-x-2 justify-center items-center" href={"/"}>
              <BookOpen />
              <p className="text-2xl font-logo">dawdle</p>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
