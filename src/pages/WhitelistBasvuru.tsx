import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NonWLSidebar from "../components/NonWLSidebar";
import { User } from "../redux/types";

type Props = {};

const WhitelistBasvuru = (props: Props) => {
  const [CanApply, setCanApply] = useState(0);
  const [Error, setError] = useState<any>(null);
  const [Status, setStatus] = useState<any>(null);
  const { result } = useParams();

  useEffect(() => {
    if (result) {
      if (result === "basarili") {
        setStatus("Mülakata hak kazandın, lütfen discord sunucusunda mülakat kanalını kontrol edin");
      } else if (result === "basarisiz") {
        setError("Başvurun reddedildi.");
      }
    }
    axios
      .post("/whitelist-basvuru-kontrol")
      .then((result) => {
        // @ts-ignore
        setCanApply(result.data.canApply);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <main className="container-fluid main-wrapper flex">
      <NonWLSidebar />
      <div className="mainpage-wrapper ">
        {Error && (
          <div className="alert alert-danger mb-2 mt-4 p-0" id="error-alert" role="alert">
            <p className="font-semibold text-center h-full w-full break-words p-1 mb-0 overflow-hidden">{Error}</p>
          </div>
        )}
        {Status && (
          <div className="alert alert-success mb-2 mt-4 p-0" id="status-alert" role="alert">
            <p className="font-semibold text-center h-full w-full break-words p-1 mb-0 overflow-hidden">{Status}</p>
          </div>
        )}
        <div className={"mainpage-container flex pb-8 mt-4"}>
          <div className="mainpage-maincontent shadow-md text-center px-4 ">
            <h1 className="mt-4">Uyarı</h1>
            <p className="text-left">
              ⭐ <b>Merhaba, whitelist formunu doldurmak üzeresiniz lütfen buradaki bilgileri dikkatlice okuyun.</b>
              <br />⭐ Toplamda 15 soru cevaplamanız gerekmektedir.
              <b>14+ doğruya ulaşırsanız mülakata hak kazanmış olursunuz.</b>
              <br />⭐ Sorular <b>genel rol bilgisini</b> sınayacak şekilde oluşturulmuştur.
              <br />
              ⭐ Sunucunun ARCADE-RP olması vereceğiniz cevapları etkilememelidir.
              <br />
              ⭐ Sorularda parantez içerisindeki bilgilere dikkat ederek soruları cevaplandırmanız gerekmektedir.
              <br />
              ⭐ İşaretleme sırasında yapacağınız bir hatanın geri dönüşü yoktur, dikkatli olunuz.
              <br />
              <b>⭐ Form bitiminde mülakat permi alıp alamayacağınız belli olur ve discord kanalında mülakat permi alırsınız.</b>
            </p>

            {CanApply === 1 ? (
              <Link to={"/whitelist-exam"} className="login-button col-12 my-4 btn btn-outline-primary ">
                Başvuru Yap
              </Link>
            ) : (
              <a className="danger-button col-12  my-4 btn btn-danger ">Başvuru hakkı doldu</a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhitelistBasvuru;
