import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleDown, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronCircleDown, faChevronCircleRight);

interface CollapsableProps {
  title: string;
  linkTo: string;
  categories: CollapsedItem[];
}

interface CollapsedItem {
  title: string;
  linkTo: string;
}

const Collapsable = (props: CollapsableProps) => {
  const { categories, title, linkTo } = props;
  const [collapsable, setCollapsable] = useState(false);
  return (
    <div className="sidebar-category-collapsible">
      <div className="flex flex-row">
        <a className="sidebar-category-item">{title}</a>
        <span className="flex">
          <FontAwesomeIcon
            onClick={(e) => {
              e.preventDefault();
              setCollapsable(!collapsable);
            }}
            className="sidebar-icon transition-all cursor-pointer"
            style={{ marginTop: "0.75vh", marginLeft: "0.5vh" }}
            icon={!collapsable ? ["fas", "chevron-circle-right"] : ["fas", "chevron-circle-down"]}
            size="xs"
          />
        </span>
      </div>
      {collapsable && (
        <div className="transition-all">
          <ul className="p-0 px-1 m-0 flex flex-col text-sm">
            {categories.map((item: CollapsedItem) => {
              return <a className="sidebar-category-subitem">{item.title}</a>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collapsable;
