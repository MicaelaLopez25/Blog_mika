export function Post({ titulo, link, description, parrafo }) {
  return (
    <>
      <div
        className="card"
        data-aos="fade-up"
        style={{ marginBottom: "7px", marginTop: "100px" }}
      >
        <img src={link} alt={description} className="card-img" />
        <div className="card-content color-letra">
          <h2>{titulo}</h2>
          <p>{parrafo}</p>
        </div>
      </div>
    </>
  );
}

