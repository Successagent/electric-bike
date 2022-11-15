const index = ({ page, other }) => {
  return (
    <section className="about-hero-section">
      <h3 className="h2">{page}</h3>
      <ul className="flex">
        <li>Home</li>
        <li>{other}</li>
      </ul>
    </section>
  );
};

export default index;
