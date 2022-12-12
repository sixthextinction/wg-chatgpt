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
      <div className="dark:bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container flex mx-auto mt-10 h-fit">
          <div className="bg-gray-500 p-4 w-2/3">
            {/* page content */}
            <h2 className="font-bold text-xl"> Page content goes here </h2>
            {/* lipsum */}
            <p>
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
              semper pulvinar neque, ut euismod diam efficitur non. Cras varius
              euismod interdum. Phasellus volutpat mauris eget porttitor
              lobortis. Vivamus tempor orci in est pharetra convallis. Morbi
              interdum at tellus a aliquam. Donec at lorem vitae dui interdum
              gravida nec egestas ligula. Maecenas porttitor ante ut purus
              vulputate, sed vulputate tellus lacinia. In dictum justo mi, eu
              lobortis massa ultricies non. Suspendisse commodo purus eget quam
              luctus suscipit. Vivamus gravida urna sit amet lacus tincidunt, in
              efficitur augue cursus. Suspendisse cursus varius luctus. Sed
              egestas, neque at convallis pharetra, diam lacus convallis enim,
              ut gravida eros eros et ex. Nunc eu velit turpis. Suspendisse
              potenti. Aliquam dapibus mauris risus, at luctus elit lacinia
              vitae. Cras vulputate gravida rutrum. Cras pharetra commodo
              maximus. Vivamus fringilla magna arcu, in iaculis tortor rhoncus
              vitae. Suspendisse mauris tellus, laoreet a lorem ut, euismod
              faucibus erat. Vestibulum feugiat sapien hendrerit ante posuere,
              vehicula rhoncus neque elementum. Aenean consectetur libero id
              lacus tempus dictum. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Curabitur eget quam mauris.
            </p>
          </div>
          <div className="bg-gray-500 p-4 w-1/3 ">
            <ChatHelper />
          </div>
        </div>
      </div>
    </>
  );
};

export default withWunderGraph(Home);
