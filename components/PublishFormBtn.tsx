import React from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormBtn() {
  return (
    <Button
      className="gap-2 text-white bg-gradient-to-r from-red-400 to-orange-400"
      variant={"outline"}
    >
      <MdOutlinePublish className="h-6 w-6" />
      Publish
    </Button>
  );
}

export default PublishFormBtn;
