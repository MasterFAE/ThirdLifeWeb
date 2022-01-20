import React, { useState } from "react";
import "../css/HomePage.css";

interface Props {}

const Sidebar = (props: Props) => {
  const [policeCollapsable, setpoliceCollapsable] = useState(false);

  return (
    <div>
      {/* SIDEBAR BAŞLANGIÇ */}
      <div className="sidebar-wrapper mr-7 shadow-md">
        <div className="sidebar-container p-4">
          <div className="sidebar-header">
            <a className="text-xl no-underline text-black font-medium">Third Life</a>
          </div>
          <div className="sidebar-body">
            {/* CATEGORY BAŞLANGIÇ */}
            <div className="sidebar-body">
              <div className="sidebar-category">
                <p className="text-md opacity-80 font-semibold mb-0">Genel</p>
                <div className="sidebar-category-list flex flex-col">
                  <a className="sidebar-category-item">Anasayfa</a>
                  <a className="sidebar-category-item">Yönetim Ekibi</a>
                  <a className="sidebar-category-item">Ticket</a>
                </div>
              </div>
            </div>
            {/* CATEGORY BİTİŞ */}
            {/* CATEGORY BAŞLANGIÇ */}
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0">Oyun İçi</p>
              <div className="sidebar-category-list flex flex-col">
                <a className="sidebar-category-item">Karakterim</a>
                <a className="sidebar-category-item">Karakterler</a>
                <a className="sidebar-category-item">Oluşumlar</a>
                <div className="sidebar-category-collapsible">
                  <div className="flex flex-row">
                    <a className="sidebar-category-item">Polis Departmanı</a>
                    <a
                      className="pl-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setpoliceCollapsable(!policeCollapsable);
                      }}></a>
                  </div>
                  {policeCollapsable && (
                    <div className="transition-transform">
                      <ul className="p-0 px-3 m-0 flex flex-col">
                        <a className="sidebar-category-subitem">Duyurular</a>
                        <a className="sidebar-category-subitem">Kadro</a>
                        <a className="sidebar-category-subitem">Birimler</a>
                        <a className="sidebar-category-subitem">Online İhbar</a>
                      </ul>
                    </div>
                  )}
                </div>
                <a className="sidebar-category-item">Hastane</a>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0">Başvuru</p>
              <div className="sidebar-category-list flex flex-col">
                <a className="sidebar-category-item">Alt Karakter Başvurusu</a>
                <a className="sidebar-category-item">Birlik Başvurusu</a>
                <a className="sidebar-category-item">Rol Başvurusu</a>
                <a className="sidebar-category-item">Rol Ekibi Başvurusu</a>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0">Diğer</p>
              <div className="sidebar-category-list flex flex-col">
                <a className="sidebar-category-item">Sıkça Sorulanlar</a>
                <a className="sidebar-category-item">İletişim</a>
                <a className="sidebar-category-item">Ayarlar</a>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
        </div>
      </div>
      {/* SIDEBAR BİTİŞ */}
    </div>
  );
};

export default Sidebar;
