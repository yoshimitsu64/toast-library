import PropTypes from "prop-types";

import Notification from "../src/components/Notification";

export default {
  title: "Notification",
  component: Notification,
  argTypes: {
    variant: {
      types: "string",
      description: "Type of notification",
      defaultValue: "success",
      options: ["success", "error", "info", "warning"],
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  backgroundColor: "green",
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  backgroundColor: "red",
  variant: "error",
};

export const Info = Template.bind({});
Info.args = {
  label: "Info",
  backgroundColor: "yellow",
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Error",
  backgroundColor: "red",
  variant: "warning",
};

Notification.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(["success","error","warning","info"])
};
