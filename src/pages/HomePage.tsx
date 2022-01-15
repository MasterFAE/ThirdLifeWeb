import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../css/HomePage.css";

interface Props {}

const HomePage = (props: Props) => {
  const [policeCollapsable, setpoliceCollapsable] = useState(false);
  return (
    <main className="main-wrapper flex">
      <Sidebar />
      <div className="container mainpage-wrapper">
        <div className="mainpage-header ">
          <h1> Anasayfa </h1>
        </div>
        <div className="mainpage-container">
          <div className="flex flex-wrap flex-md-wrap col-12">
            <div className="mainpage-head-contentitem col-3 shadow-md">
              <div className="px-4">
                <p className="text-lg font-semibold py-3 mb-0">Şehir Ekonomisi</p>
                <p className="text-lg font-semibold">$11.763.987,000</p>
                <div className="mainpage-head-content-subitem">
                  <ul className="list-none p-0 my-2">
                    <p className="text-xs m-0 font-medium">Enflasyon -14.8%</p>
                    <p className="text-xs m-0 font-medium">İşsizlik -12.4%</p>
                    <p className="text-xs m-0 font-medium">Araç sayısı 432</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mainpage-head-contentitem col-2 shadow-md">
              <div className="px-4">
                <p className="text-lg font-semibold py-3 mb-0">Suç İstatistiği</p>
                <p className="text-lg font-semibold">4623 kayıtlı suç</p>
                <div className="mainpage-head-content-subitem">
                  <ul className="list-none p-0 my-2">
                    <p className="text-xs m-0 font-medium">Büyük Suç Sayısı -14.2%</p>
                    <p className="text-xs m-0 font-medium">Küçük Suç Sayısı +15.3%</p>
                    <p className="text-xs m-0 font-medium">Ölüm Oran -11.4%</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mainpage-head-contentitem col-2 shadow-md">
              <div className="px-4">
                <p className="text-lg font-semibold py-3 mb-0">Genel İstatistik</p>
                <p className="text-lg font-semibold">4623 veri</p>
                <div className="mainpage-head-content-subitem">
                  <ul className="list-none p-0 my-2">
                    <p className="text-xs m-0 font-medium">28.7% oranla büyüme</p>
                    <p className="text-xs m-0 font-medium">15.5% enflasyon</p>
                    <p className="text-xs m-0 font-medium">12.7% işsizlik</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mainpage-head-contentitem col-2 shadow-md">
              <div className="px-4">
                <p className="text-lg font-semibold py-3 mb-0">Genel İstatistik</p>
                <p className="text-lg font-semibold">4623 veri</p>
                <div className="mainpage-head-content-subitem">
                  <ul className="list-none p-0 my-2">
                    <p className="text-xs m-0 font-medium">28.7% oranla büyüme</p>
                    <p className="text-xs m-0 font-medium">15.5% enflasyon</p>
                    <p className="text-xs m-0 font-medium">12.7% işsizlik</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex col-12">
            <div className="mainpage-maincontent shadow-md col-6  px-4 py-3">
              <div className="mainpage-maincontent-header">
                <h1 className="text-2xl font-semibold">Duyurular</h1>
              </div>
              <div className="mainpage-maincontent-container">
                {/* DUYURU START */}
                <div className="mainpage-duyuru shadow-md">
                  <div className="mainpage-duyuru-header">
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
                <div className="mainpage-duyuru shadow-md">
                  <div className="mainpage-duyuru-header">
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
                <div className="mainpage-duyuru shadow-md">
                  <div className="mainpage-duyuru-header">
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
};

export default HomePage;
