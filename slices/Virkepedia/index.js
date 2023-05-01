import React, { useState } from 'react'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'

const Virkepedia = ({ slice }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { content, title } = slice.items[activeButtonIndex]

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {slice.items.map(({ title }, index) => (
            <VirkopediaTab
              key={title + index}
              setActiveButtonIndex={setActiveButtonIndex}
              title={title}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle
          title={title}
          content={content}
        />
      </div>
    </div>
  )
}

export default Virkepedia
