'use client';
import { useState } from 'react';
import { z } from 'zod';
//import Menu from '../menu';
import Footer from '../footer/footer';


const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      const validatedData = contactFormSchema.parse(formData);
      console.log('Form data:', validatedData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof ContactFormData;
          formattedErrors[path] = err.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}