import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>WASM Works.</h1>
          <h2>    Build natively. Run everywhere.</h2>
      <p>
          We engineer high-performance systems using Rust, WebAssembly, and WASI.
      </p>
        <p>
            From edge compute to enterprise plugins — we turn portable code into infrastructure.
        </p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
