/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Input } from "../components/ui";

function PickUp() {
  return (
    <div>
      <Input
        css={{
          margin: "2rem 0"
        }}
        aria-label="Restaurant Adress"
        type="text"
        value="Jorge Chavez 184 - Miraflores"
        disabled
      />
    </div>
  );
}

export default PickUp;
