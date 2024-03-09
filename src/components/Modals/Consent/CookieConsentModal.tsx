"use client";
import React from "react";
import { Modal, Button } from "antd";
import ConsentTabs from "./ConsentTabs";
import { useCookiesConsent } from "@/providers/CookiesConsentProvider";

const CookieConsentModal = () => {
  const {
    open,
    openCookies,
    closeCookies,
    rejectAll,
    handleConsent,
    saveConsent,
    consent,
    handleBanner,
  } = useCookiesConsent();

  return (
    <Modal
      title={
        <span className="text-black">Centro de Preferencias de Cookies</span>
      }
      open={open}
      onOk={openCookies}
      onCancel={closeCookies}
      width={1000}
      footer={[
        <Button key="back" onClick={rejectAll}>
          <span className="text-black">Rechazar Todas</span>
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            saveConsent();
            closeCookies();
            handleBanner(false);
          }}
        >
          Aceptar
        </Button>,
      ]}
    >
      <ConsentTabs
        handleAnalytics={(value) => handleConsent("analyticsCookies", value)}
        handleAdvertising={(value) =>
          handleConsent("advertisingCookies", value)
        }
        consent={consent}
        handleFunctional={(value) => handleConsent("functionalCookies", value)}
      />
    </Modal>
  );
};

export default CookieConsentModal;
