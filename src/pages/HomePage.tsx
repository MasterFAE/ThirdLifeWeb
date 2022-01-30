import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainpageHeadItems from "../components/MainpageHeadItems";
import Sidebar from "../components/Sidebar";
import "../css/HomePage.css";
import { User } from "../redux/types";
import NonWLHomePage from "./NonWLHomePage";

interface Props {}

const HomePage = (props: Props) => {
  const [policeCollapsable, setpoliceCollapsable] = useState(false);
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
                  {/* DUYURU START */}
                  <div className="mainpage-subcontent shadow-md">
                    <div className="mainpage-subcontent-header">
                      <h1 className="text-base font-semibold">Duyuru Başlığı</h1>
                    </div>
                    <div>
                      <p className="m-0 p-0 text-xs font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a condimentum nisl, ullamcorper
                        pharetra diam. Sed velit justo, scelerisque id vulputate commodo, laoreet a arcu. Nulla non dui volutpat,
                        viverra.
                      </p>
                    </div>
                  </div>
                  {/* DUYURU END */}

                  {/* DUYURU START */}
                  <div className="mainpage-subcontent shadow-md">
                    <div className="mainpage-subcontent-header">
                      <h1 className="text-base font-semibold">Duyuru Başlığı</h1>
                    </div>
                    <div>
                      <p className="m-0 p-0 text-xs font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a condimentum nisl, ullamcorper
                        pharetra diam. Sed velit justo, scelerisque id vulputate commodo, laoreet a arcu. Nulla non dui volutpat,
                        viverra.
                      </p>
                    </div>
                  </div>
                  {/* DUYURU END */}
                  {/* DUYURU START */}
                  <div className="mainpage-subcontent shadow-md">
                    <div className="mainpage-subcontent-header">
                      <h1 className="text-base font-semibold">Duyuru Başlığı</h1>
                    </div>
                    <div>
                      <p className="m-0 p-0 text-xs font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a condimentum nisl, ullamcorper
                        pharetra diam. Sed velit justo, scelerisque id vulputate commodo, laoreet a arcu. Nulla non dui volutpat,
                        viverra.
                      </p>
                    </div>
                  </div>
                  {/* DUYURU END */}
                </div>
              </div>
              <div className="mainpage-maincontent shadow-md col-6  px-4 py-3">
                <div className="mainpage-maincontent-header">
                  <h1 className="text-2xl font-semibold">Oyuncu Listesi</h1>
                </div>
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
