"use client";
import { Modal, ModalProps } from "antd";
import React from "react";

type ModalProp = ModalProps & {
  open: boolean;
  children: React.ReactNode;
  handleCancel: () => void;
};

function Modals({ children, open, handleCancel, ...rest }: ModalProp) {
  return (
    <Modal open={open} onCancel={handleCancel} footer={null} {...rest}>
      {children}
    </Modal>
  );
}

export default Modals;
