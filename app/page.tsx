import Link from "next/link";
import "@/lib/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <Link
        href="/add"
        className="rounded-md bg-neutral-300 text-white p-3 transition-colors hover:bg-neutral-400"
      >
        트윗 작성하기
      </Link>
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥨</span>
        <h2 className="text-2xl">챌린지에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
