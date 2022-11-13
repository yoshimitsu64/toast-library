import Button from "../src/components/button";
import Toaster from "../src/components/toaster";

export default {
  title: "Toasts page",
  component: Toasts,
  argTypes: {
    variant: {
      type: "string",
      description: "Chose toast type",
      defaultValue: "success",
      options: ["success", "error", "warning", "info"],
      control: {
        type: "radio",
      },
    },
    position: {
      type: "string",
      description: "Chose toast position",
      defaultValue: "bottom-left",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      control: {
        type: "radio",
      },
    },
    animation: {
      type: "string",
      description: "Chose toast animation",
      defaultValue: "smooth",
      options: ["smooth", "bounce"],
      control: {
        type: "radio",
      },
    },
    backgroundColor: {
      type: "string",
      description: "Chose toast background color",
      control: {
        type: "color",
      },
    },
    duration: {
      type: "number",
      description: "Chose toast duration",
      defaultValue: "3",
      control: {
        type: "text",
      },
    },
    message: {
      type: "string",
      description: "Write toast message",
      defaultValue: "Toast example",
      control: {
        type: "text",
      },
    },
  },
};

export const Toasts = (args) => (
  <>
    <Toaster {...args} />
    <Button {...args} />
  </>
);