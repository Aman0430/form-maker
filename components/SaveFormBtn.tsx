import React from "react";
import { Button } from "./ui/button";
import { HiSave } from "react-icons/hi";

function SaveFormBtn() {
  return (
    <Button className="gap-2" variant={"outline"}>
      <HiSave className="h-6 w-6" />
      Save
    </Button>
  );
}

export default SaveFormBtn;
