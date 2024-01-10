import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import Logo from "./util/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-base-200 dark:bg-transparent dark:text-black text-base-content">
        <div>
          <div className="h-52">
            <Logo />
          </div>
          <p className="text-center">
            <span className="text-3xl font-bold">Sun Holidays Ltd</span>
            <br />
            <span className="fontHand"> live every day as a holiday</span>
            {/* location card  */}
            <div className="w-full flex items-center"></div>
          </p>
        </div>
        <div>
          <span className="footer-title capitalize text-3xl">Contact</span>
          <p>
            Give our clients assured services that go above <br /> and beyond
            their expectations to make their <br /> travels unforgettable and
            pleasurable.
          </p>
          <Link href={"/contact#map"}>
            <div className="text-neutral-900 flex">
              <span className="relative top-1 pr-1">
                <FiMapPin />
              </span>{" "}
              362/1, Holding 13/1(2nd Flor), Old-27 New-16
              <br />
              Dhanmondi Dhaka-1209, Bangladesh.
            </div>
          </Link>
          <a
            href="mailto:info@sunholidaysltd.com"
            className="flex bg-gradient-to-tr from-logoBlue to-logoSun bg-clip-text hover:text-transparent"
          >
            <span className="text-logoBlue relative top-1 pr-1">
              <HiOutlineMail />
            </span>
            info@sunholidaysltd.com
          </a>
          <a
            href="mailto:sunholidays07@gmail.com"
            className="flex bg-gradient-to-tr from-logoBlue to-logoSun bg-clip-text hover:text-transparent"
          >
            <span className="text-logoBlue relative top-1 pr-1">
              <HiOutlineMail />
            </span>
            sunholidays07@gmail.com
          </a>
          <a
            href="tel:+8802222243452"
            className="flex bg-gradient-to-tr from-logoBlue to-logoSun bg-clip-text hover:text-transparent"
          >
            <span className="text-logoBlue relative top-1 pr-1">
              <IoMdCall />
            </span>{" "}
            +88 02 2222 43452
          </a>
          <a
            href="tel:8801873838301"
            className="flex font-bold bg-gradient-to-tr from-logoBlue to-logoSun bg-clip-text hover:text-transparent text-2xl"
          >
            <span className="text-logoBlue relative top-1 pr-1">
              <IoMdCall />
            </span>{" "}
            +88 018 73 83 83 01
          </a>
          <a
            href="tel:8801873838302"
            className="flex font-bold bg-gradient-to-tr from-logoBlue to-logoSun bg-clip-text hover:text-transparent text-2xl"
          >
            <span className="text-logoBlue relative top-1 pr-1">
              <IoMdCall />
            </span>{" "}
            +88 018 73 83 83 02
          </a>
        </div>
        <div>
          <span className="footer-title capitalize text-3xl">Information</span>
          <Link href={"/services"}>
            <div className="link flex link-hover">
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Services
            </div>
          </Link>
          <Link href={"/gallery"}>
            <div className="link link-hover flex">
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Gallery
            </div>
          </Link>

          <a className="link link-hover flex">
            <span className="text-xl">
              <MdOutlineArrowRight />
            </span>{" "}
            Facebook Group
          </a>
          <a className="link link-hover flex">
            {" "}
            <span className="text-xl">
              <MdOutlineArrowRight />
            </span>{" "}
            Events
          </a>
          <Link href={"/Query"}>
            <div className="link link-hover flex">
              {" "}
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Query
            </div>
          </Link>
        </div>

        <div>
          <span className="footer-title capitalize text-3xl">Legal</span>
          <Link href={"/Terms&Condition"}>
            <div className="link link-hover flex">
              {" "}
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Terms & Condition
            </div>
          </Link>

          <Link href={"/Privacy"}>
            <div className="link link-hover flex">
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Privacy policy
            </div>
          </Link>
          <Link href={"/Refund"}>
            <div className="link link-hover flex">
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Refund policy
            </div>
          </Link>
          <Link href={"/BillingAndPaymentMethodology"}>
            <div className="link link-hover flex">
              <span className="text-xl">
                <MdOutlineArrowRight />
              </span>{" "}
              Billing and payment methodology
            </div>
          </Link>
        </div>
        {/* news  */}
        <div>
          <span className="footer-title capitalize text-3xl ">Get Update</span>
          <div className="form-control">
            <label className="label">
              <span className="label-text">To Get Our Spicial Deals!</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="yourmail@example.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <button className="rounded-md bg-gradient-to-tr to-logoBlue from-logoRay py-2 mt-2 px-8 text-neutral-50 font-bold text-xl btn border-none hover:scale-95">
            Submit
          </button>
        </div>
      </div>
      <div className="footer items-center p-4 bg-gradient-to-r from-logoSun to-logoBlue text-neutral-content">
        <div className="items-center grid-flow-col">
          <div style={{ filter: "drop-shadow(0px 0px 1px )" }} className="h-10">
            <Logo />
          </div>
          <p>
            © Copyright 2023 Sun Holidays Ltd. Design And Develop By{" "}
            <a
              href="https://paradisesolution.us"
              target="_blank"
              className="font-bold !text-[#7e278d]"
              rel="noreferrer"
            >
              Paradise Solution
            </a>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
          <a className="hover:scale-110" href="">
            <AiOutlineInstagram />
          </a>
          <a className="hover:scale-110">
            <AiFillLinkedin />
          </a>
          <a className="hover:scale-110">
            <AiOutlineTwitter />
          </a>
          <a className="hover:scale-110">
            <AiFillYoutube />
          </a>
          <a
            className="hover:scale-110"
            href="https://www.facebook.com/sunholidaysltd"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
