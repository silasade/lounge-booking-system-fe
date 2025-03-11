"use client";
import Modals from "@/app/_global_components/Modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ApartmentForm from "../../_local-components/ApartmentForm";

function CreateApartment() {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  const handleCancel = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      router.push("/admin/apartments", { scroll: false });
    }, 100); // Small delay to ensure state is updated first
  }, [router]);
  useEffect(() => {
    if (pathName === "/admin/apartments/create-apartment") {
      return setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathName]);
  return (
    <Modals handleCancel={handleCancel} open={open}>
      <div className="w-[500px]">
        <ApartmentForm handleCancel={handleCancel} />
      </div>
      ;
    </Modals>
  );
}

export default CreateApartment;
