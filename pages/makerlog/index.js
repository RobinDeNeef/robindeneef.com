import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MakerLog from "@/components/makerlog/MakerLog";
import Footer from "@/components/Footer";
import { logFilePaths, LOGS_PATH } from "@/utils/mdxUtils";

export default function Home({ logs }) {
  return (
    <div className="flex flex-col h-screen">
      <main className="container py-6 px-4 mx-auto lg:max-w-4xl mb-32">
        <h2 className="text-left mb-5 text-3xl lg:text-4xl font-bold text-gray-900 lg:text-4xl dark:text-white">
          🛠️ Maker Log
        </h2>
        <p className="mb-5">
          Short updates about my side projects. I'll add an update once a week.
        </p>
        <MakerLog logs={logs} />
      </main>
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  const logs = logFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(LOGS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { logs } };
}
