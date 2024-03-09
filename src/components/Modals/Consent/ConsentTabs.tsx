import { ConsentState } from "@/types/CookiesConsent";
import { Switch, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";
interface Props {
  handleAnalytics: (_constent: boolean) => void;
  handleAdvertising: (_constent: boolean) => void;
  handleFunctional: (_constent: boolean) => void;
  consent: ConsentState;
}
const ConsentTabs = ({
  handleAnalytics,
  handleAdvertising,
  handleFunctional,
  consent,
}: Props) => {
  const tabs = [
    {
      key: 1,
      title: "Tu Privacidad",
      content: (
        <>
          <p>
            Cuando visitas cualquier sitio web, es posible que se almacene o
            recupere información en tu navegador, principalmente en forma de
            cookies. Esta información puede ser sobre ti, tus preferencias o tu
            dispositivo y se utiliza principalmente para que el sitio funcione
            como se espera. La información no suele identificarte directamente,
            pero puede ofrecerte una experiencia web más personalizada.
          </p>{" "}
          <p>
            Respetamos tu derecho a la privacidad, por lo que puedes optar por
            no permitir algunos tipos de cookies. Haz clic en los diferentes
            encabezados de categoría para obtener más información y cambiar
            nuestra configuración predeterminada. Sin embargo, bloquear algunos
            tipos de cookies puede afectar tu experiencia en el sitio y los
            servicios que podemos ofrecer.
          </p>
        </>
      ),
    },
    {
      key: 2,
      title: "Cookies Estrictamente Necesarias",
      content: (
        <>
          <p>Siempre activas</p>{" "}
          <p>
            Son aquellas cookies necesarias para garantizar que puedas acceder a
            nuestro sitio web y navegar por él de forma segura. Estas cookies
            son estrictamente necesarias, ya que el uso y acceso al sitio y los
            servicios proporcionados a través del sitio las requieren. También
            nos protegen de cualquier uso fraudulento del sitio o nuestros
            servicios, verifican que quien usa tu cuenta seas realmente tú y
            protegen tus datos de cualquier usuario no autorizado.
          </p>
        </>
      ),
    },
    {
      key: 3,
      title: "Cookies de análisis",
      content: (
        <div className="space-y-2">
          <div className="flex flex-row justify-between mb-2">
            <p className="w-fit">Opcional</p>
            <Switch
              checkedChildren="Activado"
              unCheckedChildren="Desactivado"
              onChange={(checked) => handleAnalytics(checked)}
              defaultChecked={true}
              checked={consent.analyticsCookies}
            />
          </div>
          <p>
            Son aquellas cookies utilizadas para el seguimiento, monitoreo y
            análisis de cómo navegas e interactúas con el sitio y nuestros
            servicios. Revelan tendencias de uso así como qué usuarios mejoran
            los servicios prestados por nosotros y cómo se hace. Puedes optar
            por bloquear o limitar la instalación y uso de estas cookies tal
            como se explica en este aviso y en nuestra Política de Cookies, y
            esto no deberá afectar la usabilidad o funcionalidades del sitio y/o
            los servicios.
          </p>
        </div>
      ),
    },
    {
      key: 4,
      title: "Cookies de Publicidad y Perfilado",
      content: (
        <div className="space-y-2">
          <div className="flex flex-row justify-between mb-2">
            <p className="w-fit">Opcional</p>
            <Switch
              checkedChildren="Activado"
              unCheckedChildren="Desactivado"
              onChange={(checked) => handleAdvertising(checked)}
              defaultChecked={true}
              checked={consent.analyticsCookies}
            />
          </div>
          <p>
            Son aquellas cookies destinadas a rastrear, monitorear y analizar
            cómo navegas e interactúas con el sitio y nuestros servicios, así
            como segmentar a nuestros usuarios en función de su comportamiento y
            cómo navegan en el sitio, y para construir audiencias. Revelan
            tendencias de uso, así como qué usuarios mejoran los servicios
            prestados por nosotros y cómo lo hacen. Todas esas acciones están
            destinadas a entender mejor a nuestros usuarios para mejorar las
            comunicaciones y estrategias de marketing. Puedes optar por bloquear
            o limitar la instalación y uso de estas cookies tal como se explica
            en este banner y en nuestra Política de Cookies, y esto no afectará
            la usabilidad o funcionalidades del sitio y/o los servicios.
          </p>
        </div>
      ),
    },
    {
      key: 5,
      title: "Cookies funcionales",
      content: (
        <div className="space-y-2">
          <div className="flex flex-row justify-between mb-2">
            <p className="w-fit">Opcional</p>
            <Switch
              checkedChildren="Activado"
              unCheckedChildren="Desactivado"
              onChange={(checked) => handleFunctional(checked)}
              defaultChecked={consent.functionalCookies}
            />
          </div>
          <p>
            Estas cookies permiten que el sitio web ofrezca una funcionalidad
            mejorada y personalización. Si no permites estas cookies, es posible
            que algunos o todos estos servicios no funcionen correctamente.
          </p>
        </div>
      ),
    },
  ];
  return (
    <Tabs defaultActiveKey="1" direction="ltr" tabPosition="left">
      {tabs.map((tab) => (
        <TabPane
          tab={<span className="text-black">{tab.title}</span>}
          key={tab.key}
        >
          <div className="text-black">{tab.content}</div>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default ConsentTabs;
