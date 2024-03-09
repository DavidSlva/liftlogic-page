import React from "react";
import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { Metadata } from "next";
// import { Title } from 'antd/es/typography';
export const metadata: Metadata = {
  title: "Sobre Nosotros - LIFT LOGIC",
  description:
    "Conoce más sobre Lift Logic y STIL, nuestra historia, compromiso, y cómo innovamos en soluciones tecnológicas para empresas de servicio.",
  keywords:
    "Lift Logic, STIL, innovación tecnológica, soluciones tecnológicas, historia, compromiso",
};
export default function Inicio() {
  return (
    <>
      <Row className="h-full pb-2" gutter={10}>
        <Col span={12}>
          <Card className="!h-full !border-none overflow-auto" hoverable>
            {/* Contenido de la tarjeta izquierda */}
            <div>
              <Title level={2}>Sobre Nosotros</Title>
              <Title level={4}>Nuestra Historia</Title>
              <p>
                <span className=" font-bold">Lift Logic</span> y{" "}
                <span className=" font-bold">STIL</span> (Sociedad de Tecnología
                e Innovación Limitada) nació hace dos años con una misión clara:
                facilitar la administración y operatividad de las empresas de
                servicio a través de soluciones tecnológicas innovadoras. Desde
                nuestros inicios, hemos estado en la vanguardia de la creación
                de aplicaciones de todo tipo, siempre con el objetivo de
                optimizar los procesos y mejorar la experiencia tanto de
                nuestros clientes como de sus usuarios finales.
              </p>
              <Title level={4}>Nuestro Compromiso</Title>
              <p>
                En <span className=" font-bold">Lift Logic</span> y{" "}
                <span className=" font-bold">STIL</span>, estamos dedicados a la
                excelencia y a la búsqueda constante de innovación. Nos
                enorgullecemos de nuestro enfoque proactivo para resolver los
                desafíos que enfrentan nuestros clientes y estamos comprometidos
                a superar sus expectativas. Con LiftLogic, su gestión de
                servicios no solo alcanzará un nuevo nivel: la transformará por
                completo.
              </p>
            </div>
          </Card>
        </Col>

        <Col span={12}>
          <Row className="h-1/2 pb-2">
            <Col span={24}>
              <Card className="!h-full !border-none overflow-auto" hoverable>
                {/* Contenido de la primera tarjeta derecha */}
                <div>
                  <Title level={4}>Nuestras Aplicaciones</Title>
                  <Title level={5}>LiftLogic App</Title>
                  <p>
                    <span className=" font-bold">LiftLogic</span> es más que una
                    aplicación; es una revolución en la gestión y el
                    mantenimiento de ascensores. Diseñada para administradores y
                    técnicos, esta herramienta se ha convertido en un elemento
                    indispensable en el sector. Con funcionalidades que incluyen
                    la gestión integral de clientes, seguimiento en tiempo real
                    del estado de los ascensores y generación automática de
                    presupuestos, LiftLogic no solo promete, sino que entrega
                    una eficiencia y confiabilidad sin precedentes.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="h-1/2">
            <Col span={24}>
              <Card className="!h-full !border-none overflow-auto" hoverable>
                {/* Contenido de la segunda tarjeta derecha */}
                <div>
                  <Title level={5}>Smart Bolus Calculator</Title>
                  <p>
                    Entendemos los retos que enfrentan las personas con
                    diabetes, y por eso hemos desarrollado Smart Bolus
                    Calculator. Esta aplicación es una calculadora de bolus de
                    insulina intuitiva y fácil de usar, diseñada para ayudar a
                    los usuarios a gestionar su salud diaria de manera más
                    efectiva.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
