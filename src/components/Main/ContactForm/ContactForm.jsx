import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../../utils/constants";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef();
  const onSubmit = async () => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
    >
      <h3 className="contact-form__title">
        function{" "}
        <span className="highlighted-text-shadow">inviteAnInterview</span>
        () =
      </h3>
      <div className="contact-form__group-wrapper">
        <div className="contact-form__group mb-4">
          <label htmlFor="name" className="contact-form__label">
            Имя:
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Пожалуйста, введите ваше имя" })}
            className="contact-form__input form-control"
            autoComplete="off"
          />
          {errors.name && (
            <div className="contact-form__error-message">
              {errors.name.message}
            </div>
          )}
        </div>
        <div className="contact-form__group mb-4">
          <label htmlFor="email" className="contact-form__label">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "Пожалуйста, введите вашу почту",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный email-адрес",
              },
            })}
            className="contact-form__input form-control"
          />
          {errors.email && (
            <div className="contact-form__error-message">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="contact-form__group mb-4">
          <label htmlFor="phone" className="contact-form__label">
            Телефон:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            {...register("phone", {
              required: "Пожалуйста, введите ваш номер телефона",
              pattern: {
                value: /^\d{10}$/, // пример простого паттерна для номера из 10 цифр
                message: "Некорректный номер телефона",
              },
            })}
            className="contact-form__input form-control"
          />
          {errors.phone && (
            <div className="contact-form__error-message">
              {errors.phone.message}
            </div>
          )}
        </div>
        <div className="contact-form__group mb-4">
          <label htmlFor="message" className="contact-form__label">
            Сообщение:
          </label>
          <textarea
            id="message"
            name="message"
            {...register("message", {
              required: "Пожалуйста, введите ваше сообщение",
            })}
            className="contact-form__input form-control"
            rows="3"
          ></textarea>
          {errors.message && (
            <div className="contact-form__error-message">
              {errors.message.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="contact-form__submit-btn btn btn-primary"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
