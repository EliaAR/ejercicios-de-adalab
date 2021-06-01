function MediaCard({ names, date, paragraph }) {
  return (
    <div className="target">
      <section>
        <h1 className="names">{names}</h1>
        <h2 className="date">{date}</h2>
      </section>
      <section>
        <p className="paragraph">{paragraph}</p>
      </section>
      <section>
        <p>Leer más..</p>
      </section>
    </div>
  );
}

export { MediaCard };
