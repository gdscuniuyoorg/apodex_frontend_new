import { Dispatch, SetStateAction } from "react";

type TPageProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

export default function SetUpProfileTwo({ setPage }: TPageProps) {
  return (
    <div>
      <button onClick={() => setPage("page-three")}>next this is profile two</button>
    </div>
  );
}
