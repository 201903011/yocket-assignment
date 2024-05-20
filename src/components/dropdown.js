// src/App.js
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export default function Dropdown({ label, options }) {
  return (
    <div className="w-72">
      <Select label="Select City">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}
