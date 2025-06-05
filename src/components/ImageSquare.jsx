export function ImageSquare({ src }) {
  return (
    <>
      <div className="img-wrapper">
        <img src={src} alt="" className="img-square fade-in" />
      </div>
    </>
  );
}
