"use client"
import Modals from "@/app/_global_components/Modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ExpenseForm from "../../_local_component/ExpenseForm";

function CreateExpense() {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleCancel = useCallback(() => {
    setOpen(false);
    router.push("/Admin/expenses", { scroll: false });
  }, [router]);

  useEffect(() => {
    if (pathName === "/Admin/expenses/create-expense") {
      return setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathName]);
  return (
    <Modals handleCancel={handleCancel} open={open}>
      <div className="w-[500px]">
        <ExpenseForm handleCancel={handleCancel} />
      </div>
      ;
    </Modals>
  );;
}

export default CreateExpense;
