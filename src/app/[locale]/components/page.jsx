import Button from "@/src/components/ui/Button";
import Dropdown from "@/src/components/ui/Dropdown";
import Form from "@/src/components/ui/Form";
import Input from "@/src/components/ui/Input";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <br />
        <br />
        <br />
        Button
        <br />
        <Button>Button</Button>
        <br />
        Dropdown
        <br />
        <Dropdown />
        <br />
        Input
        <br />
        <Input
          className=""
          type="text"
          name="Input"
          defaultValue=""
          placeholder="Input"
          label="Input"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Form/>
      </div>
    </>
  );
}
