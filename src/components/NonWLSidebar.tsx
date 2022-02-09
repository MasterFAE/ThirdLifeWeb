import "../css/HomePage.css";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { LogOff as ResolverLogOff } from "../redux/resolvers/userResolver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBook,
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
        <div className="sidebar-container px-3 py-4">
          <div className="sidebar-header">
            <Link to={"/"} className="text-xl no-underline font-medium sidebar-header-button">
              Third Life
            </Link>
          </div>
          <div className="sidebar-body">
            {/* CATEGORY BAŞLANGIÇ */}
            <div className="sidebar-body">
              <div className="sidebar-category">
                <p className="sidebar-category-header text-md opacity-80 font-semibold mb-0 ">Genel</p>
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
                  <span className="flex">
                    <FontAwesomeIcon className="sidebar-icon" icon={["fas", "book"]} size="xs" />
                    <Link to={"/kurallar"} className="sidebar-category-item">
                      Kurallar
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* CATEGORY BİTİŞ */}
          </div>
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="sidebar-category-header text-md opacity-80 font-semibold mb-0">Başvuru</p>
              <div className="sidebar-category-list flex flex-col">
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "user-plus"]} size="xs" />
                  <Link to={"/whitelist-basvuru"} className="sidebar-category-item">
                    Karakter Başvurusu
                  </Link>
                </span>
              </div>
            </div>
          </div>
          {/* CATEGORY BİTİŞ */}
          {/* CATEGORY BAŞLANGIÇ */}
          <div className="sidebar-body">
            <div className="sidebar-category">
              <p className="sidebar-category-header text-md opacity-80 font-semibold mb-0">Diğer</p>
              <div className="sidebar-category-list flex flex-col">
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "question-circle"]} size="xs" />
                  <a className="sidebar-category-item">Sıkça Sorulanlar</a>
                </span>
                <span className="flex">
                  <FontAwesomeIcon className="sidebar-icon" icon={["fas", "info"]} size="xs" />
                  <a className="sidebar-category-item ml-1">İletişim</a>
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

export default NonWLSidebar;
