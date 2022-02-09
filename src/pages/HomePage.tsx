import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainpageHeadItems from "../components/MainpageHeadItems";
import Sidebar from "../components/Sidebar";
import "../css/HomePage.css";
import { User } from "../redux/types";
import NonWLHomePage, { Item } from "./NonWLHomePage";

interface Props {}

const HomePage = (props: Props) => {
  // @ts-ignore
  const announcements: Announcement[] = useSelector((state) => state.general.announcements);
  // @ts-ignore
  const updates: Announcement[] = useSelector((state) => state.general.updates);

  //@ts-ignore
  const user: User = useSelector((state) => state.user);
  if (user.whitelist) {
    return (
      <main className="container-fluid main-wrapper flex">
        <Sidebar />
        <div className="mainpage-wrapper">
          {/* <div className="mainpage-header ">
            <h1> Anasayfa </h1>
          </div> */}
          <div className="mainpage-container mt-4">
            <div className="flex flex-wrap flex-md-wrap col-12">
              <MainpageHeadItems
                title="Şehir Ekonomisi"
                data={"$11.942.490"}
                categories={[
                  { title: "Ortalama Gelir", data: "5300$" },
                  { title: "Enflasyon", data: "15%" },
                  { title: "İşsizlik", data: "6%" },
                ]}
              />
              <MainpageHeadItems
                title="Aktiflik"
                data={"$11.942.490"}
                categories={[
                  { title: "Ortalama Gelir", data: "5300$" },
                  { title: "Enflasyon", data: "15%" },
                  { title: "İşsizlik", data: "6%" },
                ]}
              />
              <MainpageHeadItems
                title="Suç Oranı"
                data={"$11.942.490"}
                categories={[
                  { title: "Ortalama Gelir", data: "5300$" },
                  { title: "Enflasyon", data: "15%" },
                  { title: "İşsizlik", data: "6%" },
                ]}
              />
              <MainpageHeadItems
                title="Sağlık"
                data={"$11.942.490"}
                categories={[
                  { title: "Ortalama Gelir", data: "5300$" },
                  { title: "Enflasyon", data: "15%" },
                  { title: "İşsizlik", data: "6%" },
                ]}
              />
            </div>
            <div className="flex col-12 flex-wrap mt-4">
              <div className="mainpage-maincontent shadow-md  col-6 px-4 py-3">
                <div className="mainpage-maincontent-header">
                  <h1 className="text-2xl font-semibold">Duyurular</h1>
                </div>
                <div className="mainpage-maincontent-container">
                  {updates.map((xItem) => {
                    return <Item item={xItem} key={xItem.id} />;
                  })}
                </div>
              </div>
              <div className="mainpage-maincontent shadow-md col-6  px-4 py-3">
                <div className="mainpage-maincontent-header">
                  <h1 className="text-2xl font-semibold">Güncellemeler</h1>
                </div>
                {updates.map((xItem) => {
                  return <Item item={xItem} key={xItem.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return <NonWLHomePage />;
  }
};

export default HomePage;
