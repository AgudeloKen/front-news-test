import "./New.css";

const New = ({ notice }) => {
  const OnDelete = async (id) => {
    const res = await fetch(`http://localhost:8080/news/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="container">
      <button className="delete" onClick={() => OnDelete(notice.id)}>
        X
      </button>
      <div className="image">
        <a href={notice.url} target="_blank">
          <img src={notice.imageUrl} />
        </a>
      </div>
      <div className="info">
        <span className="tag">{notice.tag}</span>
        <span className="tag">
          {notice.lang == "es" ? "Español" : "Ingles"}
        </span>
      </div>
      <div>
        <h2 className="title">
          <a href={notice.url} target="_blank">
            {notice.title}
          </a>
        </h2>
        <div className="info">
          <h3>{notice.source}</h3>
          <h3 className="author">{notice.author}</h3>
        </div>
        <p className="content">{notice.content.substring(0, 300)}...</p>
      </div>
    </div>
  );
};

export default New;
