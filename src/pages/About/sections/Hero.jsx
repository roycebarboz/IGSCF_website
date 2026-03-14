import logoImg from '../../../assets/logos/logo.jpg'

export default function Hero() {
  return (
    <section className="bg-[#f5f0e8] py-16 px-8 text-center">
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-[#a32638] flex items-center justify-center shadow-md overflow-hidden">
          <img src={logoImg} alt="IGSCF Logo" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">About IGSCF</h1>
      <p className="text-[#6b5c4e] text-base max-w-xl mx-auto leading-relaxed">
        Welcoming international graduate students, postdocs, and visiting scholars to
        Hoboken — from every religious and ethnic background.
      </p>
    </section>
  )
}
