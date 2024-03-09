"use client";
import React, { useState } from "react";
import { Form, Input, Button, Select, Card, notification } from "antd";
import Title from "antd/es/typography/Title";

const { Option } = Select;

export default function Contactanos() {
  const [form] = Form.useForm();

  // Function to handle form submission
  const onFinish = (values: string) => {
    // This is where you would handle submitting the form to your backend or API
    console.log("Received values of form: ", values);
    notification.success({
      message: "Formulario Enviado",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    });
    form.resetFields();
  };

  return (
    <Card className=" mt-10 !mx-auto p-6  shadow-md hover:shadow-lg w-3/4 md:w-1/2 ">
      <Title level={2} className="text-center">
        Contáctanos
      </Title>
      <p className=" mb-4  text-base">
        Completa el formulario con tus datos. Puedes dejarnos tu correo
        electrónico, tu número de WhatsApp o ambos. La comunicación a través de
        WhatsApp podría ser más expedita. Nos comunicaremos contigo para
        entender mejor tus necesidades y ofrecerte la mejor solución.
      </p>
      <Form
        form={form}
        name="contact"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mt-4"
      >
        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            {
              type: "email",
              message: "Por favor ingresa un correo electrónico válido",
            },
          ]}
        >
          <Input placeholder="tu@correo.com" />
        </Form.Item>

        <Form.Item label="Número de WhatsApp" name="whatsapp">
          <Input
            addonBefore={<span className="text-white">+</span>}
            placeholder="Número de teléfono con código de país"
          />
        </Form.Item>

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" className="px-10" block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
