export function Post({ titulo, link, description, parrafo }) {
  return (
    <>
      <div className="card">
        <h2>{titulo}</h2>
        <img src={link} alt={description} />
        <p>{parrafo}</p>
      </div>
    </>
  );
}
