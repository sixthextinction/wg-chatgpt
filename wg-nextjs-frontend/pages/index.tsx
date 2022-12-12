import { NextPage } from "next";
import ChatHelper from "../components/ChatHelper";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";
import NavBar from "../components/Header";

const Home: NextPage = () => {
  // const { data, error } = useQuery({
  //   operationName: "ChatGPT",
  // });

  return (
    <>
      <div className="dark:bg-gray-800 min-h-screen">
        <NavBar />
        <div className="container flex mx-auto mt-10 h-fit">
          <div className="bg-gray-300 p-4 rounded-md">
            {/* page content */}
            <h2 className="font-bold text-xl"> Page content goes here </h2>
            <div>
              <iframe
                className="rounded-lg w-full h-80 mt-4 "
                src="https://www.youtube.com/embed/njX2bu-_Vw4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* lipsum */}
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum lacinia turpis sem, sit amet bibendum odio volutpat et.
              Donec ex dolor, pharetra ac blandit in, euismod id eros. Integer
              tincidunt tempus fermentum. Nulla ultrices quam ut iaculis
              viverra. Pellentesque ex dui, varius id eros eget, pulvinar congue
              diam. Curabitur tempus urna sapien, id rhoncus nulla aliquam ac.
              Ut congue, quam at feugiat condimentum, arcu mi pretium enim,
              vitae convallis urna est id augue. Sed quis gravida lorem. Proin
              convallis ligula eu volutpat ultricies. Cras a elementum mi. Nulla
              justo arcu, posuere at vulputate sit amet, cursus et enim. Fusce
              dictum ligula risus, sit amet tincidunt justo dignissim non. Nam
              semper pulvinar neque, ut euismod diam efficitur non. 
            </p>
          </div>
          <div className="absolute bottom-0 right-0 m-4">
            <ChatHelper />
          </div>
        </div>
      </div>
    </>
  );
};

export default withWunderGraph(Home);
