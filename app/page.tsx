"use client"

import { useRef } from "react";
import CustomModal, { RefModal } from "./components/CustomModal";
import { Button } from "@mui/material";

export default function Home() {

  const refModal = useRef<RefModal>(null)

  return (
    <main className="container m-auto p-5">
      <Button
        className="button"
        onClick={()=>{
          refModal.current?.open()
        }}
      >
        Abrir modal
        </Button>
      <CustomModal 
        componentRef={refModal}
      />
    </main>
  );
}
