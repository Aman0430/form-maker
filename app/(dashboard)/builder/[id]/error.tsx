"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-3">
      <h2 className="text-4xl text-destructive">Something went wrong!</h2>
      <Button>
        <Link href={"/"}>back to home</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
