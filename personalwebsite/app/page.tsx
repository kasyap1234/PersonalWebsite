import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Personal Website</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-black-900">LinkedIn</a>
          <a href="#" className="text-black-900">Substack</a>
          <a href="#" className="text-black-900">Twitter</a>
        </div>
      </div>
    </main>
  );
}

