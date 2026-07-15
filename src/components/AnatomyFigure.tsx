import Image from "next/image";

interface AnatomyFigureProps {
  src: string;
  caption: string;
  source?: string;
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
  const minHeight = height ? `${height}px` : "300px";

  return (
    <figure className="anatomy-figure">
      <div
        className="anatomy-figure__image-wrapper relative"
        style={{ minHeight }}
      >
        <Image
          src={src}
          alt={caption}
          fill
          style={{ objectFit: "contain" }}
          className="anatomy-figure__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <figcaption className="anatomy-figure__caption">
        {caption}
        {source && <span className="anatomy-figure__source"> — Źródło: {source}</span>}
      </figcaption>
    </figure>
  );
}
