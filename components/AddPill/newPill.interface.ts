import React from "react";
export interface NewPill {
  name: string;
  quantity: string;
  hours: { id: number; date: Date }[];
  days: number;
  startingDate: Date;
}
