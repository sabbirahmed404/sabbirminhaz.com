export default function Footer() {
  return (
    <footer className="w-full mt-24" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="mono text-xs" style={{ color: "var(--faint)" }}>
          © {new Date().getFullYear()} sabbir ahmed minhaz
        </p>
        <div className="flex items-center gap-5 mono text-xs" style={{ color: "var(--muted)" }}>
          <a
            href="https://x.com/sam_minhaz"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            x
          </a>
          <a
            href="https://github.com/sabbirahmed404"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/msabbir-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            linkedin
          </a>
          <a href="mailto:sabbir@codemypixel.com" className="link-accent">
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
