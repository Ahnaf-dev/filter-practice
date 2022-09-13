import React, { useContext, createContext, useState, useEffect } from "react";

interface Cuisine {
  id: number;
  checked: boolean;
  label: string;
}
export interface ContextInterface {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  cuisines: Cuisine[];
  setCuisines: React.Dispatch<React.SetStateAction<Cuisine[]>>;
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
  rating: string;
  setRating: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const FilterContext = createContext<ContextInterface | null>(null);

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);
  const [range, setRange] = useState([0, 5000]);

  return (
    <FilterContext.Provider
      value={{
        category: category,
        setCategory: setCategory,
        cuisines: cuisines,
        setCuisines: setCuisines,
        range: range,
        setRange: setRange,
        rating: rating,
        setRating: setRating,
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useGlobalContext = () =>
  useContext(FilterContext) as ContextInterface;
