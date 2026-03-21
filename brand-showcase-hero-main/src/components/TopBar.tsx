import { Phone, Mail, MapPin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground py-2 text-sm">
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Phone className="h-3.5 w-3.5" />
        <span>+91 93247 19780</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-3.5 w-3.5" />
        <span>amrutsuthar1103@gmail.com</span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <MapPin className="h-3.5 w-3.5" />
        <span>Bhawani Peth, Pune</span>
      </div>
    </div>
  </div>
);

export default TopBar;
