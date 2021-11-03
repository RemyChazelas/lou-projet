import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  #not-mail {
        display: none;
        
        @keyframes dongle {
          0% {
            transform: translate(0px, 0px);
          }
          10% {
            transform: translate(-10px, 0px);
          }
          20% {
            transform: translate(10px, 0px);
          }
          30% {
            transform: translate(-10px, 0px);
          }
          40% {
            transform: translate(10px, 0px);
          }
          50% {
            transform: translate(-10px, 0px);
          }
          60% {
            transform: translate(10px, 0px);
          }
          70% {
            transform: translate(-10px, 0px);
          }
          80% {
            transform: translate(10px, 0px);
          }
          90% {
            transform: translate(-10px, 0px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      }

      .form-message {
        opacity: 0;  
        font-size: 1.5rem;
        margin-top: 2rem;
      }
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    

    border-radius: 8px;
    margin-top: 1rem;
   
  }
  textarea {
    min-height: 250px;
    resize: vertical;
    box-shadow: inset 1px 1px 0px #0f0f0f,
            inset -1px -1px 0px #2d2d2d;
  }
  button[type='submit'] {
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    /* outline: none;
    border: none; */
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    transition: .5s ease;
    box-shadow: 1px 1px 0px #0f0f0f,
             -1px -1px 0px #2d2d2d;
  }
  button[type='submit']:hover{
    box-shadow: inset 1px 1px 0px #0f0f0f,
            inset -1px -1px 0px #2d2d2d;
      transition: .5s ease;

  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  }

  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = message;
    formMess.style.opacity = 1;


    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

  const successMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'merci ! je vous réponds rapidement';
    formMess.style.opacity = 1;

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = 0;
    }, 5000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_fqqhmzn", {
        name,
        email,
        message,
      });
    } else {
      failMessage('Veuillez remplir tous les champs correctement');
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_5boiahl", "template_fqqhmzn", variables)
      .then((res) => {
        successMessage();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.")
        }
      );
  };
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Votre Nom
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Votre Email
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Votre message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>Envoyer</button>
        <div className="form-message"></div>
      </FormStyle>
    </>
  );
}
