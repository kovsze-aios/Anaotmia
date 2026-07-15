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
  height,
}: AnatomyFigureProps) {
  return (
    <figure className="anatomy-figure">
      <div className="anatomy-figure__image-wrapper relative" style={{ minHeight: height ? `${height}px` : "300px" }}>
        <Image
          src={src}
          alt={caption}
          fill
          style={{ objectFit: 'contain' }}
          className="anatomy-figure__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <figcaption className="anatomy-figure__caption">
        {caption}
        <span className="anatomy-figure__source">Źródło: {source}</span>
      </figcaption>
    </figure>
  );
}
