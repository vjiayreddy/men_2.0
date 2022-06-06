import FormTextField, { FormTextFieldProps } from "./FormTextField";
import { Meta, Story } from "@storybook/react";
export default {
  title: "components/Form/FormTextField",
  component: FormTextField,
  argTypes: {
    fullWidth: {
      defaultValue: false,
    },
  },
} as Meta;

const defaultArgs = {
  id: "form-input",
  label: "Email",
  fullWidth: false,
  inputHeight: 50,
  placeholder: "Enter input value",
};

const Template: Story<FormTextFieldProps> = ({ ...args }) => {
  return <FormTextField {...args} />;
};

export const TextField = Template.bind({});
TextField.args = defaultArgs;
