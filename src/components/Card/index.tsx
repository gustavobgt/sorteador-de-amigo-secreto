//src/componentes/Card/index.tsx

import React, { ReactNode } from "react";

import "./styles.css";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
