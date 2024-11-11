/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from "antd";

export enum Status {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export function useToastNotification() {
  const [api, contextHolder] = notification.useNotification();

  const showToastNotification = (
    type: Status,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
      duration: 3,
      placement: "bottomLeft",
    });
  };

  return {
    showToastNotification,
    contextHolder,
  };
}
