"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProjectDetails } from "@/components/Project/ProjectDetails";

export function ProjectDialog({ isOpen, onOpenChange, projectData }) {
  if (!projectData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle className="hidden" />
      <DialogContent className="p-0 overflow-hidden">
        <ProjectDetails projectData={projectData} />
      </DialogContent>
    </Dialog>
  );
}
