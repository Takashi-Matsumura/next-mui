import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-400">Hello World</h1>
      <Button className="bg-my-blue-dark" variant="contained">
        Button
      </Button>
    </div>
  );
}
