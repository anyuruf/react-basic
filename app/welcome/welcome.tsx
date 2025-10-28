import VideoCard from "~/components/VideoCard";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="mb-1 mt-4 text-xl font-semibold">React-player demo</h1>
        <VideoCard />
      </div>
    </main>
    )
};
