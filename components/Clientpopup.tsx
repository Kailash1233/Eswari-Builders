'use client';

import React from "react";
import usePopup from "@/hooks/usePopup";
import Popup from "./Popup";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { isPopupOpen, closePopup } = usePopup();

  return (
    <>
      <main className="flex-1">{children}</main>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Welcome to Our Site!"
      />
    </>
  );
};

export default ClientLayout;