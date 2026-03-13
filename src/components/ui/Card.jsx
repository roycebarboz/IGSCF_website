export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border border-gray-100 rounded-[10px] shadow-sm ${className}`}>
      {children}
    </div>
  )
}
