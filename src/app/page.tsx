import AISam from "@/components/AISam/AISam";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-title">
        <h1>
          Hi.
          <br />
          I&apos;m
          <br />
          <span className="orange">Sam</span>
        </h1>
      </div>
      <AISam />
    </div>
  );
}
