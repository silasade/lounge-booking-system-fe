"use client";
import { message } from "antd";
import { useEffect, useRef } from "react";

export const useMessageHandler = () => {
  const [messageApi, contextHolder] = message.useMessage();

  // Queue for messages before the component mounts
  const messageQueue = useRef<Array<{ type: 'success' | 'error'; content: string }>>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    // Process queued messages
    messageQueue.current.forEach((msg) => {
      messageApi.open(msg);
    });
    messageQueue.current = [];
    return () => {
      isMounted.current = false;
    };
  }, [messageApi]);

  const showMessage = (type: 'success' | 'error', msg: string) => {
    if (isMounted.current) {
      messageApi.open({ type, content: msg });
    } else {
      messageQueue.current.push({ type, content: msg });
    }
  };

  const successMessage = (msg: string) => showMessage('success', msg);
  const errorMessage = (msg: string) => showMessage('error', msg);

  return { successMessage, errorMessage, contextHolder };
};