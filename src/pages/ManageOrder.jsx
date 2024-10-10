import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import heroimg from '../assets/pageImage/Rectangle1548Shadow.png';
import ManageOrderCard from "../components/card/smallComponent/ManageOrderCard";
import { FaXmark } from "react-icons/fa6";
import ApprovedButton from "../components/card/button/ApprovedButton";
import img1 from "../assets/cardImage/Rectangle 65 (3).png";
import img2 from "../assets/cardImage/dfdsfsdf.png";
import img3 from "../assets/cardImage/Rectangle 65 (5).png";

function ManageOrder() {
  return (
    <div>
      <div className="pb-10">
        <Navbar />
      </div>
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md mb-28"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1 className="text-3xl font-bold text-white pl-10 pt-16">
          Manage All Orders
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <ManageOrderCard
          logo={<FaXmark />}
          img={img1}
          name={"Martha Knit Top"}
          color={"Color : Green"}
          size={" Size: S"}
          mail={"info@gmail.com"}
          date={"22-10-2022"}
          button={<ApprovedButton />}
        />
        <ManageOrderCard
          logo={<FaXmark />}
          img={img2}
          name={"Martha Knit Top"}
          color={"Color : Green"}
          size={" Size: S"}
          mail={"info@gmail.com"}
          date={"22-10-2022"}
          button={<ApprovedButton />}
        />
        <ManageOrderCard
          logo={<FaXmark />}
          img={img3}
          name={"Martha Knit Top"}
          color={"Color : Green"}
          size={" Size: S"}
          mail={"info@gmail.com"}
          date={"22-10-2022"}
          button={<ApprovedButton />}
        />
      </div>
      <div className="pt-28">
        <Footer />
      </div>
    </div>
  );
}

export default ManageOrder
