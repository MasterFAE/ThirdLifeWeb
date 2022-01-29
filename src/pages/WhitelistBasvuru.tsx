import React from "react";
import { Link } from "react-router-dom";
import NonWLSidebar from "../components/NonWLSidebar";

type Props = {};

const WhitelistBasvuru = (props: Props) => {
  return (
    <main className="main-wrapper flex">
      <NonWLSidebar />
      <div className="container mainpage-wrapper">
        <div className="mainpage-container">
          <div className="flex col-12 pt-2">
            <div className="mainpage-maincontent shadow-md text-center col-12 px-4 pb-4">
              <h1 className="mt-4">Uyarı</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper ipsum augue, a facilisis arcu porttitor
                tempus. Curabitur a dignissim dolor. Praesent nunc mi, maximus quis viverra at, vehicula nec elit. Suspendisse
                dapibus mattis sem, ac viverra neque. Curabitur accumsan odio id vulputate pharetra. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dapibus dignissim lacus, quis dapibus orci
                facilisis eget.
              </p>
              <p>
                Duis nec sem vitae metus rhoncus euismod a quis tellus. Maecenas at mi nec purus commodo placerat in vitae eros.
                Sed et mattis velit, vel pharetra metus. Duis non rutrum nibh. Etiam viverra velit libero, sit amet venenatis
                lorem porttitor vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Vestibulum eleifend a libero et commodo. Quisque laoreet scelerisque erat, eget elementum mauris maximus ut. Duis
                ultrices dolor turpis, eget elementum diam cursus quis. Vivamus dictum magna eu velit posuere sagittis. Praesent
                vulputate est non neque fringilla posuere. Donec dapibus lectus libero, nec tristique lectus maximus id.
                Vestibulum quis est ac mauris ullamcorper auctor a eu dui. Phasellus eget arcu quis mi luctus porttitor sit amet
                in turpis. Integer porta aliquam nulla ut sagittis. In vulputate justo sed leo bibendum viverra. Aenean sit amet
                tortor ut sapien varius consequat. Suspendisse potenti.
              </p>
              <p>
                Sed dui mi, fringilla id dolor ac, euismod tincidunt eros. Duis mauris diam, ultrices sit amet pharetra nec,
                elementum non tellus. Maecenas felis massa, eleifend eu magna in, rhoncus dignissim turpis. Aenean a laoreet
                magna, quis vehicula est. Duis eget turpis faucibus erat mattis sodales quis a est. Duis at augue tortor. Donec
                vitae urna id sapien consectetur bibendum. Nunc libero libero, varius vel massa in, elementum rutrum sapien.
                Quisque elementum, libero nec lacinia faucibus, velit leo tempus dui, in ornare ex arcu vitae turpis. Praesent
                varius arcu at tellus tempus ultricies. Etiam nec eros ut ex rutrum tempor. Maecenas mi tortor, malesuada ac
                imperdiet sit amet, pulvinar nec velit. In libero nisi, auctor eget elit at, maximus pharetra est. Phasellus sem
                augue, pretium tempus mauris ut, pellentesque gravida tellus. Nunc sagittis ut neque ac sodales.
              </p>
              <Link to={"/whitelist-exam"} className="login-button col-4 mt-4 mb-8 btn btn-outline-primary">
                Başvuru Yap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhitelistBasvuru;
