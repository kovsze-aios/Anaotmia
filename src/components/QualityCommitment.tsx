/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function QualityCommitment() {
  return (
    <div className="quality-commitment">
      <h2>Our quality commitment</h2>
      <div className="quality">
        <div className="quality__item">
          <div className="quality__img">
            <img
              src="/images/research.webp"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p className="quality__desc">
            Grounded on academic literature and research
          </p>
        </div>
        <div className="quality__item">
          <div className="quality__img">
            <img
              src="/images/reviewed.webp"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p className="quality__desc">
            Reviewed by expert medical practitioners
          </p>
        </div>
        <div className="quality__item">
          <div className="quality__img">
            <img src="/images/trophy.webp" alt="" width={100} height={100} />
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
