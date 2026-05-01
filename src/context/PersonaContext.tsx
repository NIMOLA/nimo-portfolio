"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PersonaContextType {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  return (
    <PersonaContext.Provider value={{ index, setIndex }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
