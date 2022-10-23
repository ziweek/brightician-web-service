import AnimationSoftware from "./animation-software";
import AnimationAnalysis from "./animation-analysis";
import AnimationBusiness from "./animation-business";

export default function Content() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <AnimationBusiness></AnimationBusiness>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <AnimationSoftware></AnimationSoftware>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              ALPER KAMU
            </h2>
            <p className="text-gray-500">UI Develeoper</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-center">
            <AnimationAnalysis></AnimationAnalysis>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              HENRY LETHAM
            </h2>
            <p className="text-gray-500">CTO</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
