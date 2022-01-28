import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../redux/types";
import { LogOff as ResolverLogOff } from "../redux/resolvers/userResolver";
import NonWLSidebar from "./NonWLSidebar";
import Collapsable from "./SidebarCollapsable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faUsers,
  faHouseUser,
  faUserNurse,
  faUserNinja,
  faUserTie,
  faHome,
  faQuestionCircle,
  faInfo,
  faEnvelope,
  faUserCog,
  faSignOutAlt,
  faChevronDown,
  faChevronLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUser,
  faChevronDown,
  faChevronLeft,
  faUsers,
  faHouseUser,
  faUserNurse,
  faUserNinja,
  faUserTie,
  faHome,
  faQuestionCircle,
  faInfo,
  faEnvelope,
  faUserCog,
  faSignOutAlt,
  faPaperPlane
);

interface Props {}

const Sidebar = (props: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user: User = useSelector((state) => state);
  const actionLogoff = React.useCallback(() => dispatch(ResolverLogOff()), [dispatch]);

  const [policeCollapsable, setpoliceCollapsable] = useState(false);

  const LogOff = () => {
    axios.delete("logoff").then((res) => {
      actionLogoff();
    });
  };
  return (
    <div>
      {/* SIDEBAR BAŞLANGIÇ */}
      <div className="sidebar-wrapper mr-7 shadow-lg  select-none">
        <div className="sidebar-container px-3 py-4">
          <div className="sidebar-header">
            <Link to={"/"} className="text-xl no-underline font-medium button sidebar-header-button">
              Third Life
            </Link>
          </div>
          <div className="sidebar-body">
            {/* CATEGORY BAŞLANGIÇ */}
            <div className="sidebar-body">
              <div className="sidebar-category">
                <p className="text-md opacity-80 font-semibold mb-0 sidebar-category-header">Genel</p>
                <div className="sidebar-category-list flex flex-col">
                  <span className="flex">
                    <FontAwesomeIcon className="sidebar-icon" icon={["fas", "home"]} size="xs" />
                    <Link to={"/"} className="sidebar-category-item">
                      Anasayfa
                    </Link>
                  </span>
                  <span className="flex">
                    <FontAwesomeIcon className="sidebar-icon" icon={["fas", "users"]} size="xs" />
                    <a className="sidebar-category-item">Yönetim Ekibi</a>
                  </span>
                  <span className="flex">
                    <FontAwesomeIcon className="sidebar-icon" icon={["fas", "envelope"]} size="xs" />
                    <a className="sidebar-category-item">Ticket</a>
                  </span>
                </div>
              </div>
            </div>
            {/* CATEGORY BİTİŞ */}
            {/* CATEGORY BAŞLANGIÇ */}
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0 sidebar-category-header">Oyun İçi</p>
              <div className="sidebar-category-list flex flex-col">
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user"]} size="xs" />
                  <a className="sidebar-category-item">Karakterim</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "users"]} size="xs" />
                  <a className="sidebar-category-item">Karakterim</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user-ninja"]} size="xs" />
                  <a className="sidebar-category-item">Oluşumlar</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user-tie"]} size="xs" />
                  <Collapsable title="Polis Departmanı" linkTo="/" categories={[{ title: "Departman Yönergesi", linkTo: "/" }]} />
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user-nurse"]} size="xs" />
                  <a className="sidebar-category-item">Hastane</a>
                </span>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0 sidebar-category-header">Başvuru</p>
              <div className="sidebar-category-list flex flex-col">
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "paper-plane"]} size="xs" />
                  <a className="sidebar-category-item">Karakter Başvurusu</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "paper-plane"]} size="xs" />
                  <a className="sidebar-category-item">Birlik Başvurusu</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "paper-plane"]} size="xs" />
                  <a className="sidebar-category-item">Rol Başvurusu</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "paper-plane"]} size="xs" />
                  <a className="sidebar-category-item">Rol Ekibi Başvurusu</a>
                </span>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="text-md opacity-80 font-semibold mb-0 sidebar-category-header">Diğer</p>
              <div className="sidebar-category-list flex flex-col">
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "question-circle"]} size="xs" />
                  <a className="sidebar-category-item">Sıkça Sorulanlar</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "info"]} size="xs" />
                  <a className="sidebar-category-item">İletişim</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user-cog"]} size="xs" />
                  <a className="sidebar-category-item">Ayarlar</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "sign-out-alt"]} size="xs" />
                  <a className="sidebar-category-item" onClick={() => LogOff()}>
                    Çıkış Yap
                  </a>
                </span>
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
