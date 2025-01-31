import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function AnimatedBackground() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSize = Math.floor(Math.random() * (900 - 450 + 1)) + 150; // Size between 450px - 900px
      const randomTop = Math.random() * 80 + 10; // Height between 10% - 90% of viewport
      const randomSpeed = Math.random() * (7 - 3) + 3; // Speed between 3 - 7 seconds

      setImages((prevImages) => [
        ...prevImages,
        { id: uuidv4(), size: randomSize, top: randomTop, speed: randomSpeed, timestamp: Date.now() },
      ]);

      // Remove old images after 7 seconds (max speed)
      setTimeout(() => {
        setImages((prevImages) =>
          prevImages.filter((img) => Date.now() - img.timestamp < 7000)
        );
      }, 7000);
    }, 500); // Spawn every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-background">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="floating-image"
          style={{ top: `${image.top}%`, width: `${image.size}px`, height: `${image.size}px` }}
          initial={{ x: "-100%" }}
          animate={{ x: "110vw" }}
          exit={{ opacity: 0 }}
          transition={{ duration: image.speed, ease: "linear" }} // Random speed
        >
          <img src="/text_fart.png" alt="Floating" />
        </motion.div>
      ))}
    </div>
  );
}

