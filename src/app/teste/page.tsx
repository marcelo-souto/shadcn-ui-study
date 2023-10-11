"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogCloseButton,
} from "@/components/ui/dialog";

import { useState } from "react";

export default function TestePage() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="pt-32 max-w-6xl mx-auto">
      <Button onClick={() => setOpenModal(true)}>Abrir</Button>

      <Dialog modal={true} open={openModal} onOpenChange={setOpenModal}>

        <DialogContent>

          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button size="sm" className="w-fit" asChild>
              <DialogCloseButton>Fechar</DialogCloseButton>
            </Button>
          </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  );
}
