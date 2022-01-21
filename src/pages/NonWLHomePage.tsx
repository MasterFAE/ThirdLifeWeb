import React from "react";
import NonWLSidebar from "../components/NonWLSidebar";

type Props = {};

const NonWLHomePage = (props: Props) => {
  return (
    <main className="main-wrapper flex">
      <NonWLSidebar />
      <div className="container mainpage-wrapper">
        <div className="mainpage-header ">
          <h1> Anasayfa </h1>
        </div>
        <div className="mainpage-container">
          <div className="flex flex-wrap flex-md-wrap text-center col-12">
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
          </div>
          <div className="flex col-12">
            <div className="mainpage-maincontent shadow-md col-10  px-4 py-3">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default NonWLHomePage;
