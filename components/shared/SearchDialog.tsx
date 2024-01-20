import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer flex border-2  px-4 py-1 rounded-lg text-[#71717a] hover:bg-[#eeeeee] hover:text-black transition-all duration-300">
          <span>Search Courses...</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] min-h-2/3  bg-[#d6d6d6]">
        <DialogHeader>
          <Input
            placeholder="Search Courses..."
            className="mt-4 bg-[#d6d6d6]"
          />
          <hr />
        </DialogHeader>
        <span className="text-[#71717a]">No Courses Found</span>
      </DialogContent>
    </Dialog>
  );
}
