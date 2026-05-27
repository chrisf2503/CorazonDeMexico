import { useState } from "react";
import formStyle from "../CSS/form.module.css";
import emailjs from '@emailjs/browser';
function Form(){
    const [formValue, setFormValue] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    );
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("");

    const validateName = (name) => {
        if (name.length <= 3) return "Name must be more than 3 characters.";
        if (!name.includes(" ")) return "Name must include a space for first and last name.";
        return "";
    };

    const validateEmail = (email) => {
        if (!email.includes("@") || !email.includes(".")) return "Email must contain '@' and '.'.";
        return "";
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
        if (!phoneRegex.test(phone)) return "Phone number must be valid (at least 10 digits, can include spaces, dashes, parentheses).";
        return "";
    };

    const validateMessage = (message) => {
        if (message.length <= 30) return "Message must be more than 30 characters.";
        return "";
    };

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValue((prev) => ({...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus("");
        
        const nameError = validateName(formValue.name);
        const emailError = validateEmail(formValue.email);
        const phoneError = validatePhone(formValue.phone);
        const messageError = validateMessage(formValue.message);
        
        const newErrors = {
            name: nameError,
            email: emailError,
            phone: phoneError,
            message: messageError,
        };
        
        setErrors(newErrors);
        
        // Check if any errors
        if (nameError || emailError || phoneError || messageError) {
            return; // Don't submit
        }
        
        // Send email via EmailJS
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formValue, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                setSubmitStatus('Email sent successfully!');
                setFormValue({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setErrors({});
            })
            .catch(() => {
                setSubmitStatus('Failed to send email. Please try again.');
            });
    };
    return (
        <div className={formStyle.form_container}>
            <form className={formStyle.form} onSubmit={handleSubmit}>
                <h2 className={formStyle.title}>Contáctanos</h2>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label htmlFor="name" className={formStyle.name}>Nombre Completo</label>
                    </div>
                    <input 
                    id="name"
                    className={formStyle.value}
                    type="text"
                    name="name" 
                    value={formValue.name} 
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                    autoComplete="name"
                    required
                    />
                    {errors.name && <div className={formStyle.error}>{errors.name}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label htmlFor="email" className={formStyle.name}>Correo Electrónico</label>
                    </div>
                    <input 
                    id="email"
                    className={formStyle.value}
                    type="email"
                    name="email" 
                    value={formValue.email} 
                    onChange={handleChange}
                    placeholder="Ingresa tu correo electrónico"
                    autoComplete="email"
                    required
                    />
                    {errors.email && <div className={formStyle.error}>{errors.email}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label htmlFor="phone" className={formStyle.name}>Número Telefónico</label>
                    </div>
                    <input 
                    id="phone"
                    className={formStyle.value}
                    type="tel"
                    name="phone" 
                    value={formValue.phone} 
                    onChange={handleChange}
                    placeholder="Ingresa tu número telefónico"
                    autoComplete="tel"
                    required
                    />
                    {errors.phone && <div className={formStyle.error}>{errors.phone}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label htmlFor="message" className={formStyle.name}>Mensaje</label>
                    </div>
                    <textarea 
                    id="message"
                    className={formStyle.value2}
                    name="message" 
                    value={formValue.message} 
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu evento"
                    required
                    />
                    {errors.message && <div className={formStyle.error}>{errors.message}</div>}
                </div>
                <button type="submit" className={formStyle.submit} aria-label="Enviar formulario de contacto">
                    Enviar
                </button>
                {submitStatus && <div className={formStyle.status}>{submitStatus}</div>}
            </form>
        </div>
    )
}
export default Form;
