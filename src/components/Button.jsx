function Button({ text, width }) {
  return (
    <button
      className="border-none rounded bg-lightBlack text-center h-9 hover:shadow-button transition-shadow"
      style={{ width: width }}
    >
      <span className="text-xs text-white text-normal uppercase">{text}</span>
    </button>
  );
}

export default Button;
