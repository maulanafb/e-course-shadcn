import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search Courses..." />
      <Button type="submit">
        <SearchIcon className="w-full" />
      </Button>
    </div>
  );
}
