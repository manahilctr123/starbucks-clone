"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function MenuPage() {
  const categories = useQuery(api.categories.get);
  return (
    <>
      <main>
        {categories?.map((category) => (
          <div key={category._id}>
            <h2>{category.name}</h2>
            {category.children.map((child) => (
              <div key={child._id}>{child.name}</div>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}
