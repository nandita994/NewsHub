import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  console.log("Image Source:", src);
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 px-3"
      style={{ maxWidth: "325px" }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        style={{
          height: "250px",
          width: "290px",
          objectFit: "cover", // Ensures the image maintains aspect ratio
        }}
        alt="News Thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News Description"}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;














/*import image from "../assets/news.jpg";
const NewsItem = ({title,description,src,url}) => {
  console.log("Image Source:", src);
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 px-3 " style={{maxWidth:"325px"}}>
    <img src={src?src:image} className="card-img-top" style={{height:"250px",width:"290px"}}alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News Description"}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  )
}

export default NewsItem*/