/* eslint-disable @next/next/no-img-element */
interface AnatomyFigureProps {
  src: string;
  caption: string;
  source: string;
  width?: number;
  height?: number;
}

export function AnatomyFigure({
  src,
  caption,
  source,
  width,
  height,
}: AnatomyFigureProps) {
  return (
    <figure className="anatomy-figure">
      <div className="anatomy-figure__image-wrapper">
        <img
          src={src}
          alt={caption}
          width={width}
          height={height}
          className="anatomy-figure__image"
          loading="lazy"
        />
      </div>
      <figcaption className="anatomy-figure__caption">
        {caption}
        <span className="anatomy-figure__source">Źródło: {source}</span>
      </figcaption>
    </figure>
  );
}
