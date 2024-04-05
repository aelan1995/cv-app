export default function ResumeLayout({
    children, // will be a page or nested layout
  }) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}