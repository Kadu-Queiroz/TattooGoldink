import { Instagram, MessageCircle } from 'lucide-react';
import { artists } from './artists';

const ArtistProfile = ({ artist }: { artist: typeof artists[0] }) => (
  <div className="modal-profile-container">
    <div className="flex flex-col items-center text-center mb-6">
      <img
        src={artist.photo}
        alt={`Foto de ${artist.name}`}
        className="w-full max-w-xs rounded-xl object-cover border-4 border-amber-500 mb-4 shadow-xl"
      />
      <h2 id="artist-modal-title" className="text-2xl font-bold">
        {artist.name}
      </h2>
      {artist.specialty && (
        <p className="text-amber-400 mt-1 text-sm uppercase tracking-wide">
          {artist.specialty}
        </p>
      )}
    </div>

    <div className="text-sm text-gray-300 mb-6 max-h-32 overflow-y-auto custom-scrollbar">
      <p>{artist.bio}</p>
    </div>

    <div className="flex justify-center gap-6 pt-4 border-t border-gray-600">
      <SocialLink
        href={`https://instagram.com/${artist.instagram}`}
        icon={<Instagram size={28} />}
        text={`@${artist.instagram}`}
      />
      <SocialLink
        href={`https://wa.me/${artist.whatsapp}`}
        icon={<MessageCircle size={28} />}
        text="WhatsApp"
      />
    </div>
  </div>
);

const SocialLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
  >
    {icon}
    <span className="text-base">{text}</span>
  </a>
);

export default ArtistProfile;