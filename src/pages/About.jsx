import React from "react";
import Faces from "../components/Faces";

const info = [
  {
    img: "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.webp?b=1&s=170667a&w=0&k=20&c=mQxXIqT34BwDz9azTT92UwD-Wrybb2IRNqkvSGjGR1I=",
    name: "Ramesh Thapa",
    role: "Senior Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
    name: "Shamesh Shregar",
    role: "Project Manager",
  },
  {
    img: "https://media.istockphoto.com/id/1212960962/photo/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-blue-background.webp?b=1&s=170667a&w=0&k=20&c=xJS3jWMFNKr4oXBSQ0OBbOEIUKzG6rx1xnN7AY69xYA=",
    name: "Balen Shah",
    role: "DevOps Engineer",
  },
  {
    img: "https://media.istockphoto.com/id/876629044/photo/smiling-woman-posing-in-glasses.jpg?s=2048x2048&w=is&k=20&c=Tk6HKtcFBdbdsSxrn-FzQTcPI-ZrERQe_GB2gzwpxmw=",
    name: "Suzan Shrestha",
    role: "Designer",
  },
];

const About = () => {
  return (
    <main>
      <div className="bg-gray-200 text-center p-12">
        <h2 className="text-4xl font-bold">About Our Family</h2>
        <p className="text-l font-semibold max-w-[40rem] mx-auto py-5 text-gray-500 ">
          {" "}
          Can you believe its been 3 years of making ECommerce Websites
          together?We sure can't!Thanks for spending this time together.
        </p>
      </div>
      <div className="text-center my-5">
        <p className="text-gray-500 mx-2">
          These are the faces behind the websites and Youtube Channel.We're
          excied to get to know you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 text-center">
        {info.map((info, index) => (
          <Faces key={index} info={info} />
        ))}
      </div>
      <hr className="border-2 border-gray-200 my-10" />
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-500">
          About US
        </h2>
        <div className="text-center mx-10 lg:mx-40 grid gap-4 mt-4">
          <p>
            At JetShop, we understand the importance of
            seamless online shopping experiences. That's why we've dedicated
            ourselves to curating a diverse selection of high-quality products,
            carefully chosen to cater to your needs and preferences. Whether
            you're searching for trendy fashion pieces, innovative gadgets, or
            unique home decor items, we've got you covered.
          </p>

          <p>
            Our team is committed to providing you with an unparalleled shopping
            journey. From browsing our user-friendly website to receiving your
            order right at your doorstep, we strive to exceed your expectations
            every step of the way. With secure payment options and swift
            delivery services, shopping with us is not just convenient but also
            reliable.
          </p>
          <p>
            But we're more than just an ecommerce platform; we're a community of
            like-minded individuals who share a passion for Your Product
            Category. We believe that shopping is more than just a transaction –
            it's an opportunity to express yourself, discover new trends, and
            connect with others who share your interests. At JetShop, we're
            constantly evolving to bring you the latest innovations and trends
            in the world of Your Product Category. Whether you're a seasoned
            enthusiast or a curious newcomer, we invite you to join us on this
            exciting journey.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
