"use client"

import { useState } from "react";
import CustomModal from "./components/CustomModal";
import { Button } from "@mui/material";
import { Counter } from "./components/Counter";

export default function Home() {

  const [open,setOpen] = useState(false)

  return (
    <main className="container m-auto p-5">
      <Button
        className="button"
        onClick={()=>{
          setOpen(true)
        }}
      >
        Abrir modal
      </Button>
      <Counter />
      <CustomModal 
        open={open}
        onClose={()=>{
          setOpen(false)
        }}
      />
    </main>
  );
}
