"use client"
import LED from "@/app/components/LED/LED";
import React from "react";

export default function Dash() {
  return (
      <main className="p-4">
          <div className="p-4 text-center">
              <h1 className="h1">Dashboard</h1>
              <LED label={"LED0"} callback={() => {console.log("Clicked") }}></LED>
          </div>
      </main>
);
}
