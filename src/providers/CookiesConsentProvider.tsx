"use client";
import { ConsentState, consentTypes } from "@/types/CookiesConsent";
import { notification } from "antd";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface CookiesConsentContextType {
  consent: ConsentState;
  handleConsent: (type: consentTypes, value: boolean) => void;
  setAllContents: (value: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openCookies: () => void;
  saveConsent: () => void;
  closeCookies: () => void;
  open: boolean;
  banner: boolean;
  handleBanner: (value: boolean) => void;
}

const CookiesConsentContext = createContext<CookiesConsentContextType>(
  {} as CookiesConsentContextType
);

interface Props extends PropsWithChildren {}

const CookiesConsentProvider = ({ children }: Props) => {
  const loadInitialConsent = () => {
    if (typeof window !== "undefined") {
      const storedConsent = localStorage.getItem("cookiesConsent");
      if (storedConsent) {
        // Consentimiento encontrado, por lo tanto, el banner no se debería mostrar inicialmente
        return { consent: JSON.parse(storedConsent), banner: false };
      }
    }
    // No se encontró consentimiento, mostrar el banner
    return {
      consent: {
        analyticsCookies: true,
        advertisingCookies: true,
        functionalCookies: true,
      },
      banner: true, // Mostrar banner ya que no hay consentimiento almacenado
    };
  };

  // Cargar tanto el consentimiento como el estado inicial del banner
  const initialLoad = loadInitialConsent();
  const [consent, setConsent] = useState<ConsentState>(initialLoad.consent);
  const [banner, setBanner] = useState<boolean>(initialLoad.banner);

  const [open, setOpen] = useState(false);
  const saveConsent = useCallback(() => {
    localStorage.setItem("cookiesConsent", JSON.stringify(consent));
    // notification.success({
    //   message: "Consentimiento guardado",
    //   description: JSON.stringify(consent),
    // });
  }, [consent]);

  const handleBanner = (value: boolean) => {
    setBanner(value);
  };

  const setAllContents = (value: boolean) => {
    setConsent({
      analyticsCookies: value,
      advertisingCookies: value,
      functionalCookies: value,
    });
  };

  const handleConsent = (type: consentTypes, value: boolean) => {
    setConsent((prev) => ({ ...prev, [type]: value }));
    saveConsent();
  };

  const acceptAll = () => {
    setAllContents(true);
    closeCookies();
    handleBanner(false);
    saveConsent();
  };
  const rejectAll = () => {
    setAllContents(false);
    closeCookies();
    handleBanner(false);
    saveConsent();
  };

  // Abrir y cerrar Settings de cookies
  const openCookies = () => setOpen(true);
  const closeCookies = () => setOpen(false);

  return (
    <CookiesConsentContext.Provider
      value={{
        consent,
        handleConsent,
        setAllContents,
        acceptAll,
        rejectAll,
        openCookies,
        closeCookies,
        open,
        banner,
        handleBanner,
        saveConsent,
      }}
    >
      {children}
    </CookiesConsentContext.Provider>
  );
};

export default CookiesConsentProvider;

export const useCookiesConsent = () => useContext(CookiesConsentContext);
