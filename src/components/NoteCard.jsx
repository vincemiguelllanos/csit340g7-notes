import { useState } from 'react'

function NoteCard({ title, body }) {

  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-\[22px] font-normal break-words">{title}</h3>
       {expanded && (
      <p className="mt-3 text-\[17px] break-words whitespace-pre-wrap text-\[#4d4d4d]">
       {body}
      </p>
       )}
      <button
      onClick={() => setExpanded(!expanded)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
         {expanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}
 
export default NoteCard