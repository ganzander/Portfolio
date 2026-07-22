"use client";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ProjectDetails } from "@/components/Project/ProjectDetails";
import { XIcon } from "lucide-react";

export function ProjectDialog({ isOpen, onOpenChange, projectData }) {
  if (!projectData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle className="hidden" />
      <DialogContent className="p-0 overflow-hidden">
        <DialogClose className="absolute top-3 right-3 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:bg-[var(--accent)] hover:text-white hover:border-transparent hover-cursor cursor-pointer">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <ProjectDetails projectData={projectData} />
      </DialogContent>
    </Dialog>
  );
}
