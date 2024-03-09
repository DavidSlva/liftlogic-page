import { useCookiesConsent } from "@/providers/CookiesConsentProvider";
import { SettingOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useEffect, useState } from "react";

const CookieConsentBanner = () => {
  const { acceptAll, openCookies, banner } = useCookiesConsent();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este código se ejecuta solo en el cliente
    setIsClient(true);
  }, []);

  // Renderiza el componente solo cuando isClient es true
  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`z-10 fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center space-x-2 transition-transform duration-500 ${
        banner ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-black">
          Consentimiento de Cookies
        </h2>
        <p className="text-black">
          Utilizamos cookies propias y de terceros para mostrarte contenido más
          relevante en función de tu navegación y tu historial de navegación.
          Acepte o administre su configuración de cookies a continuación.
        </p>
      </div>
      <div className="flex space-x-2">
        <Button type="primary" onClick={() => acceptAll()}>
          Aceptar Todas
        </Button>
        <Button
          className=" !text-black"
          onClick={() => openCookies()}
          icon={<SettingOutlined />}
        >
          Configurar
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
