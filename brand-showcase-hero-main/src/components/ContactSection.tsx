import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/synchro.jpg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: `Subject: ${form.subject}\n\n${form.message}`.trim(),
      });
      if (error) throw error;
      toast.success("Thank you! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="min-h-[600px] grid grid-cols-1 lg:grid-cols-2">
      {/* Left image */}
      <div className="relative hidden lg:block">
        <img src={heroImg} alt="Atelier" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <h3 className="text-white font-display text-3xl font-bold mb-2">Atelier</h3>
          <p className="text-primary font-semibold text-lg">Where Craft Meets Engineering</p>
          <p className="text-white/70 mt-3 text-sm">Bhawani Peth, Pune · +91 93247 19780</p>
        </div>
      </div>

      {/* Right form */}
      <div className="bg-[#1a1a1a] flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
            Book An <span className="text-primary">Appointment</span>
          </h2>
          <div className="w-10 h-0.5 bg-primary mb-8" />
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { key: "name", placeholder: "Name", type: "text", required: true },
              { key: "email", placeholder: "Email Address", type: "email", required: true },
              { key: "phone", placeholder: "Phone Number", type: "tel", required: false },
              { key: "subject", placeholder: "Subject", type: "text", required: false },
            ].map(({ key, placeholder, type, required }) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                required={required}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/40 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/40 py-3 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-primary text-white px-10 py-3 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
