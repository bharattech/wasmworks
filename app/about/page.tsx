import Link from "next/link";

export default function About() {
    return (
        <>
            <h1>About</h1>
            <h1>Core Services</h1>
            <p>
                🔧 Custom Runtime Development
                We build embedded WASM runtimes (Wasmer, Wasmtime, or custom) for your product — enabling third-party
                extensions, scripting, or plugin systems.
            </p>

            <p>
                ⚙️ High-Performance Modules
                Image processing, data transformation, cryptography, or simulation logic — compiled from Rust to WASM
                for near-native speed across cloud and edge.
            </p>

            <p>
                🧩 WASI Integration
                Bridge WASM modules to host capabilities: HTTP, Redis, Postgres, message queues, or proprietary
                hardware.
            </p>

            <p>
                📦 Porting & Migration
                Move existing C/C++/Go logic to Rust + WASM for sandboxing, portability, and modern tooling.
            </p>

            <div>
                Back to <Link href="/">Home</Link>
            </div>
        </>
    );
}
