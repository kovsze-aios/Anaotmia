import Image from "next/image";

interface AnatomyFigureProps {
  src: string;
  caption: string;
  width?: number;
  height?: number;
}

export function AnatomyFigure({
  src,
  caption,
  width = 800,
  height = 600,
}: AnatomyFigureProps) {
  return (
    <figure className="anatomy-figure">
      <div className="anatomy-figure__image-wrapper">
        <Image
          src={src}
          alt={caption}
          width={width}
          height={height}
          className="anatomy-figure__image"
          loading="lazy"
        />
      </div>
      <figcaption className="anatomy-figure__caption">{caption}</figcaption>
    </figure>
  );
}
