const SectionHeading = ({ p, text }) => {
  return (
    <div className="text-center ">
      <p className="fw-bold">{p}</p>
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeading;
