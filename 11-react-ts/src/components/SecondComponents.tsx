import React from 'react'

type Props = {
  name: string
  title: string
  content: string
  commentsQty: number
  tags: string[]

  // 7 - enum
  category : Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const SecondComponents = ({ name, title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
      <p>Meu segundo component</p>
      <p>O nome dele é {name}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>categoria: {category}</h4>
    </div>
  )
}

export default SecondComponents
