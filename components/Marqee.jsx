import Image from "next/image";

const images = [
  "/images/japanese-course-institute14.jpg",
  "/images/japanese-course-institute13.jpg",
  "/images/japanese-course-institute12.jpg",
  "/images/japanese-course-institute11.jpg",
  "/images/japanese-course-institute10.jpg",
  "/images/japanese-course-institute9.jpg",
  "/images/japanese-course-institute8.jpg",
  "/images/japanese-course-institute7.jpg",
  "/images/japanese-course-institute6.jpg",
  "/images/japanese-course-institute5.jpg",
  "/images/japanese-course-institute4.jpg",
  "/images/japanese-course-institute3.jpg",
  "/images/japanese-course-institute2.jpg",
  "/images/japanese-course-institute1.jpg",
];

export default function ImageMarquee() {
  return (
    <section className="w-full overflow-hidden py-10">
      <div className="marquee-track">
        {/* First set */}
        {images.map((src, index) => (
          <div
            key={`first-${index}`}
            className="relative h-[200px] w-[300px] shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {images.map((src, index) => (
          <div
            key={`second-${index}`}
            className="relative h-[200px] w-[300px] shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
