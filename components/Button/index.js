export default function Button({ children, oneClick }) {
  return (
    <>
      <button oneClick={oneClick}>{children}</button>
      <style jsx>{`
        button {
          aling-items: center;
          background: black;
          font-size: 16px;
          color: white;
          border: 0;
          cursor: pointer;
          display: flex;
          border-radius: 9999px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }
        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
