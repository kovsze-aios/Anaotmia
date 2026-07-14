import Image from "next/image";

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
        <Image
          src={src}
          alt={caption}
          width={width || 800}
          height={height || 600}
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
