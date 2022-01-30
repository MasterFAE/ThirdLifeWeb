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
    <main className="container-fluid main-wrapper flex">
      <NonWLSidebar />
      <div className=" mainpage-wrapper min-w-screen">
        {/* <div className="mainpage-header ">
          <h1> Anasayfa </h1>
        </div> */}
        <div className="mainpage-container ">
          <div className="flex flex-row flex-wrap col-12">
            <div className="mainpage-maincontent shadow-md col-6 px-4 pt-3 my-2">
              <div className="mainpage-maincontent-header">
                <h1 className="text-2xl font-semibold">Duyurular</h1>
              </div>
              <div className="mainpage-maincontent-container">
                {announcements.map((xItem) => {
                  return <Item item={xItem} key={xItem.id} />;
                })}
              </div>
            </div>

            <div className="mainpage-maincontent shadow-md col-6  px-4 pt-3 my-2">
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
