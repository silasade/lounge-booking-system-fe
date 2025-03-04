import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState, useEffect, useCallback } from "react";
import useDebounce from "@/app/hooks/useDebounce";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className = "",
  placeholder = "Search",
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce function from custom hook
  const searchValue = useDebounce(searchTerm, 500);

  // Memoized search handler
  const handleSearch = useCallback(
    (value: string) => {
      onSearch(value);
    },
    [onSearch] // Ensures `onSearch` reference consistency
  );

  // Trigger search when `searchValue` updates
  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    }
  }, [searchValue, handleSearch]);

  return (
    <Input
      className={className}
      placeholder={placeholder}
      suffix={<SearchOutlined />}
      allowClear
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchInput;
