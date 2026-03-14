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
      'Doug leads the North Jersey region\'s outreach to international graduate students. He has a heart for welcoming newcomers and building lasting cross-cultural friendships in the Hoboken community.',
  },
  {
    name: 'James Kong',
    role: 'Ministry Representative',
    roleBg: '#1e2a3a',
    photo: jamesPhoto,
    description:
      'James serves as a ministry representative, helping connect international students with the IGSCF community and supporting weekly programs, events, and discipleship at Stevens Institute of Technology.',
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
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 gap-5">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="w-full h-64 bg-[#f0ebe4] flex items-center justify-center overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
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
