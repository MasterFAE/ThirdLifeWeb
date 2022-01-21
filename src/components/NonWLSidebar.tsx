import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { LogOff as ResolverLogOff } from "../redux/resolvers/userResolver";

type Props = {};

const NonWLSidebar = (props: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const actionLogoff = React.useCallback(() => dispatch(ResolverLogOff()), [dispatch]);
  const LogOff = () => {
    axios.delete("logoff").then((res) => {
      actionLogoff();
    });
  };
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
          </div>
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0">Başvuru</p>
              <div className="sidebar-category-list flex flex-col">
                <Link to={"/whitelist-basvuru"} className="sidebar-category-item">
                  Karakter Başvurusu
                </Link>
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
                <a className="sidebar-category-item" onClick={() => LogOff()}>
                  Çıkış Yap
                </a>
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

export default NonWLSidebar;
