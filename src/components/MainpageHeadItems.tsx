import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faChartArea, faChartPie, faChartLine } from "@fortawesome/free-solid-svg-icons";
library.add(faChartArea, faChartBar, faChartPie, faChartLine);

interface Category {
  title: string;
  data: any;
}

type Props = {
  title: string;
  data: any;
  categories: Category[];
};

const MainpageHeadItems = (props: Props) => {
  const { title, data, categories } = props;
  return (
    <div className="mainpage-head-contentitem shadow-md">
      <div className="py-3 px-4">
        <p className="text-lg font-semibold mb-2 mainpage-head-contentitem-title">{title}</p>
        <div className="mainpage-head-content-subitem ml-1 flex flex-row">
          <span className="col-6 float-left">
            <p className="text-lg font-semibold mb-0 ml-1 mt-0">{data}</p>
            <ul className="list-none p-0">
              {categories.map((item) => {
                return (
                  <p className="text-xs m-0 font-medium">
                    {item.data} {item.title}
                  </p>
                );
              })}
            </ul>
          </span>
          <span className="col-6">
            <FontAwesomeIcon className="col-6 float-right mainpage-head-content-icon" icon={["far", "chart-bar"]} size="5x" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainpageHeadItems;
