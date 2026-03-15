import dougPhoto from '../../../assets/images/cover_photo_for_about_us/Cover photo_Doug Dykstra.avif'
import jamesPhoto from '../../../assets/images/cover_photo_for_about_us/James Kang.avif'
import defaultPhoto from '../../../assets/images/cover_photo_for_about_us/Team-gray-profile.avif'

const team = [
  {
    name: 'Doug Dykstra',
    role: 'North Jersey Director',
    roleBg: '#3bbfbf',
    photo: dougPhoto,
    description:
      'Doug was born, raised and lives in northern New Jersey.  He earned a Bachelor and Masters degree in engineering from Stevens Institute of Technology in Hoboken, and works in an  engineering management position.  He and his wife Judy have been serving international students for over ten years, and have formed many lasting friendships with students from many countries.  They particularly enjoy hosting student events  in their home.  They have 3 adult children and two grandchildren.  In his spare time Doug enjoys studying and learning new things, and has particular interests in science and world religions.',
  },
  {
    name: 'James Kong',
    role: 'Ministry Representative',
    roleBg: '#1e2a3a',
    photo: jamesPhoto,
    description:
      'James was born and raised in South Korea, educated in the US, and worked as an electrical engineer in Silicon Valley before moving to the East Coast for seminary education.  He served as a volunteer spiritual director in NJ State Prison, pastor of Karen/Karreni youth from Myanmar, and pastor of an international church in NJ.He and his wife Elisabeth are deeply grateful for their two sons and daughters-in-law. He enjoys taking a walk with his wife, exploring the mountains and historical sites around NJ, learning ancient languages, reading books on science, and listening to classical music.',
  },
  {
    name: 'Mirolla Flores',
    role: 'Ministry Representative',
    roleBg: '#a32638',
    photo: defaultPhoto,
    description:
      'Mirolla brings warmth and creativity to IGSCF\'s outreach efforts. She helps plan events that connect students from Latin American backgrounds, and ensure every newcomer feels genuinely welcomed.',
  },
  {
    name: 'Joey Sforza',
    role: 'Ministry Representative',
    roleBg: '#c9922a',
    photo: defaultPhoto,
    description:
      'Joey is passionate about building authentic community among international scholars. He plays a key role in Friday Night programs and special events, making sure everyone has a place to belong.',
  },
]

export default function MeetTeam() {
  return (
    <section className="bg-[#f5f0e8] py-14 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <span className="text-[#6b5c4e] text-xs font-semibold uppercase tracking-widest border border-[#6b5c4e]/30 px-4 py-1 rounded-full">
            The Faces Behind IGSCF
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="w-full h-64 bg-[#f0ebe4] flex items-center justify-center overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <span
                  className="inline-block text-white text-xs font-semibold uppercase tracking-widest px-3 py-0.5 rounded-full mb-2"
                  style={{ backgroundColor: member.roleBg }}
                >
                  {member.role}
                </span>
                <h3 className="font-bold text-[#1a1a1a] text-base mb-2">{member.name}</h3>
                <p className="text-[#6b5c4e] text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
