const ChatbotIcon=()=>{
    return(<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
    {/* Bot Head */}
    <rect x="24" y="40" width="80" height="60" rx="12" ry="12" fill="black" />
    {/* Eyes */}
    <circle cx="48" cy="70" r="8" fill="white" />
    <circle cx="80" cy="70" r="8" fill="white" />
    {/* Mouth */}
    <rect x="56" y="90" width="16" height="4" fill="white" />
    {/* Antenna */}
    <line x1="64" y1="20" x2="64" y2="40" stroke="black" strokeWidth="4" strokeLinecap="round" />
    <circle cx="64" cy="20" r="4" fill="black" />
  </svg>

    </div>)
}

export default ChatbotIcon;