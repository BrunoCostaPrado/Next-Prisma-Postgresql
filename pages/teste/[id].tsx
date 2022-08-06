/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export default function test() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Test {id}</h1>
    </div>
  );
}
