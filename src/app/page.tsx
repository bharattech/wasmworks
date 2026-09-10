import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center sm:items-center">
        
        
        <Link
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
						href="/"
						target="_self"
						rel="noopener noreferrer"
					>
          <h1>WASMWORKS</h1>
        </Link>

        <Image className="" src="/logo-512x512.png" alt="Next.js logo" width={180} height={38} priority />
        
				<p>WebAssembly, Wasi, Rust</p>
				{/*<ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
					<li className="tracking-[-.01em]">
						WebAssembly
					</li>
          <li className="tracking-[-.01em]">Wasi</li>
					<li className="tracking-[-.01em]">Rust</li>
				</ul>*/}

				{/*<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Link
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
						href="/"
						target="_self"
						rel="noopener noreferrer"
					>
						Learn more
					</Link>
				</div>*/}
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>&copy; 2026 wasmworks. All rights reserved.</p>
				</a>
				
			</footer>
		</div>
	);
}
