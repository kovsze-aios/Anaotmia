import Link from "next/link";
import Image from "next/image";

export function QualityCommitment() {
  return (
    <div className="quality-commitment">
      <h2>Our quality commitment</h2>
      <div className="quality">
        <div className="quality__item">
          <div className="quality__img relative" style={{ height: "100px", width: "100px" }}>
            <Image
              src="/images/research.webp"
              alt=""
              fill
              style={{ objectFit: 'contain' }}
              sizes="100px"
            />
          </div>
          <p className="quality__desc">
            Grounded on academic literature and research
          </p>
        </div>
        <div className="quality__item">
          <div className="quality__img relative" style={{ height: "100px", width: "100px" }}>
            <Image
              src="/images/reviewed.webp"
              alt=""
              fill
              style={{ objectFit: 'contain' }}
              sizes="100px"
            />
          </div>
          <p className="quality__desc">
            Reviewed by expert medical practitioners
          </p>
        </div>
        <div className="quality__item">
          <div className="quality__img relative" style={{ height: "100px", width: "100px" }}>
            <Image
              src="/images/trophy.webp"
              alt=""
              fill
              style={{ objectFit: 'contain' }}
              sizes="100px"
            />
          </div>
          <p className="quality__desc">
            Supporting 7,166,018 students worldwide
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link href="/en/quality">Learn more ➞</Link>
      </div>
    </div>
  );
}
