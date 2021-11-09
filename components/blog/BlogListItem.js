export default function BlogListItem({ children }) {
  return (
    <>
      <li className="ml-4 mb-2 list-disc list-outside">
        {children}
      </li>
    </>
  )
}