const MentorCard = ({ mentor }) => (
  <div className="group bg-white rounded-2xl p-6 border border-gray-100
    hover:border-cn-orange/20 hover:shadow-xl transition-all duration-300 card-glow">
    {/* Avatar */}
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mentor.color}
        flex items-center justify-center text-white text-lg font-bold
        group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {mentor.avatar}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-base">{mentor.name}</h3>
        <p className="text-sm text-gray-500">
          {mentor.role} <span className="text-cn-orange font-medium">@ {mentor.company}</span>
        </p>
      </div>
    </div>

    {/* Bio */}
    <p className="text-gray-500 text-sm leading-relaxed">{mentor.bio}</p>
  </div>
);
export default MentorCard;
