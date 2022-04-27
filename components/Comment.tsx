import { COMMENT } from '../types/Types'

const Comment: React.FC<COMMENT> = ({ id, name, body }) => {
  return (
    <>
      <li className="mx-10">
        <p>
          {id}
          {': '}
          {body}
        </p>
        <p>
          {' by '}
          {name}
        </p>
      </li>
    </>
  )
}

export default Comment
