"use client";

import Modals from "@/app/_global_components/Modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Form from "./_local_components/Form";

function CreatePool() {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleCancel = useCallback(() => {
    setOpen(false);
    router.push("/admin/amenities", { scroll: false });
  }, [router]);

  useEffect(() => {
    if (pathName === "/admin/amenities/create-pool") {
      return setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathName]);
  return (
    <Modals handleCancel={handleCancel} open={open}>
      <div className="w-[500px]">
        <Form handleCancel={handleCancel} />
      </div>
      ;
    </Modals>
  );
}

export default CreatePool;
