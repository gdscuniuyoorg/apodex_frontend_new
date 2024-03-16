import { Dispatch, SetStateAction } from "react";

type TPageProps = {
  setPage: Dispatch<SetStateAction<string>>;
};

export default function SetUpProfileThree({ setPage }: TPageProps) {
  return (
    <div>
      <button onClick={() => setPage("page-one")}>next this is profile three</button>
    </div>
  );
}
