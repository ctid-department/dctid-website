"use client";

import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    replace(`/?${params.toString()}`);
    setIsSearchVisible(false);
  }

  function toggleSearch() {
    console.log(searchTerm);
    if (isSearchVisible && searchTerm) {
      handleSearch();
      setSearchTerm("");
    } else {
      setIsSearchVisible(!isSearchVisible);
    }
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearch();
      setSearchTerm("");
    }
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 items-center">
      {!isSearchVisible ? (
        <button onClick={toggleSearch} className="" aria-label="Open search">
          <MdSearch className="h-6 w-6 hover:brightness-90" />
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <Input
            className="text-black focus:!ring-ctid-green py-0 h-8"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            ref={inputRef}
          />
          <button onClick={toggleSearch} className="" aria-label="Search">
            <MdSearch className="h-6 w-6 hover:brightness-90" />
          </button>
        </div>
      )}
    </div>
  );
}
