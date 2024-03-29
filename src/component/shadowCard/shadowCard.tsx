import React, { useRef } from "react";
import "./style.css";

export const ShadowCard = () => {
  
    const cardsRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardsElement = cardsRef.current;
    if (cardsElement) {
      const rect = cardsElement.getBoundingClientRect();//Cette ligne récupère les dimensions et la position de cardsElement par rapport à la fenêtre du navigateur.
      const x = e.clientX - rect.left;  //Cette ligne calcule la position horizontale de la souris par rapport à l'élément cardsElement.
      const y = e.clientY - rect.top;
      cardsElement.style.setProperty("--x", `${x}px`);//on aplique les varriable calculer pour l'ombre
      cardsElement.style.setProperty("--y", `${y}px`);
      cardsElement.style.borderRadius = `2em`;
      cardsElement.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = () => {
    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.style.transform = "scale(1)";
      cardsElement.style.borderRadius = "1em"
    }
  };

  return (
        <div className="card" ref={cardsRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></div>
  );
};

