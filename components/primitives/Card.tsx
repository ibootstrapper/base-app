import React from "react";

export default function Card(card: any) {
  return (
    <div key={card.id} className="card hover:shadow-lg">
      <img
        src={card.img}
        alt="stew"
        className="h-32 sm:h-48 w-full object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{card.name}</span>
        <span className="block text-gray-500 text-sm">{card.by}</span>
      </div>
      <div className="badge">
        <svg
          className="inline-block w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>{card.cook_time}</span>
      </div>
    </div>
  );
}
