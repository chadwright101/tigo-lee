"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import useScrollPosition from "@/app/_utils/scroll-position";

const HeaderWrapper = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <Header isScrolled={isScrolled} />
    </>
  );
};

export default HeaderWrapper;
