import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 7;
      setReviewCount(count);
      if (count >= 2037) clearInterval(interval);
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Center Image with Content */}
      <div className="absolute flex flex-col items-center justify-center">
        <img
          src="/src/assets/middle.png" 
          style={{
            // height:"100px",
            // width:"1000px"
            marginTop : "10px"
          }}
          alt="Who we are"
          className="w-[400px] h-[300px] object-cover"
        />
        <div className="absolute text-center p-5">
          <h2 className="text-3xl font-bold">Who are we?</h2>
          <p className="text-lg mt-2">
            "WeAd Media elevates brands through social media management,
            content creation, and targeted digital advertising."
          </p>
        </div>
      </div>

      {/* Top Left Image */}
      <motion.img
        src="/src/assets/photo1.png"
        alt="Top Left"
        className="absolute top-10 left-10 ml-10  object-cover"
        style={{
            height: "300px",
            width :"300px",
            margin : "40px 10px 10px 250px"
        }
        }
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Top Right Image */}
      <motion.img
        src="/src/assets/photo2.png"
        style={{
            height: "300px",
            width :"300px",
            margin : "0px 230px 10px 2px"
        }
        }
        alt="Top Right"
        className="absolute top-10 right-10 object-cover"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Bottom Left Image with Review Count */}
      <motion.div
        className="absolute bottom-10 left-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/src/assets/middle.png"
          alt="Bottom Left"
          className=" object-cover"
          style={{
            margin : "10px 10px 20px 350px "
          }}
        />
        <div className="absolute text-center text-black font-bold text-xl mt-20 ml-20" style={{
            margin:"100px -50px 100px 265px"
        }
        }>
          <p className="text-xl text-black"> 4.5</p>
          {reviewCount}
          <span className="text-yellow-500"> ★★★★☆</span>
          <p className="text-sm text-blue-600">2,037 Reviews</p>
        </div>
      </motion.div>

      {/* Bottom Right Image */}
      <motion.img
        src="/src/assets/photo4.png"
        style={{
            height:"250px",
            width:"250px",

            margin:"0px 350px 0px 40px "
        }}
        alt="Bottom Right"
        className="absolute bottom-10 right-10 w-40 h-40 object-cover"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Logo */}
      <img
        src="/src/assets/logo.webp"
        alt="WeAd Media Logo"
        className="absolute bottom-5 right-5 w-28"
        style={{
            height:"170px",
            width :"170px"
        }}
      />
    </div>
  );
};

export default WhoWeAre;
