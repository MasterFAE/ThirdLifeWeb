import React from "react";
import { Dispatch } from "redux";

import { useDispatch, useSelector } from "react-redux";
import NonWLSidebar from "../components/NonWLSidebar";
import { Announcement } from "../redux/types";
import { Update } from "@reduxjs/toolkit";

type Props = {};

const NonWLHomePage = (props: Props) => {
  // @ts-ignore
  const announcements: Announcement[] = useSelector((state) => state.general.announcements);
  // @ts-ignore
  const updates: Announcement[] = useSelector((state) => state.general.updates);
  return (
    <main className="main-wrapper flex">
      <NonWLSidebar />
      <div className="container mainpage-wrapper">
        {/* <div className="mainpage-header ">
          <h1> Anasayfa </h1>
        </div> */}
        <div className="mainpage-container">
          {/* <div className="flex flex-wrap flex-md-wrap text-center col-12">
            <div className="mainpage-head-contentitem col-10 shadow-md">
              <div className="px-4">
                <p className="text-lg font-semibold py-3 mb-0">Başvurular</p>
                <p className="text-lg font-semibold">3 Başvuru</p>
                <div className="mainpage-head-content-subitem">
                  <ul className="list-none p-0 my-2">
                    <p className="text-xs m-0 font-medium">2 Reddedilen</p>
                    <p className="text-xs m-0 font-medium">1 Beklemede</p>
                    <p className="text-xs m-0 font-medium">0 Kabul Edilen</p>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-row col-12 mt-4">
            <div className="mainpage-maincontent shadow-md col-6  px-4 py-3">
              <div className="mainpage-maincontent-header">
                <h1 className="text-2xl font-semibold">Duyurular</h1>
              </div>
              <div className="mainpage-maincontent-container">
                {announcements.map((xItem) => {
                  return <Item item={xItem} key={xItem.id} />;
                })}
              </div>
            </div>

            <div className="mainpage-maincontent shadow-md col-6  px-4 py-3">
              <div className="mainpage-maincontent-header">
                <h1 className="text-2xl font-semibold">Güncellemeler</h1>
              </div>
              <div className="mainpage-maincontent-container">
                {updates.map((xItem) => {
                  return <Item item={xItem} key={xItem.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Item = (props: any) => {
  const { item } = props;
  return (
    <div className="mainpage-subcontent shadow-md">
      <div className="mainpage-subcontent-header">
        <h1 className="text-base font-semibold">{item.title}</h1>
      </div>
      <div className="mainpage-subcontent-body">
        <p className=" m-0 p-0 text-xs font-medium">{item.description}</p>
      </div>
    </div>
  );
};

export default NonWLHomePage;
