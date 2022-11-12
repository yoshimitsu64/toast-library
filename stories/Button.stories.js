import PropTypes from "prop-types";

import Button from "../src/components/button";
import Toaster from "../src/components/toaster";

export default {
  title: "Button",
  component: Toaster,
  argTypes: { handleClick: { action: 'clicked' } },
};

export const BaseStory = () => (
  <>
    <Toaster position="bottom-left"/>
    <Button />
  </>
)

// const Template = (args) => <Button {...args} />;

// export const BlackButton = Template.bind({});
// BlackButton.args = {
//   backgroundColor: "black",
// };


// export const Error = Template.bind({});
// Error.args = {
//   label: "Error",
//   backgroundColor: "red",
//   variant: "error",
// };

// export const Info = Template.bind({});
// Info.args = {
//   label: "Info",
//   backgroundColor: "yellow",
//   variant: "info",
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   label: "Error",
//   backgroundColor: "red",
//   variant: "warning",
// };

// Notification.propTypes = {
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   variant: PropTypes.oneOf(["success","error","warning","info"])
// };
